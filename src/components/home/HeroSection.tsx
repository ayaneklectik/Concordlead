"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Users,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { trustBadges } from "@/lib/constants";

const kpis = [
  { label: "Outbound Calls", value: "1,247", change: "+12%", icon: Phone },
  { label: "Qualified Leads", value: "186", change: "+8%", icon: Users },
  { label: "Appointments", value: "47", change: "+15%", icon: CalendarCheck },
  { label: "Show Rate", value: "82%", change: "+3%", icon: TrendingUp },
];

const notifications = [
  { text: "New Appointment Booked", delay: 0 },
  { text: "Qualified Lead Added", delay: 1.5 },
  { text: "Client Report Sent", delay: 3 },
];

function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-emerald/80"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

function AgentRow({ name, calls, appts, rank }: { name: string; calls: number; appts: number; rank: number }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
      <span className="text-xs font-bold text-emerald w-5">#{rank}</span>
      <span className="text-xs text-navy flex-1 truncate">{name}</span>
      <span className="text-xs text-slate">{calls}</span>
      <span className="text-xs font-medium text-emerald">{appts}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-medium tracking-widest uppercase text-emerald-dark mb-4">
              B2B Call Center & Appointment Setting
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.1]">
              Top-Tier Call Center Solutions That Deliver{" "}
              <span className="gradient-text">Qualified Conversations.</span>
            </h1>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl">
              We help Solar, Roofing, and Real Estate businesses reduce customer acquisition costs by providing highly trained outbound teams that consistently generate qualified opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Book Discovery Call
              </Button>
              <Button href="#about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-slate">
                  <CheckCircle2 className="h-4 w-4 text-emerald flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="dashboard-glow rounded-2xl border border-border bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-emerald" />
                    <span className="text-sm font-semibold text-navy">Campaign Dashboard</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-emerald">
                    <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {kpis.map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      className="rounded-xl bg-surface p-3 border border-border/50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <kpi.icon className="h-3.5 w-3.5 text-slate" />
                        <span className="text-[10px] text-slate uppercase tracking-wide">{kpi.label}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-navy">{kpi.value}</span>
                        <span className="text-[10px] font-medium text-emerald">{kpi.change}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-xl bg-surface p-4 border border-border/50 mb-4">
                  <p className="text-xs font-medium text-slate mb-3">Weekly Performance</p>
                  <MiniChart />
                </div>

                <div className="rounded-xl bg-surface p-4 border border-border/50">
                  <p className="text-xs font-medium text-slate mb-2">Agent Performance</p>
                  <AgentRow name="Sarah M." calls={142} appts={12} rank={1} />
                  <AgentRow name="James K." calls={128} appts={10} rank={2} />
                  <AgentRow name="Maria L." calls={119} appts={9} rank={3} />
                </div>
              </div>

              {notifications.map((notif) => (
                <motion.div
                  key={notif.text}
                  className="absolute glass rounded-xl border border-border shadow-lg px-4 py-2.5 text-xs font-medium text-navy"
                  style={{
                    top: notif.delay === 0 ? "-12px" : notif.delay === 1.5 ? "40%" : "75%",
                    right: notif.delay === 0 ? "-8px" : notif.delay === 1.5 ? "-16px" : "8px",
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + notif.delay, duration: 0.5 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    {notif.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
