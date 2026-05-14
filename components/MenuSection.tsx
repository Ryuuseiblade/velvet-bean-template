"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

const { sections, menu } = siteContent;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function MenuSection() {
  return (
    <section
      id={sections.menu}
      className="relative scroll-mt-28 bg-ink-soft py-28 md:scroll-mt-32 md:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-35" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{menu.eyebrow}</p>
          <h2 className="mt-6 font-display text-[2.25rem] font-medium tracking-[-0.035em] text-white md:mt-8 md:text-5xl lg:text-[3.25rem]">
            {menu.title}
          </h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-white/45 md:mt-8 md:text-lg md:leading-relaxed">
            {menu.description}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-6"
        >
          {menu.items.map((coffee) => (
            <motion.article
              key={coffee.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="card-premium group cursor-default p-8 hover:border-gold/25 hover:shadow-card-hover md:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.05] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-bright/95 backdrop-blur-sm transition duration-300 group-hover:border-gold/30 group-hover:bg-gold/10">
                  {coffee.tag}
                </span>
                <span className="font-display text-[1.35rem] font-medium tabular-nums tracking-[-0.02em] text-gold-bright md:text-2xl">
                  {coffee.price}
                </span>
              </div>
              <h3 className="mt-8 font-display text-[1.55rem] font-medium tracking-[-0.03em] text-white transition duration-300 group-hover:text-crema-whisper md:text-[1.7rem]">
                {coffee.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/45 transition duration-300 group-hover:text-white/55">
                {coffee.note}
              </p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition duration-500 group-hover:bg-gold/18" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
