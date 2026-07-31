export const siteConfig = {
  name: "Concord Leads",
  tagline: "Top-Tier Call Center Solutions That Deliver Qualified Conversations.",
  description:
    "Concord Leads helps Solar, Roofing, and Real Estate businesses reduce customer acquisition costs with dedicated outbound teams that generate qualified appointments.",
  email: "concordleads2026@gmail.com",
  phone: "+8801820350351",
  hours: "Mon–Fri, 8:00 AM – 6:00 PM EST",
  linkedin: "https://linkedin.com/company/concord-leads",
  calendlyUrl: "https://calendly.com/concord-leads/discovery",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  "Daily Reporting",
  "Dedicated Agents",
  "Fast 3–5 Day Launch",
  "US Market Specialists",
];

export const trustStats = [
  { value: 5, suffix: " Days", prefix: "3–", label: "Average Campaign Launch" },
  { value: 0, suffix: "", prefix: "Daily", label: "Performance Reporting", isText: true },
  { value: 100, suffix: "%", prefix: "", label: "Dedicated Teams" },
  { value: 0, suffix: "", prefix: "US", label: "Nationwide Coverage", isText: true },
];

export const services = [
  {
    id: "outbound",
    title: "Outbound Calling",
    icon: "PhoneOutgoing",
    description:
      "Strategic outbound campaigns designed to reach decision-makers at the right time with the right message.",
    benefits: [
      "Targeted prospect lists aligned to your ICP",
      "Scripts refined through continuous QA",
      "Multi-touch cadences that respect your brand",
    ],
    process: [
      "Define ideal customer profile",
      "Build and validate call lists",
      "Launch with dedicated agents",
      "Optimize based on connect rates",
    ],
    outcome: "Consistent pipeline of engaged prospects ready for your sales team.",
  },
  {
    id: "appointments",
    title: "Appointment Setting",
    icon: "CalendarCheck",
    description:
      "Qualified appointments booked directly on your calendar — not just names on a spreadsheet.",
    benefits: [
      "Pre-qualified leads before booking",
      "Calendar integration with your CRM",
      "Confirmation and reminder workflows",
    ],
    process: [
      "Qualify prospects against your criteria",
      "Schedule at optimal times for show rates",
      "Send confirmations to both parties",
      "Follow up on no-shows systematically",
    ],
    outcome: "Higher show rates and sales-ready conversations from day one.",
  },
  {
    id: "support",
    title: "Customer Support",
    icon: "Headphones",
    description:
      "Professional inbound support that protects your reputation and keeps customers moving forward.",
    benefits: [
      "Brand-aligned communication standards",
      "Escalation paths for complex issues",
      "Ticket logging and resolution tracking",
    ],
    process: [
      "Document your support protocols",
      "Train agents on your products",
      "Monitor response quality daily",
      "Report on volume and resolution trends",
    ],
    outcome: "Reliable customer experience without expanding your internal team.",
  },
];

export const whyChooseUs = [
  {
    title: "Dedicated Teams",
    description:
      "Your agents work exclusively on your campaign. No shared queues, no divided attention — just focused execution on your goals.",
    stat: { value: 100, suffix: "%", label: "Campaign Focus" },
    illustration: "team",
  },
  {
    title: "Daily Reporting",
    description:
      "Every morning, you receive a clear snapshot of calls made, conversations held, appointments booked, and pipeline movement.",
    stat: { value: 365, suffix: "", label: "Reports Per Year" },
    illustration: "report",
  },
  {
    title: "Continuous Agent Training",
    description:
      "Weekly coaching sessions, call reviews, and script refinements keep your team sharp and your messaging current.",
    stat: { value: 52, suffix: "+", label: "Training Sessions Annually" },
    illustration: "training",
  },
  {
    title: "Campaign Optimization",
    description:
      "We analyze connect rates, talk time, and conversion data to adjust cadences, scripts, and targeting in real time.",
    stat: { value: 24, suffix: "hr", label: "Optimization Cycle" },
    illustration: "optimize",
  },
  {
    title: "Quality Assurance",
    description:
      "Every campaign includes structured QA — recorded call reviews, scorecards, and corrective coaching before issues reach your pipeline.",
    stat: { value: 15, suffix: "%", label: "Calls Reviewed Weekly" },
    illustration: "qa",
  },
  {
    title: "Follow Up Process",
    description:
      "No lead falls through the cracks. Structured follow-up sequences ensure prospects who need time still convert.",
    stat: { value: 5, suffix: "x", label: "Average Touch Points" },
    illustration: "followup",
  },
  {
    title: "Data Driven Decisions",
    description:
      "Dashboards, funnel metrics, and trend analysis give you visibility into what's working — and what to change next.",
    stat: { value: 12, suffix: "+", label: "KPIs Tracked" },
    illustration: "data",
  },
];

