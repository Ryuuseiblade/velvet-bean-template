"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/site-content";

const { hero } = siteContent;

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />

      <div className="absolute left-1/2 top-28 h-[min(100vw,560px)] w-[min(100vw,560px)] -translate-x-1/2 rounded-full bg-roast-glow/15 blur-[100px] md:top-20 md:h-[min(90vw,720px)] md:w-[min(90vw,720px)] md:blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-gold/8 blur-[120px]" />

      <div className="section-shell relative flex min-h-[100dvh] flex-col justify-center pb-28 pt-32 md:pb-36 md:pt-36 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-8 md:mb-10"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-balance text-display-sm text-white sm:text-display-md md:text-display-lg lg:text-display-xl xl:text-display-2xl"
        >
          {hero.title.line1}
          <span className="mt-1 block bg-gradient-to-br from-crema-whisper via-gold-bright to-roast-light bg-clip-text text-transparent md:mt-2">
            {hero.title.line2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-pretty-safe text-[17px] leading-[1.65] text-white/50 md:mt-12 md:max-w-lg md:text-xl md:leading-[1.7]"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4 md:mt-14 md:gap-5"
        >
          <Link
            href={hero.primaryCta.href}
            prefetch={hero.primaryCta.href.startsWith("#") ? false : undefined}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-[13px] font-semibold tracking-[0.02em] text-ink shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_32px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_16px_48px_-12px_rgba(0,0,0,0.45)] md:px-10 md:py-4"
          >
            <span className="relative z-10">{hero.primaryCta.label}</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white via-crema-whisper to-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            prefetch={hero.secondaryCta.href.startsWith("#") ? false : undefined}
            className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-8 py-3.5 text-[13px] font-semibold tracking-[0.02em] text-white/90 shadow-sm backdrop-blur-xl transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white md:px-10 md:py-4"
          >
            {hero.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/35 md:mt-28"
        >
          <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-white/25 sm:block" />
          {hero.highlights.map((item, i) => (
            <span key={item} className="contents">
              {i > 0 ? (
                <span className="text-white/20" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="text-white/40">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          y: { repeat: Infinity, duration: 2.2, ease: [0.45, 0, 0.55, 1] },
        }}
      >
        <div className="flex h-12 w-[30px] items-start justify-center rounded-full border border-white/[0.12] bg-white/[0.03] pt-2.5 shadow-float backdrop-blur-md">
          <span className="block h-2 w-[3px] rounded-full bg-gradient-to-b from-gold-bright to-gold/60" />
        </div>
      </motion.div>
    </section>
  );
}
