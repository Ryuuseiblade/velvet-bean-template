"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

const { sections, testimonials } = siteContent;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1.5 text-gold" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-[15px] w-[15px] fill-current opacity-90">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id={sections.stories}
      className="relative scroll-mt-28 bg-ink-muted py-28 md:scroll-mt-32 md:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />
      <div className="section-shell relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-xl">
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="mt-6 font-display text-[2.25rem] font-medium tracking-[-0.035em] text-white md:mt-7 md:text-5xl lg:text-[3.25rem]">
              {testimonials.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-white/45 md:text-base md:leading-relaxed">
            {testimonials.aside}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:mt-20 lg:grid-cols-3 lg:gap-6">
          {testimonials.items.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="card-premium flex h-full flex-col p-8 hover:border-white/[0.12] hover:shadow-card-hover md:p-9"
            >
              <Stars count={testimonials.starRating} />
              <p className="mt-8 flex-1 text-[17px] font-normal leading-[1.55] tracking-[-0.015em] text-white/85 md:text-lg md:leading-[1.6]">
                “{t.quote}”
              </p>
              <footer className="mt-10 border-t border-white/[0.08] pt-8">
                <p className="text-[15px] font-semibold tracking-[-0.01em] text-white">{t.name}</p>
                <p className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white/40">
                  {t.role}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
