import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-16">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="text-8xl font-bold text-emerald/20 mb-4">404</p>
        <h1 className="text-3xl font-bold text-navy mb-4">Page not found</h1>
        <p className="text-slate leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="outline">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
