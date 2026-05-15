# Velvet Bean — Website Template

Premium single-page coffee shop landing template for agencies, freelancers, and marketplaces.

## Included

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS design system (dark luxury theme)
- Framer Motion animations (with reduced-motion support)
- Fully responsive (mobile, tablet, desktop)
- SEO: sitemap, robots, Open Graph image, JSON-LD
- Vercel-ready static build
- Beginner-friendly `config/` editing (no React required for copy)

## Sections

| Section | Config flag | Component |
|---------|-------------|-----------|
| Hero | always on | `components/sections/hero-section.tsx` |
| Menu | `features.sections.menu` | `menu-section.tsx` |
| Gallery | `features.sections.gallery` | `gallery-section.tsx` |
| Testimonials | `features.sections.testimonials` | `testimonials-section.tsx` |
| Contact | `features.sections.contact` | `contact-section.tsx` |

Navbar + Footer: `components/layout/`

## Folder map

```
config/                 ← Buyers edit here
components/
  ui/                   Reusable UI (buttons, sections, cards)
  layout/               Navbar, Footer
  sections/             One file per page block
  templates/            Page assembly (section order)
  providers/            Motion wrapper
  seo/                  JSON-LD
app/                    Next.js routes (avoid editing)
lib/                    App logic (metadata, lazy load)
hooks/                  React hooks
public/images/          Local image uploads
```

## Buyer checklist before resale

- [ ] Replace all demo copy in `config/site.config.ts`
- [ ] Swap gallery images (Unsplash URLs or `/public/images/`)
- [ ] Update `footer.disclaimer` and social links
- [ ] Set `NEXT_PUBLIC_SITE_URL` for production
- [ ] Run `npm run build` — must pass with zero errors
- [ ] Wire contact form to a real backend (currently demo-only)

## License

Include your own license terms when selling. Demo content uses placeholder business details.
