"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/constants";

export function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="From discovery to daily optimization"
          description="A clear, structured path from your first call to a fully optimized outbound campaign."
          dark
        />

        <FadeIn>
          <div className="relative mt-8">
            <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-white/10" />

            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0 lg:pt-3">
              {processSteps.map((step, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={step.title}
                    className="flex-shrink-0 lg:min-w-0 lg:flex-1"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`relative h-full rounded-2xl border p-5 transition-all duration-300 cursor-default lg:mx-1 ${
                        isHovered
                          ? "border-emerald bg-white/10 shadow-lg shadow-emerald/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 items-center justify-center rounded-full bg-emerald text-white text-xs font-bold">
                        {index + 1}
                      </div>

                      <p className="text-xs font-medium text-emerald mb-1 lg:mt-2">
                        {step.duration}
                      </p>

                      <h3 className="text-sm font-bold text-white mb-2">
                        {step.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-slate-light leading-relaxed pt-1">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { phase: "Discovery", time: "1 Day" },
              { phase: "Preparation", time: "3–5 Days" },
              { phase: "Optimization", time: "Ongoing" },
            ].map((item) => (
              <div
                key={item.phase}
                className="text-center rounded-xl border border-white/10 bg-white/5 py-5 px-4"
              >
                <p className="text-sm text-slate-light mb-1">{item.phase}</p>
                <p className="text-xl font-bold text-white">{item.time}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
