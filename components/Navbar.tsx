"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteContent } from "@/data/site-content";

const { brand, navigation } = siteContent;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-5 md:pt-8">
        <div
          className={`flex items-center justify-between gap-4 md:gap-8 ${
            scrolled
              ? "rounded-2xl border border-white/[0.09] bg-white/[0.05] px-4 py-3 shadow-float backdrop-blur-2xl backdrop-saturate-[1.35] md:rounded-full md:px-8 md:py-3.5"
              : "border border-transparent bg-transparent px-1 py-2 md:px-2 md:py-2.5"
          }`}
        >
          <Link
            href={brand.homeHref}
            prefetch={brand.homeHref.startsWith("#") ? false : undefined}
            className="shrink-0 font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-white md:text-[1.5rem]"
          >
            {brand.name}
          </Link>

          <ul className="hidden items-center gap-10 lg:gap-12 md:flex">
            {navigation.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch={l.href.startsWith("#") ? false : undefined}
                  className="group relative py-1.5 text-[13px] font-medium tracking-[-0.01em] text-white/45 transition-colors duration-300 ease-out-expo hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-bright transition-transform duration-400 ease-out-expo group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href={navigation.reserveCta.href}
              prefetch={navigation.reserveCta.href.startsWith("#") ? false : undefined}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-2.5 text-[12px] font-semibold tracking-[0.04em] text-white/90 shadow-sm backdrop-blur-md transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white/[0.11] hover:text-white hover:shadow-glow"
            >
              <span className="relative z-10">{navigation.reserveCta.label}</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transition-transform duration-700 ease-out-expo group-hover:translate-x-full" />
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-label={navigation.mobileMenuToggleLabel}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-[18px] rounded-full bg-white/90 transition duration-300 ease-out-expo ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] shadow-card backdrop-blur-2xl md:hidden"
            >
              <ul className="flex flex-col px-2 py-3">
                {navigation.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      prefetch={l.href.startsWith("#") ? false : undefined}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-[-0.02em] text-white/70 transition duration-200 hover:bg-white/[0.06] hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="px-2 pb-2 pt-1">
                  <Link
                    href={navigation.reserveCta.href}
                    prefetch={navigation.reserveCta.href.startsWith("#") ? false : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-white/[0.1] bg-white/[0.05] py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-bright transition hover:border-gold/35 hover:bg-white/[0.08]"
                  >
                    {navigation.reserveCta.label}
                  </Link>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
