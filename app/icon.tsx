import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B5E20",
          borderRadius: "6px",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="20" cy="22" rx="14" ry="16" fill="#2E7D32" />
          <ellipse cx="15" cy="14" rx="4" ry="5" fill="rgba(255,255,255,0.15)" />
          <path
            d="M20 6 L17 14 L21 14 L18 22"
            stroke="#FF6F00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="18" cy="22" r="1.5" fill="#FFA000" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
