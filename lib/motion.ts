/** Shared Framer Motion tokens — keeps easing and viewport consistent site-wide. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.45, 0, 0.15, 1] as const;

export const viewport = {
  once: true,
  margin: "-80px",
} as const;

export const viewportTight = {
  once: true,
  margin: "-48px",
} as const;

export const viewportHero = {
  once: true,
  margin: "0px",
} as const;

export const springLift = {
  type: "spring" as const,
  stiffness: 380,
  damping: 26,
  mass: 0.8,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
};

export const springNav = {
  type: "spring" as const,
  stiffness: 480,
  damping: 38,
};

export const fadeUpHidden = { opacity: 0, y: 28 };
export const fadeUpVisible = (delay = 0) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.65, delay, ease: EASE_OUT_EXPO },
});

export const fadeInScaleHidden = { opacity: 0, y: 24, scale: 0.96 };
export const fadeInScaleVisible = (delay = 0) => ({
  opacity: 1,
  y: 0,
  scale: 1,
  transition: { duration: 0.7, delay, ease: EASE_OUT_EXPO },
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerContainerFast = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.03 },
  },
};

export const staggerItem = {
  hidden: fadeUpHidden,
  show: fadeUpVisible(),
};

export const staggerItemScale = {
  hidden: fadeInScaleHidden,
  show: fadeInScaleVisible(),
};

export const headerReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO },
  }),
};

export const hoverLift = {
  y: -8,
  scale: 1.01,
  transition: springLift,
};

export const imageHover = {
  scale: 1.05,
  transition: { duration: 0.8, ease: EASE_OUT_EXPO },
};
