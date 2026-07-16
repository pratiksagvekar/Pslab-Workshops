"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bonuses = [
  {
    title: "Remote Startup Job Kit",
    sub: "60+ curated resources",
    description:
      "A live document of 60+ websites, job boards, Slack communities, and tools. Updated. Organized. Categorized by use case.",
    size: "large",
  },
  {
    title: "AI Prompt Pack",
    sub: "25+ tested prompts",
    description:
      "Startup-specific prompts for cold emails, LinkedIn rewrites, resume bullets, and outreach messages. Not generic.",
    size: "small",
  },
  {
    title: "Resume Checklist",
    sub: "1-page startup format",
    description:
      "The exact checklist I used to trim my resume to what startup founders actually want to see.",
    size: "small",
  },
  {
    title: "Interview Cheat Sheet",
    sub: "Founder-interview patterns",
    description:
      "Common startup founder questions decoded — with frameworks for answering without sounding rehearsed.",
    size: "small",
  },
  {
    title: "7-Day WhatsApp Support",
    sub: "Direct access",
    description:
      "Ask questions, share your resume for feedback, get answers. Direct. No bots. Limited to cohort members only.",
    size: "small",
  },
];

export function Bonuses() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
            Included with every seat
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Bonuses worth more<br className="hidden sm:block" /> than the ticket price.
          </h2>
        </motion.div>

        {/* Asymmetric bento */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 sm:row-span-2 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
          >
            <div>
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-4 w-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{bonuses[0].title}</h3>
              <p className="text-xs text-emerald-500 mb-3">{bonuses[0].sub}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{bonuses[0].description}</p>
            </div>
            <div className="text-xs text-zinc-700 border-t border-white/[0.06] pt-4">
              Sent to WhatsApp group after registration
            </div>
          </motion.div>

          {/* Four smaller cards */}
          {bonuses.slice(1).map((bonus, i) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.07 }}
              className="group flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-0.5">{bonus.title}</h3>
                <p className="text-xs text-emerald-500 mb-2">{bonus.sub}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{bonus.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
