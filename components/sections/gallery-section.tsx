"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/config";
import { hoverLift, staggerContainer, staggerItemScale } from "@/lib/motion";

const { sections, gallery } = siteContent;

export function GallerySection() {
  return (
    <Section id={sections.gallery} surface="ink" divider>
      <div className="section-shell">
        <SectionHeader
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
          layout="split"
          aside={
            <>
              {gallery.community.before}
              <span className="font-medium text-gold-bright">{gallery.community.hashtag}</span>
              {gallery.community.after}
            </>
          }
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-2.5 sm:mt-16 sm:gap-3 md:mt-20 md:grid-cols-12 md:gap-4 lg:gap-5"
        >
          {gallery.images.map((shot) => (
            <m.figure
              key={shot.id}
              variants={staggerItemScale}
              whileHover={hoverLift}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-muted shadow-card md:rounded-[1.35rem] ${shot.gridClass}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 32vw"
                className="object-cover transition duration-800 ease-out-expo group-hover:scale-[1.06]"
                quality={shot.priority ? 80 : 70}
                loading={shot.priority ? undefined : "lazy"}
                priority={shot.priority ?? false}
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent opacity-80 transition duration-500 group-hover:opacity-55" />
              <div className="pointer-events-none absolute inset-0 bg-sheen-card opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </m.figure>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
