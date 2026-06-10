'use client';

import { BOARD_STAGES } from "@/lib/demo-journey";

export default function HatchKitDashboard({
  name,
  activeStage,
  note,
}: {
  name: string;
  activeStage: string;
  note: string;
}) {
  const activeIdx = BOARD_STAGES.indexOf(activeStage as (typeof BOARD_STAGES)[number]);
  const firstName = (name || "Buyer").split(" ")[0] || "Buyer";

  return (
    <div>
      <div style={{ alignItems: "baseline", display: "flex", gap: "8px", marginBottom: "12px" }}>
        <span className="hk-kicker" style={{ margin: 0 }}>What you see in HatchKit</span>
        <span style={{ color: "#8795A1", fontSize: "12px" }}>your dashboard</span>
      </div>

      <div className="hk-card" style={{ overflow: "hidden", padding: 0 }}>
        {/* window bar */}
        <div style={{ alignItems: "center", background: "#102A43", display: "flex", gap: "8px", padding: "12px 16px" }}>
          <span style={{ background: "#FF6B6B", borderRadius: "999px", height: "10px", width: "10px" }} />
          <span style={{ background: "#FFF7E6", borderRadius: "999px", height: "10px", width: "10px" }} />
          <span style={{ background: "#00B8A9", borderRadius: "999px", height: "10px", width: "10px" }} />
          <span style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-accent)", fontSize: "12px", fontWeight: 700, marginLeft: "6px" }}>
            HatchKit · Buyer Board
          </span>
        </div>

        <div style={{ padding: "16px" }}>
          {/* contact chip */}
          <div style={{ alignItems: "center", background: "#FFF7E6", borderRadius: "10px", display: "flex", gap: "11px", marginBottom: "16px", padding: "11px 13px" }}>
            <span style={{ background: "#2F80ED", borderRadius: "999px", color: "#fff", fontFamily: "var(--font-accent)", fontSize: "14px", fontWeight: 800, height: "36px", lineHeight: "36px", textAlign: "center", width: "36px" }}>
              {firstName[0]?.toUpperCase()}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "14px", fontWeight: 800 }}>{firstName} · Crested gecko</div>
              <div style={{ color: "#52606D", fontSize: "12px" }}>Interested in Mango · $225</div>
            </div>
            <span style={{ background: "rgba(0,184,169,0.14)", borderRadius: "999px", color: "#008C82", fontFamily: "var(--font-accent)", fontSize: "11px", fontWeight: 800, padding: "4px 9px" }}>
              {activeStage || "New lead"}
            </span>
          </div>

          {/* deal board stepper */}
          <div style={{ display: "grid", gap: "2px" }}>
            {BOARD_STAGES.map((stage, i) => {
              const done = i < activeIdx;
              const active = i === activeIdx;
              return (
                <div
                  key={stage}
                  style={{
                    alignItems: "center",
                    background: active ? "rgba(47,128,237,0.1)" : "transparent",
                    borderRadius: "8px",
                    display: "flex",
                    gap: "11px",
                    padding: "8px 10px",
                    transition: "background 0.3s",
                  }}
                >
                  <span
                    style={{
                      alignItems: "center",
                      background: done ? "#00B8A9" : active ? "#2F80ED" : "rgba(16,42,67,0.1)",
                      borderRadius: "999px",
                      color: "#fff",
                      display: "inline-flex",
                      fontSize: "11px",
                      fontWeight: 800,
                      height: "20px",
                      justifyContent: "center",
                      width: "20px",
                    }}
                  >
                    {done ? "✓" : active ? "●" : ""}
                  </span>
                  <span
                    style={{
                      color: active ? "#102A43" : done ? "#52606D" : "#A4B0BE",
                      fontFamily: "var(--font-subheading)",
                      fontSize: "13.5px",
                      fontWeight: active ? 800 : 600,
                    }}
                  >
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>

          {/* happening now */}
          {note && (
            <div style={{ borderTop: "1px solid rgba(16,42,67,0.08)", marginTop: "12px", paddingTop: "12px" }}>
              <span style={{ color: "#2F80ED", fontFamily: "var(--font-accent)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.03em", textTransform: "uppercase" }}>
                Just happened — on its own
              </span>
              <p style={{ color: "#102A43", fontSize: "13.5px", lineHeight: 1.55, margin: "6px 0 0" }}>{note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
