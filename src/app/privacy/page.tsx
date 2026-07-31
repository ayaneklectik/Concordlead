import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Concord Leads.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 29, 2026"
        narrow
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-slate">
          <FadeIn>
            <div className="space-y-8 text-slate leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Introduction</h2>
                <p>
                  {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number, company name)</li>
                  <li>Business information (industry, website, appointment volume)</li>
                  <li>Communication preferences and scheduling information</li>
                  <li>Technical data (IP address, browser type, device information) collected automatically</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and schedule discovery calls</li>
                  <li>To provide and improve our call center and appointment setting services</li>
                  <li>To send relevant business communications</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share information with trusted service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements. We may also disclose information when required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Your Rights</h2>
                <p>
                  Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, contact us at {siteConfig.email}.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-3">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{" "}
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
