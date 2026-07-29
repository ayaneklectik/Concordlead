"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/constants";

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions, clear answers"
          description="Everything you need to know before booking your discovery call."
        />

        <FadeIn>
          <Accordion items={faqs} />
        </FadeIn>
      </div>
    </section>
  );
}
