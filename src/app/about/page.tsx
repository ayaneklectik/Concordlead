import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero
        eyebrow="About Us"
        title="Built from experience inside the industries we serve"
        description="Concord Leads wasn&apos;t born from a business plan. It was born from years of watching qualified sales teams lose deals to unqualified appointments."
      />

      <section className="relative overflow-hidden bg-[#3368A0] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(102,163,191,0.35),transparent_24%),radial-gradient(circle_at_94%_78%,rgba(51,104,160,0.95),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Our story</p>
              <h2 className="mb-6 text-3xl font-bold text-white">Built for the conversations that move business forward.</h2>
              <div className="space-y-5 text-slate-light leading-relaxed">
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
                <p className="text-xl font-semibold text-white">
                  &ldquo;We don&apos;t replace your sales team. We strengthen it.&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Our operating principles</p>
                <h3 className="mb-8 text-2xl font-bold text-white">What we believe</h3>
                <div className="divide-y divide-white/10">
                  {values.map((value, index) => (
                    <div key={value.title} className="grid grid-cols-[auto_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="mt-0.5 text-sm font-bold text-emerald">0{index + 1}</span>
                      <div>
                        <h4 className="mb-1 font-semibold text-white">{value.title}</h4>
                        <p className="text-sm leading-relaxed text-slate-light">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3368A0] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(102,163,191,0.45),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeader
            title="Ready to strengthen your sales pipeline?"
            description="Book a discovery call and let's discuss how dedicated outbound teams can transform your appointment quality."
            dark
          />
          <Button href="/contact" size="lg">
            Book Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
}
