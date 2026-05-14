import { siteContent } from "@/data/site-content";
import { getSiteUrl } from "@/lib/site-url";

function getEmail(): string | undefined {
  const block = siteContent.contact.info.find((b) => b.email);
  return block?.email;
}

/** Graph payload for `<JsonLd />` — WebSite + CafeOrCoffeeShop. */
export function buildJsonLdGraph() {
  const url = getSiteUrl();
  const { brand, metadata, structuredData } = siteContent;
  const email = getEmail();
  const b = structuredData.business;

  const cafe: Record<string, unknown> = {
    "@type": "CafeOrCoffeeShop",
    "@id": `${url}/#cafe`,
    name: brand.name,
    legalName: brand.legalName,
    description: metadata.description,
    url,
    image: siteContent.gallery.images.filter((img) => img.priority).map((img) => img.src),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: b.addressCountry,
    },
    servesCuisine: "Coffee",
    priceRange: structuredData.priceRange,
    openingHoursSpecification: structuredData.openingHours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days,
      opens: row.opens,
      closes: row.closes,
    })),
  };

  if (email) {
    cafe.email = email;
  }
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  if (phone) {
    cafe.telephone = phone;
  }
  const sameAs = siteContent.footer.social.map((s) => s.href).filter(Boolean);
  if (sameAs.length > 0) {
    cafe.sameAs = sameAs;
  }

  const website = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: brand.name,
    description: metadata.description,
    publisher: { "@id": `${url}/#cafe` },
    inLanguage: siteContent.metadata.language,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, cafe],
  };
}
