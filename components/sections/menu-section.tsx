"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/config";
import { hoverLift, staggerContainer, staggerItemScale } from "@/lib/motion";

const { sections, menu } = siteContent;

export function MenuSection() {
  return (
    <Section id={sections.menu} surface="soft" grain divider glow>
      <div className="section-shell relative">
        <SectionHeader
          eyebrow={menu.eyebrow}
          title={menu.title}
          description={menu.description}
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6"
        >
          {menu.items.map((coffee, index) => (
            <m.article
              key={coffee.id}
              variants={staggerItemScale}
              whileHover={hoverLift}
              className="card-premium group cursor-default p-7 sm:p-8 md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="glass-pill inline-flex rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-bright sm:text-[10px]">
                  {coffee.tag}
                </span>
                <span className="font-display text-2xl font-normal tabular-nums tracking-[-0.03em] text-gold-bright md:text-[1.65rem]">
                  {coffee.price}
                </span>
              </div>
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-[1.45rem] tracking-[-0.03em] text-white transition duration-400 group-hover:text-crema-whisper sm:text-[1.6rem] md:text-[1.75rem]">
                {coffee.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/42 transition duration-400 group-hover:text-white/58">
                {coffee.note}
              </p>
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/8 blur-3xl transition duration-600 group-hover:bg-gold/16" />
            </m.article>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
