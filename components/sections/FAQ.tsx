"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a personalized session?",
    a: "Yes, absolutely. This is a 1:1 mentorship session where we will focus entirely on your specific career goals and profile.",
  },
  {
    q: "How long is the session?",
    a: "The session is 60 minutes long, conducted via Google Meet.",
  },
  {
    q: "Will you review my resume and LinkedIn?",
    a: "Yes. We will do a live, line-by-line review of your resume and LinkedIn profile to optimize them for startup founders.",
  },
  {
    q: "Can beginners join? Do I need prior experience?",
    a: "Yes, beginners are welcome. You don't need any prior startup experience. We'll build a strategy from scratch.",
  },
  {
    q: "Will I receive AI prompts and outreach templates?",
    a: "Yes. You'll get access to my personal AI prompt pack and proven founder outreach templates.",
  },
  {
    q: "Will I get a personalized action plan?",
    a: "Yes, you'll leave the session with a 30-day action plan tailored to your specific job search strategy.",
  },
  {
    q: "Can I ask career specific questions?",
    a: "Of course. Since this is a 1:1 session, you can ask any specific questions related to your career or job search.",
  }
];

export function FAQ() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">

          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
              Questions.
            </h2>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion className="divide-y divide-white/[0.06]">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={i} className="border-none py-1">
                  <AccordionTrigger className="group flex w-full items-center gap-4 py-5 text-left outline-none hover:no-underline">
                    <span className="flex-1 text-sm font-medium text-zinc-300 group-hover:text-white group-aria-expanded:text-white transition-colors sm:text-base">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="pb-5">
                      <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
