"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import React from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: {
      y: -yOffset,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      },
    },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, margin: inViewMargin as string } : undefined}
      variants={combinedVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
