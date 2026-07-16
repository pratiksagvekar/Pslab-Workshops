"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onReserveClick: () => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Very subtle ambient glow — not neon, just warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-emerald-950/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-950/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-0 px-5 pt-20 lg:grid-cols-2 lg:gap-12 lg:pt-0">

        {/* LEFT — Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 py-20 lg:py-0"
        >
          {/* Status pill */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 tracking-widest uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live · Cohort 1
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={fadeUp} custom={1} className="space-y-2">
            <h1 className="text-5xl font-semibold tracking-tighter text-white leading-[1.02] sm:text-6xl lg:text-7xl">
              Break Into<br />
              Remote Startups.
            </h1>
            <p className="text-2xl font-light tracking-tight text-zinc-500 sm:text-3xl lg:text-4xl">
              Not with luck.<br />With strategy.
            </p>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Learn the exact startup hiring system I used to land a Business
            Development Internship at a US-based startup — without depending on
            traditional job portals.
          </motion.p>

          {/* Meta info */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500"
          >
            <span className="flex items-center gap-2">
              <span className="h-px w-4 bg-zinc-700" />
              Sunday
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-4 bg-zinc-700" />
              1 PM – 2 PM IST
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-4 bg-zinc-700" />
              20–25 seats only
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
            <button
              id="hero-reserve-btn"
              onClick={onReserveClick}
              className="group relative inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]"
            >
              Reserve My Seat
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </button>

            <a
              href="#curriculum"
              id="hero-curriculum-btn"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 px-6 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              View Curriculum
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex items-end justify-center lg:h-full lg:min-h-screen"
        >
          {/* Very subtle glow behind image */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-emerald-500/8 blur-3xl"
          />

          <div className="relative w-full max-w-[340px] lg:max-w-none lg:h-[85vh] lg:max-h-[700px]">
            <Image
              src="/pratik.jpg"
              alt="Pratik Sagvekar speaking at a startup event"
              width={600}
              height={800}
              priority
              className="h-full w-full object-cover object-top lg:rounded-none rounded-2xl"
              style={{ objectPosition: "center top" }}
            />
            {/* Gradient fade at bottom — merges into page */}
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* Credential tag — bottom left */}
            <div className="absolute bottom-6 left-5">
              <p className="text-sm font-medium text-white">Pratik Sagvekar</p>
              <p className="text-xs text-emerald-400 mt-0.5">
                BD Intern · Category Intelligence, USA
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
