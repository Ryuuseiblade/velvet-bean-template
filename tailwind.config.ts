import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070605",
          soft: "#0c0a08",
          muted: "#14110e",
          lift: "#1c1814",
        },
        roast: {
          DEFAULT: "#3d2914",
          light: "#5c3d22",
          glow: "#8b5a2b",
        },
        crema: {
          DEFAULT: "#e8d5c4",
          dim: "#a89888",
          whisper: "#f7f0e8",
        },
        gold: {
          DEFAULT: "#c9a962",
          bright: "#ecd898",
          deep: "#8a6d3a",
          muted: "rgba(201, 169, 98, 0.15)",
        },
        espresso: "#2a1810",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xs": ["2.25rem", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
        "display-sm": ["2.875rem", { lineHeight: "1.04", letterSpacing: "-0.032em" }],
        "display-md": ["3.625rem", { lineHeight: "1.02", letterSpacing: "-0.036em" }],
        "display-lg": ["4.5rem", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display-xl": ["5.25rem", { lineHeight: "0.96", letterSpacing: "-0.042em" }],
        "display-2xl": ["6rem", { lineHeight: "0.94", letterSpacing: "-0.045em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-smooth": "cubic-bezier(0.45, 0, 0.15, 1)",
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.07) inset, 0 1px 2px rgba(0,0,0,0.1), 0 28px 56px -28px rgba(0,0,0,0.5)",
        "card-hover":
          "0 0 0 1px rgba(255,255,255,0.12) inset, 0 2px 4px rgba(0,0,0,0.12), 0 48px 96px -32px rgba(0,0,0,0.6), 0 0 100px -24px rgba(201,169,98,0.18)",
        float:
          "0 16px 48px -12px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 1px 0 rgba(255,255,255,0.06) inset",
        glow: "0 0 80px -16px rgba(201, 169, 98, 0.35)",
        "glow-soft": "0 0 120px -40px rgba(201, 169, 98, 0.2)",
        glass: "0 8px 32px -8px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset",
        luxury:
          "0 24px 80px -24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 60px -20px rgba(139,90,43,0.15)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        "radial-fade":
          "radial-gradient(ellipse 90% 60% at 50% -12%, rgba(201, 169, 98, 0.18), transparent 62%)",
        "radial-gold":
          "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(236, 216, 152, 0.12), transparent 70%)",
        mesh:
          "radial-gradient(at 12% 18%, rgba(139, 90, 43, 0.14) 0px, transparent 50%), radial-gradient(at 88% 6%, rgba(201, 169, 98, 0.12) 0px, transparent 46%), radial-gradient(at 72% 88%, rgba(42, 24, 16, 0.5) 0px, transparent 48%), radial-gradient(at 8% 72%, rgba(201, 169, 98, 0.06) 0px, transparent 42%)",
        "sheen-card":
          "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0.05) 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #f7f0e8 0%, #ecd898 42%, #c9a962 100%)",
        "gradient-ink":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
        "section-fade":
          "linear-gradient(180deg, transparent 0%, rgba(7,6,5,0.6) 100%)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
