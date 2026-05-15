import { Instrument_Serif, Inter } from "next/font/google";

export const displayFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
  adjustFontFallback: true,
});

export const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
});

export const fontClassName = `${displayFont.variable} ${sansFont.variable}`;
