"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "I don't believe another generic workshop will change your career.",
  "You don't need more theory. You need a personalized strategy.",
  "Instead of talking at you, we'll work together on YOUR profile. We'll analyze what's working and fix what isn't.",
  "During our session, we'll optimize your Resume and LinkedIn so you stand out to founders.",
  "We'll build a tailored Startup search strategy and Founder outreach plan that actually gets responses.",
  "I'll share the exact AI tools and workflows I use to automate the heavy lifting.",
  "You'll leave with a clear, personalized roadmap that feels like mentorship, not just teaching.",
];

const pullQuote =
  "We're not just talking about getting a job. We're building a personalized strategy to land it.";

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
              Why I&apos;m Doing This.
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
