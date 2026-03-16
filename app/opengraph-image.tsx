import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "HatchKit — The All-in-One Tool for Reptile Breeders";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
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
          background: "#111111",
          position: "relative",
        }}
      >
        {/* Subtle gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at center, rgba(27,94,32,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo egg */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="20" cy="22" rx="14" ry="16" fill="#1B5E20" />
            <ellipse cx="15" cy="14" rx="4" ry="5" fill="rgba(255,255,255,0.12)" />
            <path
              d="M20 6 L17 14 L21 14 L18 22"
              stroke="#FF6F00"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="18" cy="22" r="1.5" fill="#FFA000" />
          </svg>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-1px",
            }}
          >
            HatchKit
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.3,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          The All-in-One Tool for Reptile Breeders
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: "600px",
            display: "flex",
          }}
        >
          Shipping, follow-up, inbox, social media, and more.
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #1B5E20, #FF6F00, #FFA000)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
