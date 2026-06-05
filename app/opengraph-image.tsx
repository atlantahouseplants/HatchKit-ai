import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "HatchKit - Breeder Business Busywork Software";
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
          background:
            "radial-gradient(circle at 18% 18%, rgba(0,184,169,0.18), transparent 32%), radial-gradient(circle at 80% 18%, rgba(47,128,237,0.28), transparent 30%), #102A43",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "28px", marginBottom: "52px" }}>
          <div
            style={{
              alignItems: "center",
              background: "#FFFFFF",
              borderRadius: "16px",
              display: "flex",
              height: "96px",
              justifyContent: "center",
              width: "96px",
            }}
          >
            <svg width="76" height="76" viewBox="0 0 48 48" fill="none">
              <path d="M16.2 27.2V35.8L5.3 31.1V19.9L16.2 27.2Z" fill="#102A43" />
              <path d="M17.8 27.2V35.8L42.7 31.1V19.9L17.8 27.2Z" fill="#2F80ED" />
              <path
                d="M11.2 21.1C10.9 10.8 16.1 3.9 23.9 3.9C31.6 3.9 36.9 10.8 36.6 21.1"
                stroke="#102A43"
                strokeLinecap="round"
                strokeWidth="3.4"
              />
              <path
                d="M8.9 20.1L14.2 24.4L20.1 20.3L25.8 24.4L31.6 20.3L37.7 23.9"
                stroke="#2F80ED"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.3"
              />
              <path
                d="M16.1 14.7L21.1 19.4L31 9.6"
                stroke="#00B8A9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.8"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: "72px", fontWeight: 800, letterSpacing: 0 }}>
            <span>Hatch</span>
            <span style={{ color: "#66B2FF" }}>Kit</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <div style={{ color: "#00B8A9", display: "flex", fontSize: "24px", fontWeight: 800 }}>
            Breeder business software
          </div>
          <div style={{ display: "flex", fontSize: "54px", fontWeight: 800, lineHeight: 1.08, marginTop: "18px" }}>
            Capture leads, ship safely, and turn buyers into repeat customers.
          </div>
          <div style={{ color: "rgba(255,255,255,0.66)", display: "flex", fontSize: "25px", lineHeight: 1.45, marginTop: "24px" }}>
            Practical help with leads, buyer follow-up, shipping checks, content, and growth.
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(90deg, #2F80ED, #00B8A9, #B9FBC0)",
            bottom: 0,
            display: "flex",
            height: "8px",
            left: 0,
            position: "absolute",
            right: 0,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
