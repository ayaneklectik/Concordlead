"use client";

import { motion } from "framer-motion";
import { PhoneOutgoing, CalendarCheck, Headphones, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/constants";

const iconMap = {
  PhoneOutgoing,
  CalendarCheck,
  Headphones,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything your pipeline needs"
          description="Three core services designed to fill your calendar with conversations that convert."
        />

        <StaggerContainer className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="group h-full rounded-2xl border border-border bg-white p-8 hover:border-emerald/30 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald mb-6 group-hover:bg-emerald group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-slate leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-2">
                        Benefits
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="text-sm text-slate flex items-start gap-2">
                            <span className="text-emerald mt-0.5">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-2">
                        Process
                      </p>
                      <ul className="space-y-2">
                        {service.process.map((p, i) => (
                          <li key={p} className="text-sm text-slate flex items-start gap-2">
                            <span className="text-xs font-bold text-navy/40 mt-0.5">{i + 1}.</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-1">
                        Expected Outcome
                      </p>
                      <p className="text-sm font-medium text-navy">{service.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-dark hover:text-emerald transition-colors"
          >
            View all service details
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
