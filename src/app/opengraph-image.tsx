import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#11100e",
          color: "#f5ebdd",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 18%, rgba(196,154,74,0.24), transparent 34%), radial-gradient(circle at 86% 12%, rgba(164,90,58,0.2), transparent 30%), radial-gradient(circle at 70% 90%, rgba(47,93,80,0.22), transparent 34%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 40,
            right: 52,
            width: 220,
            height: 220,
            borderRadius: 999,
            border: "2px solid rgba(196,154,74,0.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 56,
            width: 360,
            height: 10,
            borderRadius: 99,
            background: "linear-gradient(90deg, #c49a4a 0%, #a45a3a 100%)",
            opacity: 0.85,
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(196,154,74,0.55)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 24,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#cbbba0",
            }}
          >
            One-of-one resale finds
          </div>

          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Purveyor of Curiosities
          </div>

          <div style={{ fontSize: 34, color: "#cbbba0", maxWidth: 940, lineHeight: 1.35 }}>
            Curated finds. Useful goods. Unexpected treasures.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
