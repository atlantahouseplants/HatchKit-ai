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
      className="scale-pattern hk-video-section"
      style={{
        background: "#102A43",
        padding: "86px 24px",
      }}
    >
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <p
          style={{
            color: "#00B8A9",
            fontFamily: "var(--font-accent)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: 0,
            marginBottom: "12px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          See it in action
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Watch HatchKit in action
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.62)",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: 1.6,
            marginBottom: "36px",
            textAlign: "center",
          }}
        >
          See the kind of system HatchKit can put behind your breeder business.
        </p>

        <div
          style={{
            background: "#000",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            overflow: "hidden",
            position: "relative",
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
              background: "#000",
              display: "block",
              maxHeight: "480px",
              objectFit: "contain",
              width: "100%",
            }}
          />

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play HatchKit video"
              style={{
                alignItems: "center",
                background: "rgba(0,0,0,0.35)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                inset: 0,
                justifyContent: "center",
                position: "absolute",
              }}
            >
              <span
                style={{
                  alignItems: "center",
                  background: "#2F80ED",
                  borderRadius: "50%",
                  boxShadow: "0 8px 32px rgba(47,128,237,0.38)",
                  display: "flex",
                  height: "72px",
                  justifyContent: "center",
                  width: "72px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "4px" }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
