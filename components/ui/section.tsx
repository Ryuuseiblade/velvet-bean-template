import { cn } from "@/lib/cn";

const surfaces = {
  ink: "bg-ink",
  soft: "bg-ink-soft",
  muted: "bg-ink-muted",
} as const;

type SectionSurface = keyof typeof surfaces;

type SectionProps = {
  id: string;
  surface?: SectionSurface;
  grain?: boolean;
  grainOpacity?: "light" | "medium";
  divider?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const grainOpacityClass = {
  light: "opacity-20",
  medium: "opacity-30",
} as const;

export function Section({
  id,
  surface = "ink",
  grain = false,
  grainOpacity = "medium",
  divider = false,
  glow = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-[var(--section-py)] sm:scroll-mt-28 md:scroll-mt-32",
        surfaces[surface],
        className,
      )}
    >
      {divider ? <div className="section-divider" aria-hidden /> : null}
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-radial-gold opacity-60"
        />
      ) : null}
      {grain ? (
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-0 bg-grain", grainOpacityClass[grainOpacity])}
        />
      ) : null}
      {children}
    </section>
  );
}
