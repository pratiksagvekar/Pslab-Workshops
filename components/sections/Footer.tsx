"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/pratik.jpg"
            alt="Pratik Sagvekar"
            width={40}
            height={40}
            className="rounded-full object-cover h-10 w-10 border border-white/10"
            style={{ objectPosition: "center top" }}
          />
          <div>
            <p className="text-sm font-medium text-white">Pratik Sagvekar</p>
            <p className="text-xs text-zinc-600 mt-1">
              BD Intern · Category Intelligence (USA) · Helping students break into remote startups.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
