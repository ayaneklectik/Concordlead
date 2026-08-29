"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/constants";

const namespace = "discovery-call-with-concord-leads";

type CalFunction = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalFunction>;
  q?: unknown[][];
  config?: { forwardQueryParams?: boolean };
};

declare global {
  interface Window {
    Cal?: CalFunction;
  }
}

export function CalBookingEmbed() {
  useEffect(() => {
    const C = window;
    const A = "https://app.cal.com/embed/embed.js";
    const L = "init";

    C.Cal = C.Cal || function (...args: unknown[]) {
      const cal = C.Cal as CalFunction;
      const ar = args;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];

        const script = document.createElement("script");
        script.src = A;
        script.async = true;
        document.head.appendChild(script);

        cal.loaded = true;
      }

      if (ar[0] === L) {
        const api = function (...apiArgs: unknown[]) {
          api.q?.push(apiArgs);
        } as CalFunction;

        const requestedNamespace = ar[1];
        api.q = api.q || [];

        if (typeof requestedNamespace === "string") {
          cal.ns![requestedNamespace] = cal.ns![requestedNamespace] || api;
          cal.ns![requestedNamespace].q?.push(ar);
          cal.q?.push(["initNamespace", requestedNamespace]);
        } else {
          cal.q?.push(ar);
        }

        return;
      }

      cal.q?.push(ar);
    };

    const cal = C.Cal;

    cal("init", namespace, { origin: "https://app.cal.com" });
    cal.config = cal.config || {};
    cal.config.forwardQueryParams = true;

    cal.ns?.[namespace]?.("inline", {
      elementOrSelector: "#cal-discovery-call",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "dark",
      },
      calLink: "eklectikbbx-umdcws/discovery-call-with-concord-leads",
    });

    cal.ns?.[namespace]?.("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-navy p-1 shadow-xl shadow-navy/10">
      <div id="cal-discovery-call" className="h-[720px] w-full overflow-auto" />

      <p className="px-5 py-3 text-center text-sm text-slate-light">
        Having trouble loading the calendar?{" "}
        <a href={siteConfig.bookingUrl} className="text-emerald-light hover:underline">
          Open the booking page
        </a>
        .
      </p>
    </div>
  );
}
