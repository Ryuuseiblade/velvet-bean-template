import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteContent } from "@/data/site-content";
import { buildRootMetadata } from "@/lib/root-metadata";
import { buildJsonLdGraph } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090807" },
    { media: "(prefers-color-scheme: light)", color: "#f3ece5" },
  ],
  width: "device-width",
  initialScale: 1,
};

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600"],
  display: "swap",
  adjustFontFallback: true,
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteContent.metadata.language} className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans text-[15px] font-normal leading-relaxed tracking-[-0.01em] text-crema-whisper antialiased md:text-base">
        <JsonLd data={buildJsonLdGraph()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ink-soft focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-card focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
