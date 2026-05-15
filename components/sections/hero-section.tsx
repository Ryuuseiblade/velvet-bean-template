"use client";

import { m } from "framer-motion";
import { AnimatedOrb } from "@/components/ui/animated-orb";
import { ButtonLink } from "@/components/ui/button-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { siteConfig } from "@/config";
import { EASE_OUT_EXPO } from "@/lib/motion";

const { hero } = siteConfig;

const fade = (delay: number, reduced: boolean) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay, ease: EASE_OUT_EXPO },
      };

export function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      <AnimatedOrb
        variant="roast"
        className="left-1/2 top-24 h-[min(95vw,580px)] w-[min(95vw,580px)] -translate-x-1/2 md:top-16 md:h-[min(85vw,760px)] md:w-[min(85vw,760px)]"
      />
      <AnimatedOrb
        variant="gold"
        delay={0.3}
        className="-right-32 bottom-0 h-[min(70vw,480px)] w-[min(70vw,480px)] md:-right-20"
      />

      <div className="section-shell relative flex min-h-[100dvh] flex-col justify-center pb-24 pt-28 sm:pb-28 sm:pt-32 md:pb-36 md:pt-36 lg:pt-40">
        <m.p {...fade(0, reduced)} className="eyebrow mb-6 sm:mb-8 md:mb-10">
          {hero.eyebrow}
        </m.p>

        <m.h1 {...fade(0.06, reduced)} className="heading-hero max-w-[14ch] sm:max-w-none">
          {hero.title.line1}
          <span className="mt-2 block gradient-text sm:mt-3">{hero.title.line2}</span>
        </m.h1>

        <m.p
          {...fade(0.14, reduced)}
          className="mt-8 max-w-lg text-pretty-safe text-base leading-[1.7] text-white/52 sm:mt-10 sm:max-w-xl sm:text-[17px] md:mt-12 md:text-xl md:leading-[1.75]"
        >
          {hero.description}
        </m.p>

        <m.div
          {...fade(0.22, reduced)}
          className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:mt-12 sm:gap-4 md:mt-14"
        >
          <ButtonLink href={hero.primaryCta.href} variant="primary" className="w-full justify-center sm:w-auto">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary" className="w-full justify-center sm:w-auto">
            {hero.secondaryCta.label}
          </ButtonLink>
        </m.div>

        <m.div
          {...fade(0.32, reduced)}
          className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 md:mt-20 lg:mt-24"
        >
          {hero.highlights.map((item, i) => (
            <div
              key={item}
              className="glass-surface rounded-2xl px-5 py-4 transition duration-400 ease-out-expo hover:border-white/[0.14] hover:bg-white/[0.06] sm:rounded-[1.25rem] sm:px-6 sm:py-5"
              style={{ transitionDelay: reduced ? undefined : `${i * 50}ms` }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold/90 sm:text-[11px]">
                0{i + 1}
              </p>
              <p className="mt-2 font-display text-lg tracking-[-0.02em] text-white/90 sm:text-xl">{item}</p>
            </div>
          ))}
        </m.div>
      </div>

      {!reduced ? (
        <m.div
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:bottom-10 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.7 },
            y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
          }}
        >
          <div className="glass-pill flex h-14 w-8 items-start justify-center rounded-full pt-3">
            <span className="block h-2.5 w-[3px] rounded-full bg-gradient-to-b from-gold-bright to-gold/50" />
          </div>
        </m.div>
      ) : null}
    </section>
  );
}
