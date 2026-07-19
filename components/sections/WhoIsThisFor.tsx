"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Student looking for internships",
  "Fresh graduate",
  "Looking for remote startup jobs",
  "Tired of applying on LinkedIn without results",
  "Don't know where to start",
  "Want a structured job search roadmap",
  "Want to learn founder outreach",
  "Need feedback on Resume & LinkedIn",
];

export function WhoIsThisFor() {
  return (
    <section className="bg-black py-16 sm:py-20 border-y border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
            Is This Session For You?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <span className="text-zinc-300 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
