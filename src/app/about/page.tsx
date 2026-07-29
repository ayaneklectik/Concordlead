import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Concord Leads was built from years of experience in Solar, Roofing, and Real Estate to deliver qualified appointments, not just volume.",
};

const values = [
  {
    title: "Quality over volume",
    description:
      "Every appointment we book is pre-qualified against your criteria. Your sales team should spend time closing, not chasing.",
  },
  {
    title: "Transparency by default",
    description:
      "Daily reports, open dashboards, and direct communication. You always know exactly what your campaign is producing.",
  },
  {
    title: "Industry specialization",
    description:
      "Our agents aren't generalists. They're trained specifically for Solar, Roofing, and Real Estate sales cycles.",
  },
  {
    title: "Partnership mindset",
    description:
      "We don't replace your sales team — we strengthen it. Your success is the only metric that matters to us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-emerald mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
              Built from experience inside the industries we serve
            </h1>
            <p className="mt-6 text-lg text-slate-light max-w-2xl leading-relaxed">
              Concord Leads wasn&apos;t born from a business plan. It was born from years of watching qualified sales teams lose deals to unqualified appointments.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-navy mb-6">Our story</h2>
              <div className="space-y-5 text-slate leading-relaxed">
                <p>
                  After spending years working inside Solar, Roofing, and Real Estate, one thing became obvious. Companies weren&apos;t losing sales because they lacked leads.
                </p>
                <p>
                  They were losing sales because the appointments weren&apos;t qualified. Sales reps spent more time chasing people than closing deals.
                </p>
                <p>
                  Concord Leads was created to solve exactly that. Instead of chasing volume, we focus on quality. Instead of call center agents, we build dedicated outbound teams.
                </p>
                <p>
                  Instead of handing over appointments, we build relationships before your sales team even gets involved.
                </p>
              </div>
              <blockquote className="mt-8 border-l-4 border-emerald pl-6">
                <p className="text-xl font-semibold text-navy">
                  &ldquo;We don&apos;t replace your sales team. We strengthen it.&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h3 className="text-xl font-bold text-navy mb-6">What we believe</h3>
                <div className="space-y-6">
                  {values.map((value) => (
                    <div key={value.title}>
                      <h4 className="font-semibold text-navy mb-1">{value.title}</h4>
                      <p className="text-sm text-slate leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeader
            title="Ready to strengthen your sales pipeline?"
            description="Book a discovery call and let's discuss how dedicated outbound teams can transform your appointment quality."
          />
          <Button href="/contact" size="lg">
            Book Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
}
