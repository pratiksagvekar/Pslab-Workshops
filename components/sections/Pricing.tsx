"use client";

import { motion } from "framer-motion";

interface PricingProps {
  onReserveClick: () => void;
}

export function Pricing({ onReserveClick }: PricingProps) {
  return (
    <section className="bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">

          {/* Left — Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl mb-4">
              One seat.<br />One session.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-sm">
              Simple pricing. No subscriptions. No upsells. Price increases as seats fill.
            </p>

            {/* Seat scarcity */}
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
              Only 20–25 seats. No waitlist after close.
            </div>
          </motion.div>

          {/* Right — Pricing cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {/* Early Bird — Primary */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-6">
              {/* Top badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Early Bird — Available Now
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-white">₹199</span>
                </div>
              </div>

              {/* Included features */}
              <div className="space-y-2.5 mb-8">
                {[
                  "Full live 1-hour session",
                  "Remote Startup Job Kit (60+ resources)",
                  "AI Prompt Pack",
                  "Resume Checklist",
                  "Interview Cheat Sheet",
                  "7-day WhatsApp support",
                  "Session recording",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    {f}
                  </div>
                ))}
              </div>

              <button
                id="pricing-reserve-btn"
                onClick={onReserveClick}
                className="w-full h-11 rounded-xl bg-emerald-500 text-sm font-semibold text-black hover:bg-emerald-400 active:scale-[0.98] transition-all duration-200"
              >
                Reserve My Seat →
              </button>
            </div>

            {/* Saturday+ — Dimmed comparison */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">Saturday onwards</p>
                <p className="text-sm text-zinc-500">Same session, same bonuses</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-zinc-600">₹399</p>
                <p className="text-xs text-zinc-700 mt-0.5">Price increases</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
