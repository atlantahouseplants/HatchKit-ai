'use client';

type Msg = { channel: "email" | "text"; realDay: number };

const MAX_DAY = 14;

export default function ScheduleRibbon({ messages }: { messages: Msg[] }) {
  return (
    <div className="hk-card" style={{ padding: "20px 22px" }}>
      <div style={{ marginBottom: "18px" }}>
        <span className="hk-kicker" style={{ margin: 0 }}>The real schedule — not spam</span>
        <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6, margin: "8px 0 0" }}>
          You&apos;re seeing this in seconds, but here&apos;s when your buyer{" "}
          <strong style={{ color: "#102A43" }}>actually</strong> gets each message — naturally spread
          across about two weeks. No blasts. No spam.
        </p>
      </div>

      <div style={{ position: "relative", height: "84px", marginTop: "8px" }}>
        {/* track line */}
        <div style={{ background: "rgba(16,42,67,0.12)", borderRadius: "999px", height: "3px", left: 0, position: "absolute", right: 0, top: "30px" }} />

        {/* dots */}
        {messages.map((m, i) => {
          const stack = messages.slice(0, i).filter((x) => x.realDay === m.realDay).length;
          const left = `${4 + (m.realDay / MAX_DAY) * 92}%`;
          const color = m.channel === "email" ? "#00B8A9" : "#2F80ED";
          return (
            <div
              key={i}
              title={`${m.channel === "email" ? "Email" : "Text"} · Day ${m.realDay}`}
              style={{
                animation: "hkPop 0.35s ease",
                background: color,
                border: "2px solid #fff",
                borderRadius: "999px",
                boxShadow: "0 2px 6px rgba(16,42,67,0.18)",
                height: "14px",
                left,
                position: "absolute",
                top: `${30 - stack * 16}px`,
                transform: "translate(-50%, -50%)",
                width: "14px",
              }}
            />
          );
        })}

        {/* day labels */}
        {[0, 7, 14].map((d) => (
          <div
            key={d}
            style={{
              color: "#8795A1",
              fontFamily: "var(--font-accent)",
              fontSize: "12px",
              fontWeight: 700,
              left: `${4 + (d / MAX_DAY) * 92}%`,
              position: "absolute",
              top: "46px",
              transform: "translateX(-50%)",
            }}
          >
            Day {d}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "18px", marginTop: "6px" }}>
        <Legend color="#00B8A9" label="Email" />
        <Legend color="#2F80ED" label="Text" />
      </div>

      <style>{`@keyframes hkPop { from { opacity: 0; transform: translate(-50%,-50%) scale(0.4); } to { opacity: 1; transform: translate(-50%,-50%) scale(1); } }`}</style>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ alignItems: "center", color: "#52606D", display: "inline-flex", fontSize: "12px", fontWeight: 700, gap: "6px" }}>
      <span style={{ background: color, borderRadius: "999px", height: "10px", width: "10px" }} />
      {label}
    </span>
  );
}
