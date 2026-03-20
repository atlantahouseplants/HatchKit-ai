export default function ShowFooter() {
  return (
    <section
      style={{
        background: "#111111",
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "20px",
            color: "#fff",
            marginBottom: "6px",
          }}
        >
          HatchKit
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "24px",
            fontStyle: "italic",
          }}
        >
          Your business, hatched and ready to grow.
        </p>

        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          © 2026 HatchKit. Built by breeders, for breeders.
        </p>
      </div>
    </section>
  );
}
