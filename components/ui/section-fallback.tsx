import { cn } from "@/lib/cn";

const surfaces = {
  ink: "bg-ink",
  soft: "bg-ink-soft",
  muted: "bg-ink-muted",
} as const;

type SectionFallbackProps = {
  surface: keyof typeof surfaces;
  minHeight: number;
};

export function SectionFallback({ surface, minHeight }: SectionFallbackProps) {
  return (
    <div aria-hidden className={cn(surfaces[surface], "w-full")} style={{ minHeight }} />
  );
}
