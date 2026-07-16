"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Pratik Sagvekar</p>
          <p className="text-xs text-zinc-600 mt-1">
            BD Intern · Category Intelligence (USA) · Helping students break into remote startups.
          </p>
        </div>

        <p className="text-xs text-zinc-700 flex items-center gap-1.5">
          Built with <Heart className="h-3 w-3 text-zinc-600 fill-zinc-600" /> · Remote Job Cohort 1 · 2024
        </p>
      </div>
    </footer>
  );
}
