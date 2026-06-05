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
          alignItems: "center",
          background: "#FFFFFF",
          borderRadius: "7px",
          display: "flex",
          height: 32,
          justifyContent: "center",
          width: 32,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
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
    ),
    { ...size }
  );
}
