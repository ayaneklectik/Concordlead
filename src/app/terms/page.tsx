import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Concord Leads.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: July 29, 2026"
        narrow
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-8 text-slate leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Agreement to Terms</h2>
                <p>
                  By accessing or using the {siteConfig.name} website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Services Description</h2>
                <p>
                  {siteConfig.name} provides B2B call center, outbound calling, appointment setting, and customer support services for businesses in the Solar, Roofing, and Real Estate industries. Specific service terms are outlined in individual client agreements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Client Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate business information and campaign requirements</li>
                  <li>Ensure compliance with applicable telemarketing and privacy laws</li>
                  <li>Provide necessary access to CRM systems and scheduling tools</li>
                  <li>Review and approve scripts, qualification criteria, and campaign parameters</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Payment Terms</h2>
                <p>
                  Payment terms, including deposits, recurring fees, and billing cycles, are specified in individual service agreements. Campaign preparation begins upon receipt of the agreed deposit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and software, is the property of {siteConfig.name} and is protected by applicable intellectual property laws. Client-provided materials remain the property of the client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Limitation of Liability</h2>
                <p>
                  {siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid by the client during the preceding three months.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Termination</h2>
                <p>
                  Either party may terminate services according to the terms specified in the individual service agreement. Upon termination, all outstanding fees become due and confidential information must be returned or destroyed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Contact</h2>
                <p>
                  For questions about these Terms of Service, contact us at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-emerald hover:underline">{siteConfig.email}</a>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
