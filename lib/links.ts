/** One-page template: skip prefetch for hash-only routes. */
export function shouldPrefetchHref(href: string): boolean {
  return !href.startsWith("#");
}
