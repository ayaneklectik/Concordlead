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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(217,155,127,0.32),transparent_23%),radial-gradient(circle_at_10%_92%,rgba(15,48,64,0.95),transparent_36%),linear-gradient(115deg,#0F3040_0%,#0F3040_52%,#464858_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute top-24 right-[8%] h-36 w-36 rounded-full border border-emerald/30" />
      <div className="absolute top-40 right-[12%] h-3 w-3 rounded-full bg-emerald shadow-[0_0_0_12px_rgba(217,155,127,0.22)]" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-emerald to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase text-emerald-light shadow-sm mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              B2B Call Center & Appointment Setting
            </p>
            <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Top-Tier Call Center Solutions That Deliver{" "}
              <span className="text-emerald">Qualified Conversations.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-light leading-relaxed max-w-xl">
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
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-slate-light">
                  <CheckCircle2 className="h-4 w-4 text-emerald flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-navy/5 blur-2xl" />
              <div className="dashboard-glow relative rounded-2xl border border-white/90 bg-white/90 p-5 shadow-2xl shadow-navy/10 backdrop-blur sm:p-6">
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
