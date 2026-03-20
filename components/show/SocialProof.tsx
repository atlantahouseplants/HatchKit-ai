import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";

const smallQuotes = [
  {
    quote:
      "I had a shipment to Phoenix that HatchKit held automatically because of a heat wave. My buyer actually thanked me for being careful. That used to be 45 minutes of me checking weather apps.",
    name: "Marcus R.",
    business: "Desert Edge Reptiles",
  },
  {
    quote:
      "I'm not a tech person at all. They set everything up in 4 days. I just open the app and it works.",
    name: "Jen T.",
    business: "Emerald Scales",
  },
];

export default function SocialProof() {
  return (
    <section style={{ background: "#F5F5F0", padding: "80px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            Other breeders are already using this.
          </h2>
        </ScrollReveal>

        {/* Featured large testimonial */}
        <ScrollReveal>
          <TestimonialCard
            quote="I used to go home from every show and forget to text half the people I talked to. Now HatchKit does it for me. I sold 4 geckos to people I met at NARBC — and I didn't send a single text myself."
            name="Sarah M."
            business="SunScale Geckos"
            subtitle="Leopard Gecko Breeder · Raleigh, NC"
          />
        </ScrollReveal>

        {/* Two smaller quotes */}
        <ScrollReveal stagger>
          <div
            className="show-proof-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {smallQuotes.map((q, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "3px", marginBottom: "12px" }}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#FF6F00"
                    >
                      <path d="M9 1L11.12 6.26H16.18L12.03 9.74L13.76 15L9 11.77L4.24 15L5.97 9.74L1.82 6.26H6.88L9 1Z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#333",
                    fontStyle: "italic",
                    marginBottom: "14px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#1A1A1A",
                  }}
                >
                  {q.name}{" "}
                  <span style={{ color: "#888", fontWeight: 400 }}>
                    — {q.business}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
