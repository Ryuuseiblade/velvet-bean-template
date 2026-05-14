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
          DEFAULT: "#090807",
          soft: "#0f0d0b",
          muted: "#161311",
        },
        roast: {
          DEFAULT: "#3d2914",
          light: "#5c3d22",
          glow: "#8b5a2b",
        },
        crema: {
          DEFAULT: "#e8d5c4",
          dim: "#a89888",
          whisper: "#f3ece5",
        },
        gold: {
          DEFAULT: "#c9a962",
          bright: "#e8d49a",
          deep: "#8a6d3a",
        },
        espresso: "#2a1810",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["4.25rem", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display-xl": ["5rem", { lineHeight: "0.96", letterSpacing: "-0.045em" }],
        "display-2xl": ["5.75rem", { lineHeight: "0.94", letterSpacing: "-0.045em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "apple": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 2px 4px rgba(0,0,0,0.12), 0 24px 48px -24px rgba(0,0,0,0.45)",
        "card-hover":
          "0 0 0 1px rgba(255,255,255,0.1) inset, 0 4px 8px rgba(0,0,0,0.15), 0 40px 80px -32px rgba(0,0,0,0.55), 0 0 80px -20px rgba(201,169,98,0.12)",
        float: "0 12px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06) inset",
        glow: "0 0 60px -12px rgba(201,169,98,0.25)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        "radial-fade":
          "radial-gradient(ellipse 85% 55% at 50% -8%, rgba(201, 169, 98, 0.14), transparent 58%)",
        mesh:
          "radial-gradient(at 18% 22%, rgba(139, 90, 43, 0.12) 0px, transparent 52%), radial-gradient(at 82% 8%, rgba(201, 169, 98, 0.1) 0px, transparent 48%), radial-gradient(at 50% 100%, rgba(22, 18, 15, 0.85) 0px, transparent 52%)",
        "sheen-card":
          "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.04) 100%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
