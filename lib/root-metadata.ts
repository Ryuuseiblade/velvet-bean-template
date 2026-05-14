import type { Metadata } from "next";
import { siteContent } from "@/data/site-content";
import { getSiteUrl } from "@/lib/site-url";

export function buildRootMetadata(): Metadata {
  const url = getSiteUrl();
  const { metadata, brand, seo } = siteContent;
  const twitter = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();

  return {
    metadataBase: new URL(url),
    title: {
      default: metadata.title,
      template: `%s · ${brand.name}`,
    },
    description: metadata.description,
    keywords: [...seo.keywords],
    authors: [{ name: brand.legalName, url: `${url}/` }],
    creator: brand.name,
    publisher: brand.legalName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: seo.openGraphLocale,
      url,
      siteName: brand.name,
      title: metadata.title,
      description: metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      ...(twitter ? { site: twitter, creator: twitter } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "food",
    applicationName: brand.name,
    referrer: "origin-when-cross-origin",
  };
}
