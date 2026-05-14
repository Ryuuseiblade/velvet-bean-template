import { ImageResponse } from "next/og";
import { siteContent } from "@/data/site-content";

export const runtime = "edge";

export const alt = siteContent.metadata.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { brand, hero, metadata } = siteContent;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #090807 0%, #12100e 42%, #1a1612 100%)",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c9a962",
            marginBottom: 24,
          }}
        >
          {hero.eyebrow}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#f3ece5",
            maxWidth: 960,
          }}
        >
          {hero.title.line1}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#e8d49a",
            maxWidth: 960,
          }}
        >
          {hero.title.line2}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 900,
          }}
        >
          {metadata.description}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {brand.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
