'use client';

type RailStep = { readonly id: string; readonly label: string };

// The prospect's map: where they are in the buyer journey they're playing.
export default function JourneyRail({
  steps,
  currentIndex,
}: {
  steps: readonly RailStep[];
  currentIndex: number;
}) {
  return (
    <div style={{ margin: "0 auto 26px", maxWidth: "760px" }}>
      <div style={{ position: "relative" }}>
        {/* track */}
        <div
          style={{
            background: "rgba(16,42,67,0.1)",
            borderRadius: "999px",
            height: "3px",
            left: `${100 / steps.length / 2}%`,
            position: "absolute",
            right: `${100 / steps.length / 2}%`,
            top: "13px",
          }}
        />
        {/* progress fill */}
        <div
          style={{
            background: "#00B8A9",
            borderRadius: "999px",
            height: "3px",
            left: `${100 / steps.length / 2}%`,
            position: "absolute",
            top: "13px",
            transition: "width 0.5s ease",
            width: `${(Math.max(currentIndex, 0) / (steps.length - 1)) * (100 - 100 / steps.length)}%`,
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, position: "relative" }}>
          {steps.map((s, i) => {
            const done = i < currentIndex;
            const active = i === currentIndex;
            return (
              <div key={s.id} style={{ textAlign: "center" }}>
                <span
                  style={{
                    alignItems: "center",
                    background: done ? "#00B8A9" : active ? "#2F80ED" : "#fff",
                    border: done || active ? "2px solid transparent" : "2px solid rgba(16,42,67,0.18)",
                    borderRadius: "999px",
                    boxShadow: active ? "0 0 0 5px rgba(47,128,237,0.18)" : "none",
                    color: "#fff",
                    display: "inline-flex",
                    fontFamily: "var(--font-accent)",
                    fontSize: "12px",
                    fontWeight: 800,
                    height: "28px",
                    justifyContent: "center",
                    transition: "background 0.3s, box-shadow 0.3s",
                    width: "28px",
                  }}
                >
                  {done ? "✓" : active ? "●" : ""}
                </span>
                <div
                  className="hk-rail-label"
                  style={{
                    color: active ? "#102A43" : done ? "#52606D" : "#A4B0BE",
                    fontFamily: "var(--font-subheading)",
                    fontSize: "12px",
                    fontWeight: active ? 800 : 600,
                    lineHeight: 1.3,
                    marginTop: "7px",
                    padding: "0 2px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hk-rail-label { font-size: 9.5px !important; }
        }
      `}</style>
    </div>
  );
}
