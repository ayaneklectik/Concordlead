import type { Metadata } from "next";
import { CheckCircle2, Calendar } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { CalBookingEmbed } from "@/components/forms/CalBookingEmbed";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Concord Leads. Schedule your discovery call.",
};

export default function ThankYouPage() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-navy flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(16,185,129,0.28),transparent_24%),radial-gradient(circle_at_12%_88%,rgba(30,41,59,0.9),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-emerald to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald/30 bg-emerald/15 text-emerald mx-auto mb-8 shadow-[0_0_0_12px_rgba(16,185,129,0.08)]">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-light">Request received</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            You&apos;re one step away
          </h1>
          <p className="text-lg text-slate-light leading-relaxed mb-10">
            Thank you for reaching out to {siteConfig.name}. Your information has been received. The final step is scheduling your discovery call with our team.
          </p>

          <div className="rounded-2xl border border-border bg-surface p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-emerald" />
              <span className="font-semibold text-navy">Schedule Your Call</span>
            </div>
            <p className="text-sm text-slate mb-6">
              Pick a time that works for you. Our discovery calls are 30 minutes and cover your business goals, campaign strategy, and next steps.
            </p>
            <CalBookingEmbed />
          </div>

          <p className="text-sm text-slate-light">
            Prefer email? Reach us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-emerald hover:underline">
              {siteConfig.email}
            </a>
          </p>

          <div className="mt-8">
            <Button href="/" variant="outline">
              Return to Homepage
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
