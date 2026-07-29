"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { trustStats } from "@/lib/constants";

export function TrustSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <FadeIn>
                <div className="text-center p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isText={stat.isText}
                    />
                  </div>
                  <p className="text-sm text-slate-light leading-relaxed">{stat.label}</p>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
