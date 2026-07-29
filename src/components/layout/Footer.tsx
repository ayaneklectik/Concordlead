import Link from "next/link";
import { Mail, Phone, Clock, ExternalLink } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald text-white font-bold text-sm">
                CL
              </div>
              <span className="text-lg font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed">
              Dedicated outbound teams for Solar, Roofing, and Real Estate companies across the United States.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-slate-light">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 hover:text-emerald transition-colors"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-slate-light">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-emerald flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 text-emerald flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-emerald transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="h-4 w-4 text-emerald flex-shrink-0" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-slate-light">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-white/80 hover:text-emerald transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/80 hover:text-emerald transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-emerald transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-light">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-light">
            Serving businesses nationwide across the United States.
          </p>
        </div>
      </div>
    </footer>
  );
}
