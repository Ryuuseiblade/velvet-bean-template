"use client";

import { m } from "framer-motion";
import { FormEvent, useState } from "react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config";
import { EASE_OUT_EXPO, fadeUpHidden, fadeUpVisible, staggerContainer } from "@/lib/motion";

const { sections, contact } = siteConfig;

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  }

  return (
    <Section id={sections.visit} surface="ink" divider>
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5"
          >
            <m.div variants={{ hidden: fadeUpHidden, show: fadeUpVisible(0) }}>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 className="heading-section mt-5 sm:mt-6 md:mt-7">{contact.title}</h2>
              <p className="body-lg mt-5 sm:mt-6 md:mt-8">{contact.description}</p>
            </m.div>

            <dl className="mt-12 space-y-9 sm:mt-14 md:mt-16 md:space-y-10">
              {contact.info.map((block, i) => (
                <m.div key={block.id} variants={{ hidden: fadeUpHidden, show: fadeUpVisible(0.08 + i * 0.06) }}>
                  <dt className="label-field">{block.label}</dt>
                  <dd className="mt-2.5 text-[15px] leading-relaxed tracking-[-0.01em] text-white/82 sm:mt-3">
                    {block.email ? (
                      <a
                        href={`mailto:${block.email}`}
                        className="font-medium text-gold-bright transition duration-300 ease-out-expo hover:text-white"
                      >
                        {block.email}
                      </a>
                    ) : (
                      block.lines?.map((line, idx) => (
                        <span key={`${block.id}-${idx}`}>
                          {idx > 0 ? <br /> : null}
                          {line}
                        </span>
                      ))
                    )}
                  </dd>
                </m.div>
              ))}
            </dl>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="glass-surface-strong relative overflow-hidden rounded-[1.5rem] p-6 shadow-luxury sm:rounded-[1.75rem] sm:p-8 md:p-10 lg:p-12"
            >
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-roast-glow/10 blur-3xl" />
              <div className="relative grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7">
                <label className="block md:col-span-1">
                  <span className="label-field">{contact.form.nameLabel}</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="field-input"
                    placeholder={contact.form.namePlaceholder}
                  />
                </label>
                <label className="block md:col-span-1">
                  <span className="label-field">{contact.form.emailLabel}</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="field-input"
                    placeholder={contact.form.emailPlaceholder}
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="label-field">{contact.form.messageLabel}</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="field-input min-h-[140px] resize-y"
                    placeholder={contact.form.messagePlaceholder}
                  />
                </label>
              </div>
              <div className="relative mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <button type="submit" className="group btn-primary w-full sm:w-auto">
                  <span className="relative z-10">{contact.form.submitLabel}</span>
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-crema-whisper/40 to-transparent transition-transform duration-400 ease-out-expo group-hover:translate-y-0" />
                </button>
                {sent ? (
                  <m.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center text-[14px] font-medium text-gold-bright sm:text-left"
                    role="status"
                  >
                    {contact.form.successMessage}
                  </m.span>
                ) : null}
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </Section>
  );
}
