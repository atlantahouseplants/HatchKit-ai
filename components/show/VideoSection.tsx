'use client';

import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      style={{
        background: "#111111",
        padding: "72px 24px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FF6F00",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          See it in action
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          Watch how it works
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            marginBottom: "36px",
            lineHeight: 1.6,
          }}
        >
          Two minutes. The whole picture.
        </p>

        {/* Video wrapper */}
        <div
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#000",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <video
            ref={videoRef}
            src="/videoplayback.mp4"
            controls
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            style={{
              width: "100%",
              display: "block",
              maxHeight: "480px",
              objectFit: "contain",
              background: "#000",
            }}
          />

          {/* Custom play overlay — shown before first play */}
          {!playing && (
            <div
              onClick={handlePlay}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.35)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#FF6F00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(255,111,0,0.5)",
                  transition: "transform 0.15s ease",
                }}
              >
                {/* Play triangle */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ marginLeft: "4px" }}
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
