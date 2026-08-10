"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CalendarCheck,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const campaigns = [
  { name: "Quick SS", appointments: "215", showRate: "63%", soldRate: "27%", bars: [48, 64, 56, 73, 68, 86, 79] },
  { name: "SolarNation", appointments: "265", showRate: "65%", soldRate: "29%", bars: [54, 61, 72, 65, 82, 76, 91] },
  { name: "Empower", appointments: "300", showRate: "67%", soldRate: "30%", bars: [46, 59, 67, 78, 72, 88, 94] },
];

function CampaignCard({ campaign, index }: { campaign: (typeof campaigns)[number]; index: number }) {
  const metrics = [
    { label: "Valid appointments", value: campaign.appointments, suffix: "/mo", icon: CalendarCheck },
    { label: "Show-up rate", value: campaign.showRate, icon: Users },
    { label: "Sold conversion", value: campaign.soldRate, icon: TrendingUp },
  ];

  return (
    <motion.article
      className="dashboard-glow overflow-hidden rounded-2xl border border-border bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-navy px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Activity className="h-4 w-4 text-emerald" />
          <span className="text-sm font-semibold text-white">{campaign.name}</span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-light">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          Campaign results
        </span>
      </div>

      <div className="space-y-5 p-5">
        <div className="grid grid-cols-3 gap-2.5">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-border/70 bg-surface p-3">
              <metric.icon className="mb-2 h-3.5 w-3.5 text-emerald" />
              <p className="text-lg font-bold leading-none tracking-tight text-navy">
                {metric.value}
                {metric.suffix && <span className="ml-0.5 text-[10px] font-medium text-slate">{metric.suffix}</span>}
              </p>
              <p className="mt-1.5 text-[10px] leading-tight text-slate">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border/70 bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-navy">Monthly appointment volume</p>
            <span className="text-[10px] font-medium text-emerald">Strong & steady</span>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {campaign.bars.map((height, barIndex) => (
              <motion.div
                key={barIndex}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald to-emerald-light"
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + barIndex * 0.05, duration: 0.4 }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border pt-4 text-xs text-slate">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
          Consistent qualified appointments delivered each month
        </div>
      </div>
    </motion.article>
  );
}

export function DashboardSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Campaign Results"
          title="Performance that moves the pipeline"
          description="A snapshot of the qualified appointments and sales outcomes we’ve delivered for our clients."
        />

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={campaign.name} campaign={campaign} index={index} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
