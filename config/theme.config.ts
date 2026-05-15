/**
 * Theme reference — brand colors are defined in `tailwind.config.ts`.
 * Edit the `theme.extend.colors` block to rebrand (ink, gold, crema, roast).
 *
 * Font families are loaded in `lib/fonts.ts` (Google Fonts).
 */

export const themeConfig = {
  colors: {
    ink: "#070605",
    gold: "#c9a962",
    crema: "#f7f0e8",
    roast: "#8b5a2b",
  },
  fonts: {
    display: "Instrument Serif",
    body: "Inter",
  },
} as const;
