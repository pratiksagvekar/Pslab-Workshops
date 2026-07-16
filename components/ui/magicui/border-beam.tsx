"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "#10b981",
  colorTo = "#6366f1",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]",
        "[background:linear-gradient(transparent,transparent),linear-gradient(to_right,var(--color-from),var(--color-to))] bg-clip-padding",
        "[mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:inset-0 after:animate-border-beam",
        "after:[background:conic-gradient(from_calc(var(--delay,0s)*360deg/var(--duration))_at_50%_50%,transparent_0%,var(--color-from)_25%,var(--color-to)_50%,transparent_75%)]",
        "after:[animation-duration:calc(var(--duration)*1s)]",
        "after:[border-radius:inherit]",
        "after:[mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)]",
        "after:[mask-composite:exclude]",
        "after:p-[var(--border-width)]",
        className
      )}
    />
  );
}
