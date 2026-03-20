import Image from "next/image";

export default function InfographicSection() {
  return (
    <section
      style={{
        background: "#F5F5F0",
        padding: "72px 24px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#1B5E20",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          The full picture
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            color: "#111111",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          Everything HatchKit does for you
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "#555",
            textAlign: "center",
            marginBottom: "40px",
            lineHeight: 1.6,
          }}
        >
          From the first scan at your table to a repeat customer — fully automated.
        </p>

        {/* Infographic image */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 16px 60px rgba(0,0,0,0.12)",
          }}
        >
          <Image
            src="/hatchkit-infographic.png"
            alt="HatchKit — full platform overview infographic showing the journey from show lead capture to automated follow-up, smart shipping, and repeat customers"
            width={800}
            height={1600}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
