'use client';

type Msg = { channel: "email" | "text"; buyer: string; realDay: number };

export default function BuyerPhone({ name, messages }: { name: string; messages: Msg[] }) {
  const firstName = (name || "Your buyer").split(" ")[0] || "Your buyer";
  return (
    <div>
      <div style={{ alignItems: "baseline", display: "flex", gap: "8px", marginBottom: "12px" }}>
        <span className="hk-kicker" style={{ margin: 0 }}>What {firstName} feels</span>
        <span style={{ color: "#8795A1", fontSize: "12px" }}>their phone</span>
      </div>

      <div
        style={{
          background: "#102A43",
          borderRadius: "26px",
          boxShadow: "0 18px 50px rgba(16,42,67,0.22)",
          margin: "0 auto",
          maxWidth: "320px",
          padding: "10px",
        }}
      >
        <div
          style={{
            background: "#F4F7FB",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            height: "440px",
            overflow: "hidden",
          }}
        >
          {/* status bar */}
          <div
            style={{
              alignItems: "center",
              background: "#fff",
              borderBottom: "1px solid rgba(16,42,67,0.08)",
              display: "flex",
              gap: "10px",
              padding: "12px 14px",
            }}
          >
            <span style={{ background: "#00B8A9", borderRadius: "999px", color: "#fff", fontFamily: "var(--font-accent)", fontSize: "13px", fontWeight: 800, height: "30px", lineHeight: "30px", textAlign: "center", width: "30px" }}>S</span>
            <div>
              <div style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "13px", fontWeight: 800 }}>SunScale Geckos</div>
              <div style={{ color: "#8795A1", fontSize: "11px" }}>Sarah · usually replies fast</div>
            </div>
          </div>

          {/* messages */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", overflowY: "auto", padding: "16px 14px" }}>
            {messages.length === 0 && (
              <p style={{ color: "#8795A1", fontSize: "13px", margin: "auto", textAlign: "center" }}>
                Messages from the breeder will land here as you go.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} style={{ animation: "hkFade 0.4s ease" }}>
                <div style={{ alignItems: "center", display: "flex", gap: "6px", marginBottom: "4px" }}>
                  <span
                    style={{
                      background: m.channel === "email" ? "rgba(0,184,169,0.14)" : "rgba(47,128,237,0.14)",
                      borderRadius: "999px",
                      color: m.channel === "email" ? "#008C82" : "#2F80ED",
                      fontFamily: "var(--font-accent)",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.03em",
                      padding: "2px 7px",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.channel === "email" ? "✉ Email" : "💬 Text"}
                  </span>
                  <span style={{ color: "#52606D", fontSize: "11px", fontWeight: 700 }}>Day {m.realDay}</span>
                </div>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(16,42,67,0.07)",
                    borderRadius: "4px 16px 16px 16px",
                    color: "#1F2933",
                    fontSize: "13.5px",
                    lineHeight: 1.5,
                    padding: "11px 13px",
                  }}
                >
                  {m.buyer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes hkFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
