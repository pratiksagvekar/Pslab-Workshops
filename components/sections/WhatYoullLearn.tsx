"use client";

import { motion, type Variants } from "framer-motion";
import {
  Search,
  Globe,
  Building2,
  MessageSquare,
  FileText,
  Link2,
  Bot,
  Trophy,
  Mail,
  Package,
} from "lucide-react";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { BorderBeam } from "@/components/ui/magicui/border-beam";
import { cn } from "@/lib/utils";

const topics = [
  {
    icon: Search,
    title: "Finding Hidden Startup Jobs",
    description:
      "Most startup roles are never posted publicly. Learn exactly where to look before anyone else does.",
    size: "large",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: Globe,
    title: "Wellfound Strategy",
    description:
      "The #1 platform for startup jobs. Most applicants use it wrong. Here's the right way.",
    size: "medium",
    gradient: "from-blue-500/8 to-indigo-500/5",
  },
  {
    icon: Building2,
    title: "YC Companies",
    description: "Y Combinator's portfolio is a goldmine for remote opportunities.",
    size: "small",
    gradient: "from-orange-500/8 to-amber-500/5",
  },
  {
    icon: MessageSquare,
    title: "Founder Outreach",
    description:
      "Cold DM founders directly. The template that gets replies.",
    size: "small",
    gradient: "from-purple-500/8 to-violet-500/5",
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description:
      "Startup resumes look completely different from corporate ones. One page. No fluff. Action-first.",
    size: "medium",
    gradient: "from-rose-500/8 to-pink-500/5",
  },
  {
    icon: Link2,
    title: "LinkedIn Optimization",
    description:
      "Your LinkedIn is your startup pitch deck. Make founders stop scrolling.",
    size: "medium",
    gradient: "from-sky-500/8 to-cyan-500/5",
  },
  {
    icon: Bot,
    title: "AI Prompt Pack",
    description:
      "25+ prompts to write your outreach, resume, and LinkedIn summary in minutes.",
    size: "small",
    gradient: "from-emerald-500/8 to-green-500/5",
  },
  {
    icon: Trophy,
    title: "Interview Strategy",
    description:
      "Startup interviews feel like conversations. Know what founders are really testing for.",
    size: "small",
    gradient: "from-yellow-500/8 to-amber-500/5",
  },
  {
    icon: Mail,
    title: "Cold Outreach",
    description:
      "The exact cold email / DM framework that gets callbacks from founders.",
    size: "large",
    gradient: "from-indigo-500/8 to-violet-500/5",
  },
  {
    icon: Package,
    title: "Remote Job Kit",
    description:
      "Everything bundled: 60+ websites, checklists, templates, and AI prompts.",
    size: "medium",
    gradient: "from-teal-500/8 to-emerald-500/5",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

function BentoCard({
  topic,
  index,
  className,
}: {
  topic: (typeof topics)[0];
  index: number;
  className?: string;
}) {
  const Icon = topic.icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariant}
      custom={index}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br p-5 sm:p-6 cursor-default",
        `bg-gradient-to-br ${topic.gradient}`,
        className
      )}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/3" />
      <BorderBeam
        size={120}
        duration={10}
        colorFrom="#10b981"
        colorTo="#6366f1"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="h-4 w-4 text-zinc-300 group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">
            {topic.title}
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
            {topic.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhatYoullLearn() {
  return (
    <section id="curriculum" className="relative bg-black py-24 overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5">
        <BlurFade inView delay={0} blur="8px">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-500">
              Curriculum
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl">
              What you'll learn
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
              10 modules. 1 hour. Everything condensed so you can start applying the same week.
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto">
          {/* Large card — col span 2 */}
          <BentoCard topic={topics[0]} index={0} className="sm:col-span-2 lg:col-span-1" />
          <BentoCard topic={topics[1]} index={1} />
          <BentoCard topic={topics[2]} index={2} />
          <BentoCard topic={topics[3]} index={3} />
          <BentoCard topic={topics[4]} index={4} />
          <BentoCard topic={topics[5]} index={5} />
          <BentoCard topic={topics[6]} index={6} />
          <BentoCard topic={topics[7]} index={7} />
          {/* Large card — col span 2 */}
          <BentoCard topic={topics[8]} index={8} className="sm:col-span-2 lg:col-span-1" />
          <BentoCard topic={topics[9]} index={9} className="sm:col-span-2 lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
