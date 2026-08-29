import type { Metadata } from "next";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { CalBookingEmbed } from "@/components/forms/CalBookingEmbed";
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
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s start with a conversation"
        description="Book a discovery call and we&apos;ll show you exactly how a dedicated outbound team can transform your appointment quality."
      />

      <section className="py-24 bg-background">
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
              <CalBookingEmbed />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
