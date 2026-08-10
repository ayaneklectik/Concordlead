"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const timeline = [
  {
    year: "The Problem",
    title: "Volume wasn't the issue",
    description:
      "After spending years working inside Solar, Roofing, and Real Estate, one thing became obvious.",
  },
  {
    year: "The Insight",
    title: "Quality over quantity",
    description:
      "Companies weren't losing sales because they lacked leads. They were losing sales because the appointments weren't qualified.",
  },
  {
    year: "The Impact",
    title: "Sales reps chasing, not closing",
    description:
      "Sales reps spent more time chasing people than closing deals. Every unqualified appointment cost time, morale, and revenue.",
  },
  {
    year: "The Solution",
    title: "Concord Leads was born",
    description:
      "Concord Leads was created to solve exactly that — building dedicated outbound teams focused on qualified conversations.",
  },
];

const contrasts = [
  { instead: "Instead of chasing volume...", we: "We focus on quality." },
  { instead: "Instead of call center agents...", we: "We build dedicated outbound teams." },
  { instead: "Instead of handing over appointments...", we: "We build relationships before your sales team even gets involved." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Us"
          title="Built from experience, not theory"
          description="We didn't start Concord Leads from a business plan. We started it from years inside the industries we serve."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald via-border to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="relative pl-16">
                    <div className="absolute left-3.5 top-1.5 h-5 w-5 rounded-full border-2 border-emerald bg-white" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                {contrasts.map((item, i) => (
                  <motion.div
                    key={item.instead}
                    className="rounded-2xl border border-border p-6 hover:border-emerald/30 hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <p className="text-sm text-slate mb-2">{item.instead}</p>
                    <p className="text-lg font-semibold text-navy">{item.we}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-8 rounded-2xl bg-navy text-white">
                <p className="text-2xl font-bold leading-snug">
                  &ldquo;We don&apos;t replace your sales team.
                  <br />
                  <span className="text-emerald">We strengthen it.&rdquo;</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
