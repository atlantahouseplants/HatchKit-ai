import ScrollReveal from "@/components/ScrollReveal";

const features = [
  "🎪 A sign for your table that captures everyone who's interested",
  "📩 Automatic texts to every person who scans it",
  "🗂️ One screen for every message — Instagram, MorphMarket, texts, all of it",
  "🤖 AI that writes your replies (you approve before they send)",
  "📦 Shipping that checks the weather for you",
  "🌿 Your own website with your animals, your brand, your story",
  "📅 Automatic follow-ups — day 1, day 3, day 7, day 14",
  "📊 See which shows and posts actually make you money",
  "🦎 Animal profiles so you never forget who asked about what",
  "💬 Auto-replies to Instagram comments (turns comments into customers)",
];

export default function FeaturesList() {
  return (
    <section style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#1A1A1A",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Everything you need to actually run your business.
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div
            className="show-features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#F5F5F0",
                  borderRadius: "12px",
                  padding: "14px 16px",
                }}
              >
                <span style={{ fontSize: "15px", flexShrink: 0 }}>
                  {feature.slice(0, 2)}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#1A1A1A",
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {feature.slice(3)}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#555",
              marginTop: "32px",
              lineHeight: 1.6,
            }}
          >
            Plans start at{" "}
            <strong style={{ color: "#1A1A1A" }}>$149/month</strong>.{" "}
            <strong style={{ color: "#FF6F00" }}>
              We set everything up for you
            </strong>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
