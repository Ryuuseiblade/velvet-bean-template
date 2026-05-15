"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type AnimatedOrbProps = {
  className?: string;
  variant?: "gold" | "roast" | "mixed";
  delay?: number;
};

const variants = {
  gold: "bg-gold/12",
  roast: "bg-roast-glow/14",
  mixed: "bg-gradient-to-br from-gold/14 via-roast-glow/10 to-transparent",
} as const;

export function AnimatedOrb({ className, variant = "mixed", delay = 0 }: AnimatedOrbProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <m.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px] md:blur-[140px]",
        variants[variant],
        className,
      )}
    >
      {!reduced ? (
        <m.div
          className="absolute inset-0 rounded-full"
          animate={{ y: [0, -16, 0], scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 10 + delay, ease: "easeInOut" }}
        />
      ) : null}
    </m.div>
  );
}
