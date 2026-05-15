import { Footer, Navbar } from "@/components/layout";
import { HeroSection } from "@/components/sections/hero-section";
import {
  ContactSection,
  GallerySection,
  MenuSection,
  TestimonialsSection,
} from "@/lib/lazy-sections";

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
