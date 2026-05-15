import { Footer, Navbar } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import { featuresConfig } from "@/config/features.config";
import {
  ContactSection,
  GallerySection,
  MenuSection,
  TestimonialsSection,
} from "@/lib/lazy-sections";

/**
 * Main landing page composition.
 * Reorder sections here, or toggle them in `config/features.config.ts`.
 */
export function HomePage() {
  const { sections } = featuresConfig;

  return (
    <main id="main-content" className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {sections.menu ? <MenuSection /> : null}
      {sections.gallery ? <GallerySection /> : null}
      {sections.testimonials ? <TestimonialsSection /> : null}
      {sections.contact ? <ContactSection /> : null}
      <Footer />
    </main>
  );
}
