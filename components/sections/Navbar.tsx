"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onReserveClick: () => void;
}

export function Navbar({ onReserveClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <span className="text-sm font-medium tracking-tight text-white">
          Pratik Sagvekar
        </span>

        <button
          onClick={onReserveClick}
          id="nav-reserve-btn"
          className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
        >
          Reserve Seat →
        </button>
      </div>
    </motion.header>
  );
}
