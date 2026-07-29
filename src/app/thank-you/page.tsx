import type { Metadata } from "next";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Concord Leads. Schedule your discovery call.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10 text-emerald mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight mb-4">
            You&apos;re one step away
          </h1>
          <p className="text-lg text-slate leading-relaxed mb-10">
            Thank you for reaching out to {siteConfig.name}. Your information has been received. The final step is scheduling your discovery call with our team.
          </p>

          <div className="rounded-2xl border border-border bg-surface p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-emerald" />
              <span className="font-semibold text-navy">Schedule Your Call</span>
            </div>
            <p className="text-sm text-slate mb-6">
              Pick a time that works for you. Our discovery calls are 30 minutes and cover your business goals, campaign strategy, and next steps.
            </p>
            <Button href={siteConfig.calendlyUrl} size="lg" className="w-full sm:w-auto">
              Schedule via Calendly
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-slate">
            Prefer email? Reach us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-emerald hover:underline">
              {siteConfig.email}
            </a>
          </p>

          <div className="mt-8">
            <Button href="/" variant="ghost">
              Return to Homepage
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
