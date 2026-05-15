"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_OUT_EXPO, viewport, viewportTight } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  tight?: boolean;
  onMount?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  tight = false,
  onMount = false,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const transition = { duration: onMount ? 0.75 : 0.65, delay, ease: EASE_OUT_EXPO };

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  if (onMount) {
    return (
      <m.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={className}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={tight ? viewportTight : viewport}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
