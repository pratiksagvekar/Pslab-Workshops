"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    title: "Personalized Job Strategy",
    description: "A customized roadmap designed specifically for your skills and goals.",
  },
  {
    title: "Resume Review",
    description: "Line-by-line feedback to make your resume action-first and startup-ready.",
  },
  {
    title: "LinkedIn Review",
    description: "Transform your profile into a landing page that converts founders.",
  },
  {
    title: "Startup Search System",
    description: "Learn where to look and how to identify high-growth startups before they post jobs.",
  },
  {
    title: "Founder Outreach Strategy",
    description: "The exact approach to skip HR and get directly into a founder's inbox.",
  },
  {
    title: "Outreach Templates",
    description: "Proven scripts for cold emails and LinkedIn DMs that get replies.",
  },
  {
    title: "AI Prompt Pack",
    description: "My personal library of prompts to automate research and draft outreach.",
  },
  {
    title: "Personalized 30-Day Job Search Plan",
    description: "A day-by-day checklist so you know exactly what to do after our session.",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
            Outcomes
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
              What You&apos;ll Leave With.
            </h2>
            <p className="text-sm text-zinc-600 sm:text-right sm:max-w-xs">
              A complete toolkit and strategy tailored specifically to your goals.
            </p>
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion className="w-full divide-y divide-white/[0.06]">
            {topics.map((topic, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border-none py-1"
              >
                <AccordionTrigger className="group flex w-full items-center gap-5 py-5 text-left hover:no-underline outline-none">
                  <span className="shrink-0 w-8 text-emerald-500 flex items-center">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-base font-medium text-zinc-300 group-hover:text-white group-aria-expanded:text-white transition-colors sm:text-lg">
                    {topic.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="pl-13 pb-6">
                    <p className="text-sm leading-relaxed text-zinc-500 max-w-2xl pl-[52px]">
                      {topic.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
