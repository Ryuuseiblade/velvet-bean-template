"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_OUT_EXPO, viewport } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
  layout?: "center" | "split";
  titleClassName?: string;
};

const item = (delay: number, reduced: boolean) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport,
        transition: { duration: 0.65, delay, ease: EASE_OUT_EXPO },
      };

export function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  layout = "center",
  titleClassName,
}: SectionHeaderProps) {
  const reduced = usePrefersReducedMotion();

  if (layout === "split") {
    return (
      <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 xl:gap-20">
        <div className="max-w-xl lg:max-w-[30rem]">
          <m.p {...item(0, reduced)} className="eyebrow">
            {eyebrow}
          </m.p>
          <m.h2 {...item(0.08, reduced)} className={cn("heading-section mt-5 sm:mt-6 md:mt-7", titleClassName)}>
            {title}
          </m.h2>
          {description ? (
            <m.p {...item(0.16, reduced)} className="body-lg mt-5 sm:mt-6">
              {description}
            </m.p>
          ) : null}
        </div>
        {aside ? (
          <m.div
            {...item(0.12, reduced)}
            className="max-w-md text-[15px] leading-[1.7] text-white/42 sm:text-base lg:max-w-xs lg:pb-1 lg:text-right"
          >
            {aside}
          </m.div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
      <m.p {...item(0, reduced)} className="eyebrow-center mx-auto">
        {eyebrow}
      </m.p>
      <m.h2
        {...item(0.08, reduced)}
        className={cn("heading-section mt-5 sm:mt-6 md:mt-8", titleClassName)}
      >
        {title}
      </m.h2>
      {description ? (
        <m.p {...item(0.16, reduced)} className="body-lg mx-auto mt-5 max-w-2xl sm:mt-6 md:mt-8">
          {description}
        </m.p>
      ) : null}
    </div>
  );
}
