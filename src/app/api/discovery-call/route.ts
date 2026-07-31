const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbyjepvTNgjG82-Tj5gDNe1mWjq_f-l25qJMkHVI-QUu0aEX_iwXILpav_eug-TY9ctr/exec";
const NOTIFICATION_EMAIL = "concordleads2026@gmail.com";

const fields = [
  "fullName",
  "companyName",
  "email",
  "phone",
  "website",
  "industry",
  "volume",
  "preferredDate",
  "preferredTime",
  "notes",
] as const;

type DiscoveryCallField = (typeof fields)[number];
type DiscoveryCallSubmission = Record<DiscoveryCallField, string>;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function formatSubmissionEmail(submission: DiscoveryCallSubmission) {
  const labels: Record<DiscoveryCallField, string> = {
    fullName: "Full name",
    companyName: "Company",
    email: "Email",
    phone: "Phone",
    website: "Website",
    industry: "Industry",
    volume: "Current appointment volume",
    preferredDate: "Preferred date",
    preferredTime: "Preferred time",
    notes: "Additional notes",
  };

  const rows = fields
    .map((field) => {
      const value = submission[field] || "Not provided";
      return `<tr><th align="left" style="padding:8px;border:1px solid #d1d5db">${labels[field]}</th><td style="padding:8px;border:1px solid #d1d5db">${escapeHtml(value)}</td></tr>`;
    })
    .join("");

  return `<h1>New discovery call request</h1><table style="border-collapse:collapse">${rows}</table>`;
}

async function sendNotificationEmail(submission: DiscoveryCallSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Email notifications are not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "concord-leads-website",
    },
    body: JSON.stringify({
      from,
      to: [NOTIFICATION_EMAIL],
      reply_to: submission.email,
      subject: `New discovery call request from ${submission.fullName}`,
      html: formatSubmissionEmail(submission),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Resend returned ${response.status}`);
  }
}

function getSubmission(body: unknown): DiscoveryCallSubmission | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const values = Object.fromEntries(
    fields.map((field) => {
      const value = (body as Record<string, unknown>)[field];
      return [field, typeof value === "string" ? value.trim() : ""];
    })
  ) as DiscoveryCallSubmission;

  if (
    !values.fullName ||
    !values.companyName ||
    !values.phone ||
    !values.industry ||
    !/^\S+@\S+\.\S+$/.test(values.email)
  ) {
    return null;
  }

  return values;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  const submission = getSubmission(body);

  if (!submission) {
    return Response.json(
      { error: "Please complete all required fields with a valid email address." },
      { status: 400 }
    );
  }

  try {
    const [sheetsResponse] = await Promise.all([
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...submission,
          submittedAt: new Date().toISOString(),
          source: "concord-leads-website",
        }),
        signal: AbortSignal.timeout(10_000),
      }),
      sendNotificationEmail(submission),
    ]);

    if (!sheetsResponse.ok) {
      throw new Error(`Google Sheets webhook returned ${sheetsResponse.status}`);
    }
  } catch (error) {
    console.error("Discovery call submission failed", error);
    return Response.json(
      { error: "We couldn't submit your request. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
