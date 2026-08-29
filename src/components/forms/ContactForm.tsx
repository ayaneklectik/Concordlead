"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

const industries = ["Solar", "Roofing", "Real Estate", "Other"];
const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/discovery-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      setError(result?.error ?? "We couldn't submit your request. Please try again.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-emerald mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-navy mb-3">Thank you!</h3>

        <p className="text-slate mb-8 leading-relaxed">
          We&apos;ve received your information. Schedule your discovery call below
          or visit our confirmation page.
        </p>

        <div className="space-y-3">
          <Button href={siteConfig.bookingUrl} className="w-full">
            Schedule your discovery call
          </Button>

          <Button href="/thank-you" variant="outline" className="w-full">
            Continue to Confirmation
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-8 shadow-xl shadow-navy/5 space-y-5"
    >
      <h3 className="text-xl font-bold text-navy mb-2">
        Request your discovery call
      </h3>

      <p className="text-sm text-slate mb-6">
        Fill out the form and we&apos;ll follow up within one business day.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            className="form-input"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Company Name *
          </label>
          <input
            id="companyName"
            name="companyName"
            required
            className="form-input"
            placeholder="Acme Solar"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="john@acmesolar.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Company Website
        </label>
        <input
          id="website"
          name="website"
          type="url"
          className="form-input"
          placeholder="https://acmesolar.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Industry *
          </label>

          <select id="industry" name="industry" required className="form-input">
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="volume"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Current Appointment Volume
          </label>

          <select id="volume" name="volume" className="form-input">
            <option value="">Select range</option>
            <option value="0-10">0–10 per month</option>
            <option value="10-25">10–25 per month</option>
            <option value="25-50">25–50 per month</option>
            <option value="50+">50+ per month</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Preferred Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className="form-input"
          />
        </div>

        <div>
          <label
            htmlFor="preferredTime"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Preferred Time
          </label>

          <select id="preferredTime" name="preferredTime" className="form-input">
            <option value="">Select time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time} EST
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Additional Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="form-input resize-none"
          placeholder="Tell us about your goals, current challenges, or questions..."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Book Discovery Call"}
      </Button>
    </form>
  );
}
