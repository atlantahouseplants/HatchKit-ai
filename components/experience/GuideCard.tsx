'use client';

import { type StepScript, SPED_UP_NOTE } from "@/lib/demo-script";

export type GuidePhase = "brief" | "revealing" | "recap";

// The coach: tells the prospect what to do + what to expect (brief), then what
// HatchKit just did behind the scenes + why it matters (recap). Pure display.
export default function GuideCard({
  phase,
  script,
  hasPhone,
  onAction,
  onContinue,
}: {
  phase: GuidePhase;
  script: StepScript;
  hasPhone: boolean;
  onAction: () => void;
  onContinue: () => void;
}) {
  if (phase === "recap") {
    const r = script.recap;
    const checkLine = [r.checkNow, hasPhone ? r.checkNowPhone : null].filter(Boolean).join(" ");
    return (
      <div className="hk-card" style={{ borderTop: "4px solid #2F80ED", padding: "26px" }}>
        <span className="hk-eyebrow" style={{ color: "#2F80ED" }}>
          The magic behind the scenes
        </span>
        <h2 style={{ color: "#102A43", fontSize: "22px", margin: "10px 0 14px" }}>
          What HatchKit just did — on its own
        </h2>
        <ul style={{ display: "grid", gap: "10px", listStyle: "none", margin: 0, padding: 0 }}>
          {r.did.map((item) => (
            <li key={item} style={{ alignItems: "flex-start", display: "flex", gap: "10px" }}>
              <span
                style={{
                  alignItems: "center",
                  background: "#00B8A9",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "inline-flex",
                  flexShrink: 0,
                  fontSize: "11px",
                  fontWeight: 800,
                  height: "20px",
                  justifyContent: "center",
                  marginTop: "1px",
                  width: "20px",
                }}
              >
                ✓
              </span>
              <span style={{ color: "#1F2933", fontSize: "14.5px", lineHeight: 1.55 }}>{item}</span>
            </li>
          ))}
        </ul>

        <div
          style={{
            background: "#FFF7E6",
            borderLeft: "4px solid #00B8A9",
            borderRadius: "10px",
            marginTop: "18px",
            padding: "15px 17px",
          }}
        >
          <div
            style={{
              color: "#008C82",
              fontFamily: "var(--font-accent)",
              fontSize: "11.5px",
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {r.whyTitle}
          </div>
          <p style={{ color: "#102A43", fontSize: "14.5px", lineHeight: 1.65, margin: "7px 0 0" }}>{r.why}</p>
        </div>

        {checkLine && (
          <div
            style={{
              alignItems: "flex-start",
              background: "rgba(47,128,237,0.08)",
              border: "1px solid rgba(47,128,237,0.22)",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
              marginTop: "14px",
              padding: "13px 15px",
            }}
          >
            <span style={{ fontSize: "18px", lineHeight: 1 }}>📬</span>
            <p style={{ color: "#102A43", fontSize: "13.5px", fontWeight: 600, lineHeight: 1.55, margin: 0 }}>
              {checkLine}
            </p>
          </div>
        )}

        <button
          className="hk-button hk-button-primary"
          onClick={onContinue}
          style={{ border: "none", cursor: "pointer", marginTop: "20px", width: "100%" }}
          type="button"
        >
          {r.continueCta}
        </button>
      </div>
    );
  }

  // brief (and revealing: same card with the button busy)
  const b = script.brief;
  const busy = phase === "revealing";
  return (
    <div className="hk-card" style={{ borderTop: "4px solid #00B8A9", padding: "26px" }}>
      <span className="hk-eyebrow" style={{ color: "#00B8A9" }}>
        {b.stepLabel}
      </span>
      <p
        style={{
          borderLeft: "3px solid rgba(0,184,169,0.4)",
          color: "#52606D",
          fontSize: "15px",
          fontStyle: "italic",
          lineHeight: 1.65,
          margin: "12px 0 16px",
          paddingLeft: "13px",
        }}
      >
        {b.scenario}
      </p>

      <div style={{ marginBottom: "14px" }}>
        <SectionLabel>What you'll do</SectionLabel>
        <p style={{ color: "#102A43", fontSize: "15px", fontWeight: 600, lineHeight: 1.6, margin: "6px 0 0" }}>
          {b.whatToDo}
        </p>
      </div>

      <div>
        <SectionLabel>What's about to happen — watch for it</SectionLabel>
        <ul style={{ display: "grid", gap: "8px", listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          {b.whatWillHappen.map((item) => (
            <li key={item} style={{ alignItems: "flex-start", display: "flex", gap: "9px" }}>
              <span style={{ color: "#2F80ED", flexShrink: 0, fontSize: "13px", fontWeight: 800, marginTop: "2px" }}>▸</span>
              <span style={{ color: "#1F2933", fontSize: "14px", lineHeight: 1.55 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {b.demoSafe && (
        <div
          style={{
            background: "rgba(255,107,107,0.07)",
            border: "1px solid rgba(255,107,107,0.3)",
            borderRadius: "10px",
            color: "#102A43",
            fontSize: "13.5px",
            fontWeight: 700,
            lineHeight: 1.55,
            marginTop: "14px",
            padding: "12px 14px",
          }}
        >
          🛡️ {b.demoSafe}
        </div>
      )}

      {hasPhone && b.phoneReady && (
        <div
          style={{
            background: "rgba(47,128,237,0.08)",
            border: "1px solid rgba(47,128,237,0.22)",
            borderRadius: "10px",
            color: "#102A43",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: 1.55,
            marginTop: "12px",
            padding: "12px 14px",
          }}
        >
          {b.phoneReady}
        </div>
      )}

      <button
        className="hk-button hk-button-primary"
        disabled={busy}
        onClick={onAction}
        style={{
          border: "none",
          cursor: busy ? "wait" : "pointer",
          marginTop: "18px",
          opacity: busy ? 0.7 : 1,
          width: "100%",
        }}
        type="button"
      >
        {busy ? `👀 ${b.busyCta}` : b.cta}
      </button>

      <p style={{ color: "#8795A1", fontSize: "12px", lineHeight: 1.55, margin: "12px 0 0" }}>⏱ {SPED_UP_NOTE}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: "#8795A1",
        fontFamily: "var(--font-accent)",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}
