'use client';

import type { Stage, Channel } from "@/lib/demo-journey";

const channelMeta: Record<Channel, { label: string; bg: string; fg: string }> = {
  email: { label: "Email", bg: "rgba(0,184,169,0.12)", fg: "#008C82" },
  text: { label: "Text", bg: "rgba(47,128,237,0.12)", fg: "#2F80ED" },
  system: { label: "Behind the scenes", bg: "rgba(16,42,67,0.08)", fg: "#102A43" },
};

export default function JourneyTimeline({ stages }: { stages: Stage[] }) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {stages.map((stage, i) => {
        const meta = channelMeta[stage.channel];
        const isLatest = i === stages.length - 1;
        return (
          <div
            key={stage.title}
            className="hk-card hk-timeline-item"
            style={{
              padding: "16px 18px",
              borderLeft: `4px solid ${meta.fg}`,
              boxShadow: isLatest ? "0 8px 28px rgba(47,128,237,0.16)" : undefined,
            }}
          >
            <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "6px" }}>
              <span
                style={{
                  background: meta.bg,
                  borderRadius: "999px",
                  color: meta.fg,
                  fontFamily: "var(--font-accent)",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  padding: "4px 10px",
                  textTransform: "uppercase",
                }}
              >
                {meta.label}
              </span>
              <strong style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "16px" }}>
                {stage.title}
              </strong>
              {isLatest && (
                <span
                  style={{
                    alignItems: "center",
                    background: "#B9FBC0",
                    borderRadius: "999px",
                    color: "#0B6A3A",
                    display: "inline-flex",
                    fontFamily: "var(--font-accent)",
                    fontSize: "11px",
                    fontWeight: 800,
                    gap: "5px",
                    padding: "3px 9px",
                  }}
                >
                  ● just now
                </span>
              )}
            </div>

            <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6, margin: "0 0 8px" }}>{stage.detail}</p>

            <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  background: "rgba(255,107,107,0.1)",
                  borderRadius: "6px",
                  color: "#B42323",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "3px 8px",
                }}
              >
                ⏱ Normally {stage.realTiming}
              </span>
              <span style={{ color: "#8795A1", fontSize: "12px", fontStyle: "italic" }}>— you just felt it in seconds</span>
            </div>

            <p
              style={{
                borderTop: "1px solid rgba(16,42,67,0.08)",
                color: "#102A43",
                fontSize: "12.5px",
                lineHeight: 1.55,
                margin: "12px 0 0",
                paddingTop: "10px",
              }}
            >
              <span style={{ color: "#2F80ED", fontWeight: 800 }}>What you (the breeder) see: </span>
              {stage.breeder}
            </p>
          </div>
        );
      })}
    </div>
  );
}
