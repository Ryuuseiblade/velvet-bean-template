type JsonLdProps = {
  data: unknown;
};

/** Structured data for search engines — keep in sync with `config/site.config.ts`. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
