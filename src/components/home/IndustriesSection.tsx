"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Home, Building2, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = { Sun, Home, Building2 };

export function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const active = industries.find((i) => i.id === activeId)!;

  return (
    <section id="industries" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Specialized for your market"
          description="Deep industry knowledge means every conversation starts closer to a close."
        />

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];
              const isActive = activeId === industry.id;
              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveId(industry.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-navy text-white shadow-lg"
                      : "bg-surface text-slate hover:text-navy border border-border"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {industry.title}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-navy mb-4">Pain Points</h3>
              <ul className="space-y-3">
                {active.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald/30 bg-emerald/5 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-navy mb-4">Our Solution</h3>
              <p className="text-sm text-slate leading-relaxed">{active.solution}</p>
            </div>

            <div className="rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-navy mb-4">Expected Results</h3>
              <ul className="space-y-3">
                {active.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-sm text-slate">
                    <CheckCircle2 className="h-4 w-4 text-emerald flex-shrink-0 mt-0.5" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mt-12 lg:hidden">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={industry.id}>
                <div className="rounded-2xl border border-border p-6 text-center">
                  <Icon className="h-8 w-8 text-emerald mx-auto mb-3" />
                  <h3 className="font-bold text-navy">{industry.title}</h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
