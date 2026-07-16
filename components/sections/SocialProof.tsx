"use client";

import { motion, type Variants } from "framer-motion";
import { BlurFade } from "@/components/ui/magicui/blur-fade";

const events = [
  {
    year: "2022",
    title: "The Financial Reality",
    description:
      "Like many students, I was applying to hundreds of job portals and getting ghosted. No callbacks. Mounting pressure.",
    color: "from-zinc-600 to-zinc-700",
  },
  {
    year: "Early 2023",
    title: "Discovered the Startup Ecosystem",
    description:
      "Started exploring how early-stage startups actually hire. It was completely different from what colleges teach.",
    color: "from-zinc-500 to-zinc-600",
  },
  {
    year: "Mid 2023",
    title: "Stopped Relying on Traditional Portals",
    description:
      "LinkedIn job postings. Naukri. Indeed. I realized these platforms are flooded and companies often close roles before you even apply.",
    color: "from-slate-500 to-slate-600",
  },
  {
    year: "Late 2023",
    title: "Discovered Startup Hiring Channels",
    description:
      "Found Wellfound, YC job boards, founder cold DMs, and a completely different way of getting noticed by startups.",
    color: "from-emerald-700 to-emerald-600",
  },
  {
    year: "2024",
    title: "Landed the Role",
    description:
      "Business Development Internship at Category Intelligence — a US-based startup. Remote. Real work. Real impact.",
    color: "from-emerald-500 to-teal-500",
    highlight: true,
  },
  {
    year: "Now",
    title: "Helping Students Do the Same",
    description:
      "That exact system is what I'm teaching in Cohort 1. No fluff. No fake promises. Just what actually worked.",
    color: "from-emerald-400 to-emerald-500",
    highlight: true,
  },
];

const lineVariant: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export function SocialProof() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-5">
        <BlurFade inView delay={0} blur="8px">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-500">
              The Story Behind This Cohort
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
              Why should you learn from me?
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
              Not theory. Real experience. Real failure. Real result.
            </p>
          </div>
        </BlurFade>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariant}
            className="absolute left-[17px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-emerald-800/40 to-emerald-500/30"
          />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={itemVariant}
                custom={i}
                className="relative flex gap-6 pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${event.color} shadow-lg`}
                  aria-hidden="true"
                >
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 rounded-2xl border p-5 transition-all duration-300 ${
                    event.highlight
                      ? "border-emerald-500/20 bg-emerald-500/5"
                      : "border-white/6 bg-white/3"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {event.title}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-zinc-500 mt-0.5">
                      {event.year}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {event.description}
                  </p>
                  {event.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Key milestone
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
