"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "A few months ago I wasn't searching for a dream job.",
  "I was simply trying to survive.",
  "Traditional job portals weren't working for me. Hundreds of applications. Near-zero responses. The usual advice — polish your resume, apply more — wasn't moving the needle.",
  "So I stopped following conventional advice and started studying how startups actually hire.",
  "I experimented. Applied differently. Got rejected. Improved. And repeated.",
  "Eventually I landed a Business Development Internship at Category Intelligence — a US-based startup.",
  "Everything I'm teaching inside this cohort comes from that real journey. Not from a course I bought. Not from theory. From what actually worked.",
];

const pullQuote =
  "I'm not teaching a formula. I'm sharing the exact system that took me from confusion to an offer letter.";

export function Story() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">

          {/* Left — sticky label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              The Story
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
              Why I&apos;m Hosting This.
            </h2>
          </motion.div>

          {/* Right — prose */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={
                  i === 0 || i === 1
                    ? "text-xl font-medium text-white sm:text-2xl leading-snug"
                    : "text-base text-zinc-400 leading-relaxed sm:text-lg"
                }
              >
                {para}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 border-l-2 border-emerald-500 pl-6"
            >
              <p className="text-lg font-medium text-white leading-snug sm:text-xl italic">
                &ldquo;{pullQuote}&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
