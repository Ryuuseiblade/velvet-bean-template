# Configuration

**Start here.** You only need these files to rebrand the template.

| File | Purpose |
|------|---------|
| [`site.config.ts`](site.config.ts) | All text, menu, images, SEO, contact |
| [`features.config.ts`](features.config.ts) | Turn sections on/off (`true` / `false`) |
| [`theme.config.ts`](theme.config.ts) | Color & font reference (edit `tailwind.config.ts` for real changes) |
| [`types.ts`](types.ts) | TypeScript shapes — rarely edited |

## 3-step rebrand

1. Edit `site.config.ts` — change `brand.name`, hero, menu items, etc.
2. Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_SITE_URL`
3. Run `npm run dev`

Full guide: [CUSTOMIZATION.md](../CUSTOMIZATION.md) in the project root.
