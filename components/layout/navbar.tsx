"use client";

import { AnimatePresence, m } from "framer-motion";
import { AnchorLink } from "@/components/ui/anchor-link";
import { ButtonLink } from "@/components/ui/button-link";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { siteConfig } from "@/config";
import { cn } from "@/lib/cn";
import { getVisibleNavLinks, isContactEnabled } from "@/lib/navigation";
import { EASE_OUT_EXPO, springNav } from "@/lib/motion";
import { useState } from "react";

const { brand, navigation } = siteConfig;
const navLinks = getVisibleNavLinks();

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollThreshold(24);
  const reduced = usePrefersReducedMotion();

  useBodyScrollLock(open);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4 sm:pt-5 md:pt-7 lg:pt-8">
        <m.div
          layout={!reduced}
          transition={springNav}
          className={cn(
            "flex items-center justify-between gap-3 sm:gap-4 md:gap-8",
            scrolled
              ? "glass-pill rounded-2xl px-3 py-2.5 shadow-float sm:px-4 sm:py-3 md:rounded-full md:px-7 md:py-3.5 lg:px-8"
              : "border border-transparent bg-transparent px-0.5 py-1.5 sm:px-1 sm:py-2",
          )}
        >
          <AnchorLink
            href={brand.homeHref}
            className="shrink-0 font-display text-[1.25rem] font-normal tracking-[-0.04em] text-white sm:text-[1.35rem] md:text-[1.5rem]"
          >
            {brand.name}
          </AnchorLink>

          <ul className="hidden items-center gap-8 lg:flex lg:gap-11">
            {navLinks.map((l) => (
              <li key={l.href}>
                <AnchorLink
                  href={l.href}
                  underline
                  className="py-1.5 text-[13px] font-medium tracking-[-0.01em] text-white/42 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {isContactEnabled() ? (
            <div className="hidden md:block">
              <ButtonLink href={navigation.reserveCta.href} variant="glass">
                {navigation.reserveCta.label}
              </ButtonLink>
            </div>
          ) : null}

          <button
            type="button"
            aria-expanded={open}
            aria-label={navigation.mobileMenuToggleLabel}
            className="touch-target flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.05] shadow-glass backdrop-blur-md transition-colors duration-300 hover:border-white/22 hover:bg-white/[0.09] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo",
                open && "scale-x-0 opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </button>
        </m.div>

        <AnimatePresence>
          {open ? (
            <m.div
              initial={reduced ? false : { opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="glass-surface-strong mt-3 overflow-hidden rounded-2xl md:hidden"
            >
              <ul className="flex flex-col p-2">
                {navLinks.map((l, i) => (
                  <m.li
                    key={l.href}
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: EASE_OUT_EXPO }}
                  >
                    <AnchorLink
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-[-0.02em] text-white/72 transition duration-200 hover:bg-white/[0.07] hover:text-white"
                    >
                      {l.label}
                    </AnchorLink>
                  </m.li>
                ))}
                {isContactEnabled() ? (
                  <li className="p-2 pt-1">
                    <AnchorLink
                      href={navigation.reserveCta.href}
                      onClick={() => setOpen(false)}
                      className="group btn-glass block w-full justify-center py-3.5 text-center"
                    >
                      {navigation.reserveCta.label}
                    </AnchorLink>
                  </li>
                ) : null}
              </ul>
            </m.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
