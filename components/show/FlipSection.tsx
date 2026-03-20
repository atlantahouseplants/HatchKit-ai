import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    emoji: "🎪",
    title: "Capture every interested person at a show.",
    desc: "You put a sign at your table. People scan it with their phone camera. That's it — now you have their name and number. Before you've packed up for the night, they've already gotten a thank-you text from you.",
  },
  {
    emoji: "🌿",
    title: "Get your animals online with your own website.",
    desc: "Your own branded website where buyers can see your available animals, learn about your morphs, and contact you directly. No building it yourself — we set it up for you.",
  },
  {
    emoji: "📱",
    title: "Automatic social media posts from your brand.",
    desc: "HatchKit creates posts in your voice and posts them to your accounts. Animal spotlights, care tips, behind-the-scenes content — all written like you actually wrote it. You just approve and it goes live.",
  },
  {
    emoji: "📩",
    title: "Automatic follow-ups, emails, and reminders.",
    desc: "After someone shows interest, HatchKit texts and emails them for you — day 1, day 3, day 7, day 14. Thank-you messages, available animals, care guides. You don't write any of it.",
  },
  {
    emoji: "🗂️",
    title: "Every message in one place. AI writes your replies.",
    desc: "Instagram DMs, MorphMarket messages, texts, emails — all on one screen. HatchKit drafts a reply for each one. You read it, tap send, done. No more switching between 5 apps.",
  },
  {
    emoji: "📦",
    title: "Shipping that checks the weather for you.",
    desc: "HatchKit looks at the forecast along the entire route — your city, the carrier hubs, the buyer's city. If it's not safe to ship, it texts your buyer automatically and explains the hold. You never google weather again.",
  },
];

export default function FlipSection() {
  return (
    <section
      style={{
        background: "#111111",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle green glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "30%",
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(27,94,32,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#fff",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            One tool that runs your entire business.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              maxWidth: "520px",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            From the show floor to the shipping label — HatchKit handles it all.
            You set it up once. It runs while you focus on your animals.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div
            className="show-flip-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {sections.map((item, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                  {item.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#fff",
                    marginBottom: "8px",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              marginTop: "32px",
              fontStyle: "italic",
            }}
          >
            And our team sets all of it up for you. You don&apos;t have to be
            technical.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
