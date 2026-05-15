import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MotionProvider } from "@/components/providers/motion-provider";
import { siteConfig } from "@/config";
import { fontClassName } from "@/lib/fonts";
import { buildRootMetadata } from "@/lib/root-metadata";
import { buildJsonLdGraph } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  themeColor: "#070605",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.metadata.language} className={fontClassName}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans text-[15px] font-normal leading-relaxed tracking-[-0.01em] text-crema-whisper antialiased md:text-base lg:text-[17px]">
        <JsonLd data={buildJsonLdGraph()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ink-soft focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-card focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
