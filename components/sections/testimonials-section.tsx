"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stars } from "@/components/ui/stars";
import { siteContent } from "@/config";
import { hoverLift, staggerContainer, staggerItemScale } from "@/lib/motion";

const { sections, testimonials } = siteContent;

export function TestimonialsSection() {
  return (
    <Section id={sections.stories} surface="muted" grain grainOpacity="light" divider glow>
      <div className="section-shell relative">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          layout="split"
          aside={testimonials.aside}
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6"
        >
          {testimonials.items.map((t) => (
            <m.blockquote
              key={t.id}
              variants={staggerItemScale}
              whileHover={hoverLift}
              className="card-premium relative flex h-full flex-col p-7 sm:p-8 md:p-9"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-5 font-display text-6xl leading-none text-gold/15 sm:right-8 sm:text-7xl"
              >
                “
              </span>
              <Stars count={testimonials.starRating} />
              <p className="relative mt-7 flex-1 text-[16px] font-normal leading-[1.6] tracking-[-0.015em] text-white/88 sm:mt-8 sm:text-[17px] md:text-lg md:leading-[1.65]">
                {t.quote}
              </p>
              <footer className="relative mt-9 border-t border-white/[0.08] pt-7 sm:mt-10 sm:pt-8">
                <p className="text-[15px] font-semibold tracking-[-0.01em] text-white">{t.name}</p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/38">
                  {t.role}
                </p>
              </footer>
            </m.blockquote>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
