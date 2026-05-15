import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";

export default function manifest(): MetadataRoute.Manifest {
  const { brand, metadata } = siteConfig;

  return {
    name: brand.legalName,
    short_name: brand.name,
    description: metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070605",
    theme_color: "#070605",
    lang: siteConfig.metadata.language,
    categories: ["food", "lifestyle"],
  };
}
