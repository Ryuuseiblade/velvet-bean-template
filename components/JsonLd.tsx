type JsonLdProps = {
  data: unknown;
};

/** Emits JSON-LD for crawlers. Keep aligned with `config/site.config.ts`. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
