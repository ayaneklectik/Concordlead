"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  GraduationCap,
  Settings,
  ShieldCheck,
  RefreshCw,
  BarChart2,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChooseUs } from "@/lib/constants";

const illustrationIcons = {
  team: Users,
  report: FileText,
  training: GraduationCap,
  optimize: Settings,
  qa: ShieldCheck,
  followup: RefreshCw,
  data: BarChart2,
};

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built different, on purpose"
          description="Every detail of how we operate is designed to protect your time and strengthen your sales pipeline."
        />

        <div className="space-y-24 lg:space-y-32">
          {whyChooseUs.map((item, index) => {
            const Icon = illustrationIcons[item.illustration as keyof typeof illustrationIcons];
            const isReversed = index % 2 === 1;

            return (
              <FadeIn key={item.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isReversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-slate text-lg leading-relaxed mb-6">{item.description}</p>
                    <div className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-5 py-3">
                      <AnimatedCounter
                        value={item.stat.value}
                        suffix={item.stat.suffix}
                        className="text-2xl font-bold text-emerald"
                      />
                      <span className="text-sm text-slate">{item.stat.label}</span>
                    </div>
                  </div>

                  <motion.div
                    className={`relative ${isReversed ? "lg:[direction:ltr]" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-surface to-white border border-border flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      <div className="relative flex flex-col items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                          <Icon className="h-10 w-10" />
                        </div>
                        <div className="flex gap-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="h-2 w-2 rounded-full bg-emerald/40"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
