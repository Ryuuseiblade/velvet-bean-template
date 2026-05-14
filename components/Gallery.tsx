"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/site-content";

const { sections, gallery } = siteContent;

export function Gallery() {
  return (
    <section
      id={sections.gallery}
      className="scroll-mt-28 bg-ink py-28 md:scroll-mt-32 md:py-36 lg:py-44"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl lg:max-w-[28rem]">
            <p className="eyebrow">{gallery.eyebrow}</p>
            <h2 className="mt-6 font-display text-[2.25rem] font-medium tracking-[-0.035em] text-white md:mt-7 md:text-5xl lg:text-[3.25rem]">
              {gallery.title}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-white/45 md:text-lg">{gallery.description}</p>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/40 lg:max-w-xs lg:pb-2 lg:text-right">
            {gallery.community.before}
            <span className="font-medium text-gold-bright/95">{gallery.community.hashtag}</span>
            {gallery.community.after}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
          {gallery.images.map((shot, i) => (
            <motion.figure
              key={shot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-muted shadow-card transition-[box-shadow,border-color] duration-500 ease-out-expo hover:border-white/[0.12] hover:shadow-card-hover md:rounded-3xl ${shot.gridClass}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, 30vw"
                className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.04]"
                quality={shot.priority ? 82 : 72}
                loading={shot.priority ? undefined : "lazy"}
                priority={shot.priority ?? false}
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-50" />
              <div className="pointer-events-none absolute inset-0 bg-sheen-card opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
