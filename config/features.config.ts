/**
 * ============================================================
 *  FEATURES — Turn sections on/off without deleting code
 * ============================================================
 *
 * Set a section to `false` to hide it on the page and in the nav.
 */

export const featuresConfig = {
  sections: {
    menu: true,
    gallery: true,
    testimonials: true,
    contact: true,
  },
} as const;

export type FeaturesConfig = typeof featuresConfig;
