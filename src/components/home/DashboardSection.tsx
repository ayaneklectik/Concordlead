"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Phone,
  TrendingUp,
  Users,
  Activity,
  Target,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const funnelStages = [
  { label: "Calls Made", value: 1247, width: "100%" },
  { label: "Connected", value: 623, width: "50%" },
  { label: "Qualified", value: 186, width: "15%" },
  { label: "Appointments", value: 47, width: "4%" },
];

const weeklyData = [32, 45, 38, 52, 48, 61, 55, 58, 63, 57, 68, 72];
const monthlyTrend = [120, 135, 128, 142, 156, 148, 165, 172, 168, 185, 192, 201];

const agents = [
  { name: "Sarah M.", calls: 142, appts: 12, rate: "84%" },
  { name: "James K.", calls: 128, appts: 10, rate: "78%" },
  { name: "Maria L.", calls: 119, appts: 9, rate: "76%" },
  { name: "David R.", calls: 115, appts: 8, rate: "70%" },
  { name: "Emily T.", calls: 108, appts: 7, rate: "65%" },
];

function AnimatedBar({ height, delay }: { height: number; delay: number }) {
  return (
    <motion.div
      className="flex-1 rounded-t bg-emerald/70 hover:bg-emerald transition-colors"
      initial={{ height: 0 }}
      whileInView={{ height: `${height}%` }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    />
  );
}

export function DashboardSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Performance"
          title="Complete visibility into your campaign"
          description="Every metric that matters — tracked, reported, and optimized daily."
        />

        <FadeIn>
          <div className="rounded-2xl border border-border bg-white dashboard-glow overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-navy">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-emerald" />
                <span className="text-sm font-semibold text-white">Sample Performance Dashboard</span>
              </div>
              <span className="text-xs text-slate-light bg-white/10 px-3 py-1 rounded-full">
                Illustrative Data — Not Real Client Metrics
              </span>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Appointments Booked", value: "47", icon: CalendarCheck, change: "+15%" },
                  { label: "Calls Made", value: "1,247", icon: Phone, change: "+12%" },
                  { label: "Answer Rate", value: "49.9%", icon: Target, change: "+2.1%" },
                  { label: "Conversion Rate", value: "3.8%", icon: TrendingUp, change: "+0.4%" },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    className="rounded-xl border border-border p-4 bg-surface"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <kpi.icon className="h-4 w-4 text-emerald" />
                      <span className="text-xs text-slate">{kpi.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-navy">{kpi.value}</span>
                      <span className="text-xs font-medium text-emerald">{kpi.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 rounded-xl border border-border p-5">
                  <h4 className="text-sm font-semibold text-navy mb-4">Lead Funnel</h4>
                  <div className="space-y-3">
                    {funnelStages.map((stage, i) => (
                      <div key={stage.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate">{stage.label}</span>
                          <span className="font-medium text-navy">{stage.value.toLocaleString()}</span>
                        </div>
                        <div className="h-2 rounded-full bg-surface overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-emerald/60 to-emerald"
                            initial={{ width: 0 }}
                            whileInView={{ width: stage.width }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate">Show Rate</span>
                      <span className="text-lg font-bold text-emerald">82%</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 rounded-xl border border-border p-5">
                  <h4 className="text-sm font-semibold text-navy mb-4">Weekly Performance</h4>
                  <div className="flex items-end gap-1.5 h-32">
                    {weeklyData.map((h, i) => (
                      <AnimatedBar key={i} height={(h / 72) * 100} delay={0.1 + i * 0.05} />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-navy mb-3">Pipeline Health</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-3 rounded-full bg-surface overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-emerald"
                          initial={{ width: 0 }}
                          whileInView={{ width: "78%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="text-sm font-bold text-navy">78%</span>
                    </div>
                    <p className="text-xs text-slate mt-1">Healthy pipeline with steady flow</p>
                  </div>
                </div>

                <div className="lg:col-span-1 rounded-xl border border-border p-5">
                  <h4 className="text-sm font-semibold text-navy mb-4">Monthly Trend</h4>
                  <div className="flex items-end gap-1 h-24">
                    {monthlyTrend.map((h, i) => (
                      <AnimatedBar key={i} height={(h / 201) * 100} delay={0.1 + i * 0.04} />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald" />
                      <span className="text-xs text-slate">Active Agents: 5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border overflow-hidden">
                <div className="px-5 py-3 bg-surface border-b border-border">
                  <h4 className="text-sm font-semibold text-navy">Agent Leaderboard</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="px-5 py-3 text-xs font-medium text-slate">Rank</th>
                        <th className="px-5 py-3 text-xs font-medium text-slate">Agent</th>
                        <th className="px-5 py-3 text-xs font-medium text-slate">Calls</th>
                        <th className="px-5 py-3 text-xs font-medium text-slate">Appointments</th>
                        <th className="px-5 py-3 text-xs font-medium text-slate">Show Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agents.map((agent, i) => (
                        <motion.tr
                          key={agent.name}
                          className="border-b border-border/50 last:border-0 hover:bg-surface/50"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <td className="px-5 py-3 font-bold text-emerald">#{i + 1}</td>
                          <td className="px-5 py-3 font-medium text-navy">{agent.name}</td>
                          <td className="px-5 py-3 text-slate">{agent.calls}</td>
                          <td className="px-5 py-3 font-medium text-navy">{agent.appts}</td>
                          <td className="px-5 py-3 text-emerald">{agent.rate}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
