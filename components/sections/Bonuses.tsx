"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bonuses = [
  {
    title: "Remote Startup Launch Kit",
    sub: "Everything you need to start applying",
    description:
      "A curated toolkit with startup resources, job platforms, outreach templates, and practical tools to help you execute your job search after the session.",
    size: "large",
  },
  {
    title: "AI Prompt Library",
    sub: "Ready-to-use career prompts",
    description:
      "A collection of AI prompts for resume optimization, LinkedIn, founder outreach, cold emails, interview preparation, and job search.",
    size: "small",
  },
  {
    title: "Startup Interview Playbook",
    sub: "Interview with confidence",
    description:
      "Learn what startup founders actually look for, common interview questions, and practical frameworks to answer them effectively.",
    size: "small",
  },
  {
    title: "Personalized 30-Day Job Search Plan",
    sub: "Your roadmap starts here",
    description:
      "Leave the session with a customized 30-day action plan based on your profile, target roles, and career goals.",
    size: "small",
  },
  {
    title: "Post Session WhatsApp Support",
    sub: "Support beyond the session",
    description:
      "Get guidance on resumes, outreach, interviews, and job search whenever you need help after the session.",
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
            INCLUDED WITH YOUR SESSION
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Everything Included With<br className="hidden sm:block" /> Your Session
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
