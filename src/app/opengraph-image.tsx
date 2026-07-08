import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0F",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(107,16,25,0.55), transparent 55%), radial-gradient(circle at 80% 0%, rgba(247,71,71,0.2), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: 28,
            background: "linear-gradient(135deg, #F6C94A, #C99A3C)",
            fontSize: 56,
            fontWeight: 800,
            color: "#0B0B0F",
          }}
        >
          D
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: 4,
            color: "#FFF3D6",
          }}
        >
          DG<span style={{ color: "#F6C94A" }}>CLUB</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "rgba(255,243,214,0.65)" }}>
          Play. Win. Withdraw Instantly.
        </div>
      </div>
    ),
    { ...size }
  );
}
