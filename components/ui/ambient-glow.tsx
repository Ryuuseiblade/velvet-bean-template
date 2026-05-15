import { cn } from "@/lib/cn";

type AmbientGlowProps = {
  className?: string;
  variant?: "gold" | "roast" | "mixed";
};

const variants = {
  gold: "bg-gold/10",
  roast: "bg-roast-glow/12",
  mixed: "bg-gradient-to-br from-gold/12 via-roast-glow/8 to-transparent",
} as const;

export function AmbientGlow({ className, variant = "mixed" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px] md:blur-[130px]",
        variants[variant],
        className,
      )}
    />
  );
}
