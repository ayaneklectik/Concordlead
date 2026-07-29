import type { Metadata } from "next";
import { Sun, Home, Building2, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Specialized outbound calling and appointment setting for Solar, Roofing, and Real Estate companies across the United States.",
};

const iconMap = { Sun, Home, Building2 };

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-emerald mb-4">Industries</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
              Deep expertise in the markets that matter
            </h1>
            <p className="mt-6 text-lg text-slate-light max-w-2xl leading-relaxed">
              Our agents aren&apos;t generalists. They&apos;re trained specifically for the sales cycles, objections, and qualification criteria of your industry.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={industry.id}>
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">{industry.title}</h2>
                      </div>
                      <p className="text-slate leading-relaxed">{industry.solution}</p>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-dark mb-4">Pain Points</h3>
                      <ul className="space-y-3">
                        {industry.painPoints.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-slate">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-dark mb-4">Expected Results</h3>
                      <ul className="space-y-3">
                        {industry.results.map((result) => (
                          <li key={result} className="flex items-start gap-3 text-slate">
                            <CheckCircle2 className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < industries.length - 1 && <hr className="mt-20 border-border" />}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeader
            title="Let's talk about your industry"
            description="Every campaign starts with understanding your market. Book a discovery call and we'll show you what's possible."
          />
          <Button href="/contact" size="lg">
            Book Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
}
