"use client";

import { motion } from "framer-motion";

const items = [
  { text: "Students", green: false },
  { text: "Fresh Graduates", green: true },
  { text: "Career Switchers", green: false },
  { text: "Remote Job Seekers", green: true },
  { text: "Startup Enthusiasts", green: false },
  { text: "First-Time Applicants", green: true },
  { text: "Students", green: false },
  { text: "Fresh Graduates", green: true },
  { text: "Career Switchers", green: false },
  { text: "Remote Job Seekers", green: true },
  { text: "Startup Enthusiasts", green: false },
  { text: "First-Time Applicants", green: true },
];

export function WhoIsThisFor() {
  return (
    <section className="bg-black py-10 border-y border-white/[0.06] overflow-hidden">
      <div className="flex items-center gap-0">

        {/* Fixed label */}
        <div className="shrink-0 pl-5 pr-8 z-10 relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 whitespace-nowrap">
            This is for
          </p>
        </div>

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

        {/* Scrolling track */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((item, i) => (
              <span
                key={i}
                className={`whitespace-nowrap text-xl font-semibold tracking-tight sm:text-2xl ${
                  item.green ? "text-emerald-400" : "text-white"
                }`}
              >
                {item.text}
                <span className="ml-10 text-zinc-700">·</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
