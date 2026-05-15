"use client";

import { m } from "framer-motion";
import { AnchorLink } from "@/components/ui/anchor-link";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { springLift } from "@/lib/motion";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  className?: string;
};

const variants = {
  primary: "btn-primary",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-[12px] font-semibold tracking-[0.06em] text-white/90 shadow-glass backdrop-blur-xl transition-all duration-400 ease-out-expo hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.09] hover:text-white sm:px-9 sm:py-4 sm:text-[13px]",
  glass: "btn-glass",
} as const;

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <m.div
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={springLift}
      className="inline-flex"
    >
      <AnchorLink href={href} className={cn("group", variants[variant], className)}>
        {variant === "primary" ? (
          <>
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white via-crema-whisper/90 to-white/95 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </>
        ) : variant === "glass" ? (
          <>
            <span className="relative z-10">{children}</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out-expo group-hover:translate-x-full" />
          </>
        ) : (
          children
        )}
      </AnchorLink>
    </m.div>
  );
}
