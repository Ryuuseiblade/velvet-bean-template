import { featuresConfig } from "@/config/features.config";
import { siteConfig } from "@/config/site.config";

type SectionFeatureKey = keyof typeof featuresConfig.sections;

/** Maps nav hash hrefs to feature flags in `config/features.config.ts`. */
function hrefToFeatureKey(href: string): SectionFeatureKey | null {
  const { sections } = siteConfig;
  const map: Record<string, SectionFeatureKey> = {
    [`#${sections.menu}`]: "menu",
    [`#${sections.gallery}`]: "gallery",
    [`#${sections.stories}`]: "testimonials",
    [`#${sections.visit}`]: "contact",
  };
  return map[href] ?? null;
}

/** Navigation links for enabled sections only. */
export function getVisibleNavLinks() {
  return siteConfig.navigation.links.filter((link) => {
    const key = hrefToFeatureKey(link.href);
    if (!key) return true;
    return featuresConfig.sections[key];
  });
}

export function isContactEnabled(): boolean {
  return featuresConfig.sections.contact;
}
