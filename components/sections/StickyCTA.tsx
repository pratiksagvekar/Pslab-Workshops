"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyCTAProps {
  onReserveClick: () => void;
}

export function StickyCTA({ onReserveClick }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 inset-x-5 z-50 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-auto"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/95 px-4 py-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
            <p className="text-xs text-zinc-500 hidden sm:block">Limited Launch Pricing ·</p>
            <span className="text-sm font-semibold text-white">₹249 1:1 Session</span>
            <button
              onClick={onReserveClick}
              id="sticky-reserve-btn"
              className="ml-1 inline-flex h-8 items-center rounded-lg bg-emerald-500 px-4 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors"
            >
              Book Now →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
