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
    q: "Do I need any prior experience?",
    a: "None. This cohort is built for people starting from zero — students, freshers, career switchers. If you have a smartphone and a LinkedIn profile, you're ready.",
  },
  {
    q: "Will I get a recording?",
    a: "Yes. All registered attendees get access to the session recording within 24 hours, shared via the WhatsApp group.",
  },
  {
    q: "Does this guarantee a job?",
    a: "No. I'm not going to say that. What I can say is that you'll leave with a clear system and the exact tools I used. Results depend on how consistently you apply them.",
  },
  {
    q: "How will I receive the meeting link?",
    a: "After payment confirmation, you'll be added to a private WhatsApp group where the live session link, all resources, and updates will be shared.",
  },
  {
    q: "Can I pay after the session?",
    a: "No. Your seat is only confirmed after payment. With 20–25 seats, we can't hold spots without confirmation.",
  },
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