export const processSteps = [
  { title: "Discovery Call", duration: "1 Day", description: "We learn your business, goals, and ideal customer profile." },
  { title: "Campaign Strategy", duration: "1 Day", description: "Custom playbook, scripts, and qualification criteria." },
  { title: "Deposit", duration: "Same Day", description: "Secure your dedicated team and campaign slot." },
  { title: "Recruit & Train Agents", duration: "2–3 Days", description: "Agents selected and trained specifically for your industry." },
  { title: "Dialer Setup", duration: "1 Day", description: "CRM integration, call routing, and reporting configured." },
  { title: "Quality Assurance", duration: "1 Day", description: "Test calls, script validation, and QA scorecard setup." },
  { title: "Campaign Launch", duration: "Day 3–5", description: "Live outbound with daily monitoring from day one." },
  { title: "Daily Optimization", duration: "Ongoing", description: "Continuous refinement based on performance data." },
];

export const industries = [
  {
    id: "solar",
    title: "Solar",
    icon: "Sun",
    painPoints: [
      "High cost per lead from paid channels",
      "Unqualified homeowners wasting sales time",
      "Inconsistent appointment show rates",
    ],
    solution:
      "Dedicated outbound teams trained on solar qualification — roof age, utility bills, homeowner decision-making — before anything hits your calendar.",
    results: [
      "40% reduction in unqualified appointments",
      "Higher close rates from pre-vetted homeowners",
      "Predictable pipeline for install crews",
    ],
  },
  {
    id: "roofing",
    title: "Roofing",
    icon: "Home",
    painPoints: [
      "Seasonal demand spikes overwhelm sales teams",
      "Storm-chasing leads with low intent",
      "Long sales cycles without follow-up",
    ],
    solution:
      "Targeted outreach to homeowners with aging roofs, insurance claim opportunities, and scheduled inspection workflows built for roofing sales cycles.",
    results: [
      "Steady appointment flow year-round",
      "Better-qualified storm and replacement leads",
      "Structured follow-up on inspection no-shows",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: "Building2",
    painPoints: [
      "Agents spending hours on cold outreach",
      "Low conversion from online lead forms",
      "Difficulty reaching motivated sellers",
    ],
    solution:
      "Outbound teams that nurture seller and buyer leads, book listing appointments, and maintain consistent touch points through long decision cycles.",
    results: [
      "More listing appointments per agent",
      "Higher engagement from seller prospects",
      "Consistent pipeline without agent burnout",
    ],
  },
];

export const faqs = [
  {
    question: "How quickly can we start?",
    answer:
      "Most campaigns launch within 3–5 business days after your discovery call and deposit. We move fast because your pipeline can't wait.",
  },
  {
    question: "Do agents work exclusively for us?",
    answer:
      "Yes. Every agent assigned to your campaign works exclusively on your account. No shared agents, no competing priorities.",
  },
  {
    question: "Do you provide reports?",
    answer:
      "Daily performance reports delivered every morning — calls made, conversations held, appointments booked, and pipeline metrics. Full transparency, always.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We specialize in Solar, Roofing, and Real Estate — industries where appointment quality directly impacts revenue. Our agents are trained specifically for these verticals.",
  },
  {
    question: "Can campaigns scale?",
    answer:
      "Absolutely. Start with a focused team and expand as results prove out. We add agents, adjust territories, and scale cadences based on your growth targets.",
  },
];
