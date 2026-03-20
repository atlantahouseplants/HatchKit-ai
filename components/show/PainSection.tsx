import ScrollReveal from "@/components/ScrollReveal";

export default function PainSection() {
  return (
    <section style={{ background: "#F5F5F0", padding: "72px 24px" }}>
      <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#1A1A1A",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Right now, you&apos;re doing everything yourself.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: "0",
            }}
          >
            You don&apos;t have a website. You don&apos;t have a way to follow up
            with people after a show. You&apos;re answering the same questions
            across Instagram, Facebook, MorphMarket, and texts — and still
            missing people. You&apos;re checking the weather in 3 cities before
            every shipment. And when someone asks about an animal you sold two
            weeks ago, you can&apos;t even remember who else wanted it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p
            style={{
              fontSize: "17px",
              color: "#1A1A1A",
              lineHeight: 1.7,
              marginTop: "20px",
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            HatchKit handles all of it. Here&apos;s how.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
