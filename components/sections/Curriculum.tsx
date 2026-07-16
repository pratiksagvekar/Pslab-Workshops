"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    title: "Startup Hiring",
    description:
      "Startups hire completely differently from MNCs. Understand how decisions get made, who actually reviews applications, and why the hiring cycle at an early-stage startup is 10x faster — and 10x more informal.",
  },
  {
    title: "Wellfound Strategy",
    description:
      "Wellfound (formerly AngelList) is where serious startup founders post real roles. Learn how to set up a profile that gets founders to reach out first, and how to filter for remote-friendly, early-stage opportunities.",
  },
  {
    title: "YC Companies",
    description:
      "Y Combinator's job board lists hundreds of remote-friendly roles from funded startups. Most applicants skip this entirely. I'll show you exactly how to find, filter, and apply to roles that fit your profile.",
  },
  {
    title: "Hidden Startup Jobs",
    description:
      "The best startup roles are never posted publicly. They exist in Slack communities, Discord servers, Reddit threads, and Twitter/X replies. I'll give you the exact places to look — most of which have zero competition.",
  },
  {
    title: "Founder Outreach",
    description:
      "The most direct path into a startup is a cold DM to the founder. I'll show you the exact outreach framework that gets replies — short, direct, and value-forward. Not a cover letter. A conversation starter.",
  },
  {
    title: "Resume Optimization",
    description:
      "Startup resumes look nothing like corporate resumes. One page. Action-first bullet points. Results over responsibilities. I'll break down what startup founders scan for in the first 8 seconds.",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Your LinkedIn headline is your pitch. Your About section is your cover letter. I'll show you how to position your profile so founders stop scrolling — even with no experience yet.",
  },
  {
    title: "AI Prompt Pack",
    description:
      "25+ tested prompts to write cold emails, LinkedIn headlines, resume bullets, and outreach messages using AI. Not generic prompts — startup-specific ones tuned for founders who hate fluff.",
  },
  {
    title: "Interview Strategy",
    description:
      "Startup interviews feel like conversations, not evaluations. Founders are testing for clarity of thinking, not credentials. Know exactly what questions to expect, what they're really asking, and how to answer without sounding rehearsed.",
  },
  {
    title: "Cold Outreach",
    description:
      "The framework: short, specific, valuable. I'll walk through the exact cold email and DM structure I used — with real examples. No templates that sound like templates. Messaging that feels personal.",
  },
  {
    title: "Remote Startup Job Kit",
    description:
      "A compiled resource of 60+ websites, job boards, communities, and tools specifically for remote startup roles. Organized, categorized, and ready to use the moment the session ends.",
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
            Curriculum
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
              What you&apos;ll walk away with.
            </h2>
            <p className="text-sm text-zinc-600 sm:text-right sm:max-w-xs">
              11 topics. 1 hour. Condensed from months of real experience.
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
                  <span className="shrink-0 w-8 text-xs font-mono text-zinc-600 group-aria-expanded:text-emerald-500 transition-colors">
                    {String(i + 1).padStart(2, "0")}
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
