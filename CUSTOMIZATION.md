# Customization guide

This template keeps **content** and **design** separate so you can rebrand quickly without touching React code.

## 1. Site content (required)

Open **`config/site.config.ts`**. Every section is labeled with comments:

- **brand** — Business name shown in the header and footer
- **metadata** — Browser tab title and Google description
- **navigation** — Header links (`#menu` must match `sections.menu`, etc.)
- **hero** — Headline, description, buttons, highlight cards
- **menu** — Coffee items (add/remove objects in `items`)
- **gallery** — Images and alt text
- **testimonials** — Customer quotes
- **contact** — Address, hours, email, form labels
- **footer** — Tagline and social links

### Navigation tips

Section IDs live in `sections`. Nav links use hashes, e.g. `#menu`. If you rename `sections.menu` to `"drinks"`, update:

1. `sections.menu` → `"drinks"`
2. Nav link `href: "#menu"` → `"#drinks"`

## 2. Environment variables

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://www.yourcafe.com
```

Required for correct canonical URLs, sitemap, and Open Graph on Vercel.

Optional:

```env
NEXT_PUBLIC_TWITTER_SITE=@yourbrand
NEXT_PUBLIC_BUSINESS_PHONE=+1-555-0100
```

## 3. Images

**Option A — Local files**

1. Add images to `public/images/`
2. In `site.config.ts`, set `src: "/images/your-photo.jpg"`

**Option B — External URLs**

Use full URLs (Unsplash, CDN). Remote hosts must be allowed in `next.config.ts` under `images.remotePatterns`.

## 4. Colors & fonts

**Colors:** edit `tailwind.config.ts` → `theme.extend.colors` (`ink`, `gold`, `crema`, `roast`).

**Fonts:** edit `lib/fonts.ts` (Google Fonts). Match family names in `tailwind.config.ts` under `fontFamily`.

## 5. Enable / disable sections

Open **`config/features.config.ts`** and set any section to `false`:

```ts
sections: {
  menu: true,
  gallery: false,      // hides gallery + nav link
  testimonials: true,
  contact: true,
}
```

Nav links update automatically. To change section order, edit `components/templates/home-page.tsx`.

## 6. Contact form

The form is **demo-only** (shows a success message). To connect a backend:

1. Open `components/sections/contact-section.tsx`
2. Replace `onSubmit` with your API route, Formspree, or Resend integration

## Need help?

Run `npm run build` before deploying. Fix any TypeScript errors reported in the terminal.
