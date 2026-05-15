import dynamic from "next/dynamic";
import { SectionFallback } from "@/components/ui/section-fallback";

type FallbackProps = React.ComponentProps<typeof SectionFallback>;

function lazySection(
  loader: () => Promise<{ default: React.ComponentType<object> }>,
  fallback: FallbackProps,
) {
  return dynamic(loader, {
    loading: () => <SectionFallback {...fallback} />,
  });
}

/** Below-fold sections are code-split for faster first paint. */
export const MenuSection = lazySection(
  () => import("@/components/sections/menu-section").then((m) => ({ default: m.MenuSection })),
  { surface: "soft", minHeight: 780 },
);

export const GallerySection = lazySection(
  () => import("@/components/sections/gallery-section").then((m) => ({ default: m.GallerySection })),
  { surface: "ink", minHeight: 920 },
);

export const TestimonialsSection = lazySection(
  () =>
    import("@/components/sections/testimonials-section").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { surface: "muted", minHeight: 620 },
);

export const ContactSection = lazySection(
  () => import("@/components/sections/contact-section").then((m) => ({ default: m.ContactSection })),
  { surface: "ink", minHeight: 720 },
);
