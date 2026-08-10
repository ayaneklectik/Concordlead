"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";

const benefits = [
  "30-minute strategy session with our team",
  "Custom campaign recommendation for your industry",
  "Clear timeline and pricing overview",
  "No obligation — just clarity",
];

export function DiscoveryCallSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="text-sm font-medium tracking-widest uppercase text-emerald-dark mb-4">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
              Book your discovery call
            </h2>
            <p className="mt-5 text-lg text-slate leading-relaxed">
              Tell us about your business. We&apos;ll show you exactly how a dedicated outbound team can fill your calendar with qualified appointments.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate">
                  <CheckCircle2 className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 relative">
              <div className="rounded-2xl border border-border bg-surface p-8 max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-6 w-6 text-emerald" />
                  <span className="font-semibold text-navy">Your Calendar</span>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-center text-xs text-slate font-medium py-1">{d.charAt(0)}</div>
                  ))}
                  {[...Array(35)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-xs ${
                        i === 17
                          ? "bg-emerald text-white font-bold"
                          : i > 6 && i < 32
                          ? "bg-white border border-border text-navy hover:border-emerald cursor-pointer"
                          : "text-transparent"
                      }`}
                      whileHover={i > 6 && i < 32 && i !== 17 ? { scale: 1.1 } : {}}
                    >
                      {i > 6 && i < 32 ? i - 6 : ""}
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-slate">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 30 min</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> 1-on-1</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
