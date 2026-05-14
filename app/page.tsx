import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

const MenuSection = dynamic(
  () => import("@/components/MenuSection").then((m) => ({ default: m.MenuSection })),
  { loading: () => <div className="min-h-[780px] bg-ink-soft" aria-hidden /> },
);

const Gallery = dynamic(
  () => import("@/components/Gallery").then((m) => ({ default: m.Gallery })),
  { loading: () => <div className="min-h-[920px] bg-ink" aria-hidden /> },
);

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })),
  { loading: () => <div className="min-h-[620px] bg-ink-muted" aria-hidden /> },
);

const Contact = dynamic(
  () => import("@/components/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <div className="min-h-[720px] bg-ink" aria-hidden /> },
);

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
