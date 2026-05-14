"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { siteContent } from "@/data/site-content";

const { sections, contact } = siteContent;

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  }

  const fieldClass =
    "mt-2.5 w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3.5 text-[15px] tracking-[-0.01em] text-white shadow-inner outline-none ring-0 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-300 ease-out-expo placeholder:text-white/30 hover:border-white/[0.14] hover:bg-white/[0.06] focus:border-gold/40 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(201,169,98,0.12)] md:px-5 md:py-4";

  return (
    <section
      id={sections.visit}
      className="scroll-mt-28 bg-ink py-28 md:scroll-mt-32 md:py-36 lg:py-44"
    >
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mt-6 font-display text-[2.25rem] font-medium tracking-[-0.035em] text-white md:mt-7 md:text-5xl lg:text-[3.25rem]">
              {contact.title}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-white/45 md:mt-8 md:text-lg">
              {contact.description}
            </p>

            <dl className="mt-14 space-y-10 md:mt-16">
              {contact.info.map((block) => (
                <div key={block.id}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    {block.label}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed tracking-[-0.01em] text-white/80">
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
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="glass-surface-strong relative overflow-hidden rounded-[1.75rem] p-8 shadow-card md:p-10 lg:p-12"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/8 blur-3xl" />
              <div className="relative grid gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7">
                <label className="block md:col-span-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {contact.form.nameLabel}
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder={contact.form.namePlaceholder}
                  />
                </label>
                <label className="block md:col-span-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {contact.form.emailLabel}
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder={contact.form.emailPlaceholder}
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {contact.form.messageLabel}
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={fieldClass}
                    placeholder={contact.form.messagePlaceholder}
                  />
                </label>
              </div>
              <div className="relative mt-8 flex flex-wrap items-center gap-5 md:mt-10">
                <button
                  type="submit"
                  className="group relative inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]"
                >
                  <span className="relative z-10">{contact.form.submitLabel}</span>
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-crema-whisper/40 to-transparent transition-transform duration-400 ease-out-expo group-hover:translate-y-0" />
                </button>
                {sent ? (
                  <span className="text-[14px] font-medium text-gold-bright" role="status">
                    {contact.form.successMessage}
                  </span>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
