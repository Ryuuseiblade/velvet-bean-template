/**
 * ============================================================
 *  SITE CONFIG — Edit this file to customize your template
 * ============================================================
 *
 * CHECKLIST (first-time setup):
 *  [ ] brand.name + legalName
 *  [ ] metadata.title + description
 *  [ ] navigation.links (match sections.* ids)
 *  [ ] hero title, CTAs, highlights
 *  [ ] menu.items (add/remove drinks)
 *  [ ] gallery.images (URLs or /public/images/…)
 *  [ ] contact.info + footer.social
 *  [ ] .env.local → NEXT_PUBLIC_SITE_URL
 *
 * Colors & fonts: `tailwind.config.ts` + `lib/fonts.ts`
 * Hide sections: `config/features.config.ts`
 *
 * After editing: npm run dev
 */

import type {
  ContactInfoBlock,
  GalleryImage,
  MenuItem,
  NavLink,
  SocialLink,
  Testimonial,
} from "@/config/types";

export const siteConfig = {
  // ─── Brand ─────────────────────────────────────────────────
  brand: {
    name: "Velvet Bean",
    legalName: "Velvet Bean Coffee House",
    homeHref: "#",
  },

  // ─── SEO & browser tab ─────────────────────────────────────
  metadata: {
    title: "Velvet Bean — Artisan Coffee House",
    description:
      "A luxury coffee experience. Small-batch roasts, slow bar service, and interiors designed for lingering.",
    language: "en" as const,
  },

  seo: {
    keywords: [
      "Velvet Bean",
      "specialty coffee",
      "coffee shop",
      "artisan espresso",
      "third wave coffee",
    ],
    openGraphLocale: "en_US",
  },

  // ─── Google / schema.org (local business) ──────────────────
  structuredData: {
    priceRange: "$$",
    business: {
      streetAddress: "218 NW Everett St",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97209",
      addressCountry: "US",
    },
    openingHours: [
      {
        days: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
      {
        days: ["https://schema.org/Saturday", "https://schema.org/Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  },

  // ─── Section anchor IDs (must match nav hrefs: #menu, etc.) ─
  sections: {
    menu: "menu",
    gallery: "gallery",
    stories: "stories",
    visit: "visit",
  },

  // ─── Header navigation ─────────────────────────────────────
  navigation: {
    links: [
      { href: "#menu", label: "Menu" },
      { href: "#gallery", label: "Gallery" },
      { href: "#stories", label: "Stories" },
      { href: "#visit", label: "Visit" },
    ] satisfies NavLink[],
    reserveCta: { href: "#visit", label: "Reserve" },
    mobileMenuToggleLabel: "Toggle menu",
  },

  // ─── Hero ──────────────────────────────────────────────────
  hero: {
    eyebrow: "Est. 2014 · Portland & Brooklyn",
    title: {
      line1: "Coffee crafted",
      line2: "for the quiet hours.",
    },
    description:
      "Micro-lots, precision roasting, and a bar team obsessed with texture. Velvet Bean is a sanctuary for slow mornings and unhurried afternoons.",
    primaryCta: { href: "#menu", label: "Explore menu" },
    secondaryCta: { href: "#visit", label: "Plan a visit" },
    highlights: ["Single-origin", "House pastries", "Vinyl evenings"],
  },

  // ─── Menu ──────────────────────────────────────────────────
  menu: {
    eyebrow: "The bar",
    title: "A menu written in tasting notes",
    description:
      "Seasonal rotations with traceable farms. Ask for the guest microlot—roasted weekly on our vintage Probat.",
    items: [
      {
        id: "velvet-espresso",
        name: "Velvet Espresso",
        note: "Caramelized sugar · Orange zest",
        price: "$4.50",
        tag: "Signature",
      },
      {
        id: "ethiopia-yirgacheffe",
        name: "Ethiopia Yirgacheffe",
        note: "Jasmine · Bergamot · Silky",
        price: "$5.25",
        tag: "Pour-over",
      },
      {
        id: "kyoto-slow-drip",
        name: "Kyoto Slow Drip",
        note: "48-hour cold extraction",
        price: "$6.00",
        tag: "Limited",
      },
      {
        id: "cortado",
        name: "Cortado",
        note: "Microfoam · ristretto base",
        price: "$4.75",
        tag: "Classic",
      },
      {
        id: "cardamom-latte",
        name: "Cardamom Latte",
        note: "House spice blend · Oat milk",
        price: "$5.50",
        tag: "House",
      },
      {
        id: "affogato",
        name: "Affogato",
        note: "Vanilla bean gelato · Double shot",
        price: "$7.00",
        tag: "Dessert",
      },
    ] satisfies MenuItem[],
  },

  // ─── Gallery (use /public/images/... or full URLs) ─────────
  gallery: {
    eyebrow: "Gallery",
    title: "Light, texture, ritual",
    description:
      "Warm oak, brushed brass, and the soft hum of the grinder. Every corner is composed for calm focus.",
    community: {
      before: "Photography by our community. Tag ",
      hashtag: "#velvetbeanmoments",
      after: " for a chance to be featured.",
    },
    images: [
      {
        id: "gallery-hero",
        src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=85",
        alt: "Latte art in a ceramic cup",
        gridClass:
          "col-span-2 min-h-[260px] md:col-span-7 md:row-span-2 md:min-h-[460px]",
        priority: true,
      },
      {
        id: "gallery-beans",
        src: "https://images.unsplash.com/photo-1447933601408-2464689462f4?w=800&q=85",
        alt: "Coffee beans close-up",
        gridClass: "min-h-[200px] md:col-span-5 md:min-h-[224px]",
      },
      {
        id: "gallery-pour",
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85",
        alt: "Espresso pouring",
        gridClass: "min-h-[200px] md:col-span-5 md:min-h-[224px]",
      },
      {
        id: "gallery-interior",
        src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=85",
        alt: "Minimal café interior",
        gridClass: "col-span-2 min-h-[220px] md:col-span-12 md:min-h-[300px]",
      },
    ] satisfies GalleryImage[],
  },

  // ─── Testimonials ──────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    title: "Loved by locals, sought by travelers",
    aside:
      "Average dwell time in our lounges: 47 minutes. We consider that a compliment.",
    starRating: 5,
    items: [
      {
        id: "t-amelia",
        quote:
          "The Kyoto drip here ruined every other cold coffee for me. Quiet room, impeccable pacing.",
        name: "Amelia Chen",
        role: "Editor, Kinfolk",
      },
      {
        id: "t-marcus",
        quote:
          "Velvet Bean treats espresso like choreography—weight, temperature, and silence all matter.",
        name: "Marcus Webb",
        role: "Chef & regular",
      },
      {
        id: "t-sofia",
        quote:
          "I fly through Portland twice a month. This is the only stop I never skip.",
        name: "Sofia Reyes",
        role: "Product designer",
      },
    ] satisfies Testimonial[],
  },

  // ─── Contact / visit ───────────────────────────────────────
  contact: {
    eyebrow: "Visit",
    title: "Reserve a slow morning",
    description:
      "Weekends fill quickly—send a note for parties of six or more, or to book our tasting flight experience.",
    info: [
      {
        id: "flagship",
        label: "Flagship",
        lines: ["218 NW Everett St", "Portland, OR 97209"],
      },
      {
        id: "hours",
        label: "Hours",
        lines: ["Mon–Fri · 7a – 7p", "Sat–Sun · 8a – 8p"],
      },
      {
        id: "concierge",
        label: "Concierge",
        email: "hello@velvetbean.coffee",
      },
    ] satisfies ContactInfoBlock[],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Jordan Lee",
      emailLabel: "Email",
      emailPlaceholder: "you@domain.com",
      messageLabel: "Message",
      messagePlaceholder: "Date, party size, or anything we should know.",
      submitLabel: "Send inquiry",
      successMessage: "Received—our host will reply shortly.",
    },
  },

  // ─── Footer ────────────────────────────────────────────────
  footer: {
    tagline:
      "Small-batch roasting, intentional hospitality, and rooms tuned for deep conversation.",
    socialHeading: "Social",
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Spotify", href: "https://spotify.com" },
    ] satisfies SocialLink[],
    copyrightRights: "All rights reserved.",
    disclaimer: "Demo template — replace with your own business details.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
