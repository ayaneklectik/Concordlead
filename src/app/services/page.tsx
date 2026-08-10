import type { Metadata } from "next";
import { PhoneOutgoing, CalendarCheck, Headphones } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outbound calling, appointment setting, and customer support services for Solar, Roofing, and Real Estate companies.",
};

const iconMap = { PhoneOutgoing, CalendarCheck, Headphones };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three services. One goal: qualified conversations."
        description="Every service we offer is designed to fill your calendar with prospects who are ready to talk — not just names on a list."
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={service.id}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald/10 text-emerald mb-6">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                      <p className="text-lg text-slate leading-relaxed mb-8">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-dark mb-3">Benefits</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((b) => (
                              <li key={b} className="text-sm text-slate flex items-start gap-2">
                                <span className="text-emerald">•</span>{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-dark mb-3">Process</h3>
                          <ol className="space-y-2">
                            {service.process.map((p, i) => (
                              <li key={p} className="text-sm text-slate flex items-start gap-2">
                                <span className="font-bold text-navy/40">{i + 1}.</span>{p}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                      <div className="rounded-2xl bg-navy p-8 text-white">
                        <p className="text-sm font-medium text-emerald mb-2">Expected Outcome</p>
                        <p className="text-xl font-semibold leading-relaxed">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <hr className="mt-16 border-border" />
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeader
            title="Let's build your campaign"
            description="Every engagement starts with a discovery call. Tell us about your business and we'll design a strategy tailored to your market."
          />
          <Button href="/contact" size="lg">
            Book Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
}
