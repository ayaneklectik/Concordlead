import type { Metadata } from "next";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery call with Concord Leads. Tell us about your business and we'll design a custom outbound strategy.",
};

const benefits = [
  "30-minute strategy session with our team",
  "Custom campaign recommendation for your industry",
  "Clear timeline and pricing overview",
  "No obligation — just clarity",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-emerald mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
              Let&apos;s start with a conversation
            </h1>
            <p className="mt-6 text-lg text-slate-light max-w-2xl leading-relaxed">
              Book a discovery call and we&apos;ll show you exactly how a dedicated outbound team can transform your appointment quality.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-navy mb-6">What to expect</h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate">
                    <CheckCircle2 className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="space-y-6 rounded-2xl bg-surface border border-border p-8">
                <h3 className="font-semibold text-navy">Get in touch directly</h3>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate hover:text-emerald transition-colors">
                  <Mail className="h-5 w-5 text-emerald" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-slate hover:text-emerald transition-colors">
                  <Phone className="h-5 w-5 text-emerald" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3 text-slate">
                  <Clock className="h-5 w-5 text-emerald" />
                  {siteConfig.hours}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
