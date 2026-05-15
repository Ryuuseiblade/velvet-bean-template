import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { getSiteUrl } from "@/lib/site-url";

const OG_IMAGE_PATH = "/opengraph-image";

export function buildRootMetadata(): Metadata {
  const url = getSiteUrl();
  const { metadata, brand, seo, gallery } = siteConfig;
  const twitter = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();
  const ogImage = `${url}${OG_IMAGE_PATH}`;

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
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
    manifest: "/manifest.webmanifest",
  };
}
