import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Built by Breeders",
  description:
    "HatchKit was built because we lived the problem. Learn about our origin story, mission, and the team behind the platform.",
};

const team = [
  {
    name: "Marcus Webb",
    role: "Co-Founder & CEO",
    bio: "Ball python breeder of 12 years. Built his first lead capture tool out of frustration after losing $4,000 in show leads in a single weekend.",
    species: "Ball Pythons, Colubrids",
    initials: "MW",
  },
  {
    name: "Elena Vasquez",
    role: "Co-Founder & CTO",
    bio: "Software engineer who got into crested geckos during COVID. Saw Marcus's spreadsheet nightmare and said 'I can fix that.'",
    species: "Crested Geckos, Leopard Geckos",
    initials: "EV",
  },
  {
    name: "James Thornton",
    role: "Head of Breeder Success",
    bio: "Former reptile show promoter with 200+ shows under his belt. Knows every pain point from both sides of the table.",
    species: "Chameleons, Day Geckos",
    initials: "JT",
  },
  {
    name: "Priya Nair",
    role: "AI & Shipping Systems Lead",
    bio: "Machine learning engineer obsessed with logistics optimization. Built the species-tolerance database from scratch with real field data.",
    species: "Tree monitors, Tegus",
    initials: "PN",
  },
];

const values = [
  {
    icon: "🦎",
    title: "Breeders First",
    desc: "Every feature we build starts with a conversation with actual breeders. We don't ship anything that doesn't solve a real problem.",
  },
  {
    icon: "🤖",
    title: "AI That Actually Helps",
    desc: "We use AI where it genuinely makes breeders' lives easier — not as a buzzword. The shipping agent saves real time and real animals.",
  },
  {
    icon: "🌱",
    title: "Community-Grown",
    desc: "We're active in the reptile community — at shows, in Facebook groups, on MorphMarket. We're not outsiders building for a market we don't understand.",
  },
  {
    icon: "📊",
    title: "Data-Driven Breeding",
    desc: "The best breeders make decisions based on data. We give you the tools to understand your business as well as you understand your animals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#111111",
          padding: "140px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="scale-pattern"
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(27,94,32,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            We Built HatchKit Because We Lived the Problem
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.65",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We&apos;re breeders who got tired of losing leads, fumbling spreadsheets,
            and hoping animals survived shipping. So we built something better.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal>
            <div
              style={{
                display: "inline-block",
                background: "rgba(27,94,32,0.07)",
                color: "#1B5E20",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "100px",
                marginBottom: "24px",
              }}
            >
              Origin Story
            </div>

            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#1A1A1A",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              One lost show. One bad shipment. One really angry customer.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                "It was the Tinley Park show in 2019. Marcus had been breeding ball pythons for a decade. He set up his table, met hundreds of people, handed out cards, and sold 18 animals. He went home feeling good.",
                "Two weeks later, he followed up. Out of 200+ contacts he'd met, he had 40 email addresses — and only 12 responded to his follow-up. He'd lost over 150 potential customers in a single weekend.",
                "That same month, he shipped a ball python to Dallas during a heat wave. He'd checked the weather, thought it would be fine. The animal made it — barely — and the customer never bought from him again.",
                "Marcus started building a spreadsheet. Then another. Then he called his friend Elena, who was knee-deep in crested geckos and equally frustrated. She started coding.",
                "Two years, hundreds of breeder interviews, and one real shipping AI later — HatchKit was born. We've been refining it ever since, with our own animals and yours.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.75",
                    color: i === 0 ? "#333" : "#555",
                    fontStyle: i === 4 ? "italic" : "normal",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION */}
      <section
        style={{
          background: "#1B5E20",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="scale-pattern"
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
              }}
            >
              Our Mission
            </p>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              Every breeder deserves the same growth tools that big e-commerce brands have.
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: "1.7",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              The reptile community is full of passionate, knowledgeable people running
              incredible breeding programs. They shouldn&apos;t be held back by tools built for
              some other industry. HatchKit is built specifically for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "80px 24px", background: "#F5F5F0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#1A1A1A",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              What We Believe
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {values.map((v, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    padding: "28px 24px",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "14px" }}>{v.icon}</div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#1A1A1A",
                    marginBottom: "10px",
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.65", color: "#666" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#1A1A1A",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              The Team (We Keep Animals Too)
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              {team.map((member, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#1A1A1A",
                    marginBottom: "4px",
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1B5E20",
                    marginBottom: "12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "#666",
                    marginBottom: "12px",
                  }}>
                    {member.bio}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    color: "#FF6F00",
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    🦎 {member.species}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#111111", padding: "80px 24px", textAlign: "center" }} className="scale-pattern">
        <ScrollReveal>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#fff",
            marginBottom: "16px",
          }}>
            Come Meet Us at a Show
          </h2>
          <p style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "32px",
            maxWidth: "440px",
            margin: "0 auto 32px",
            lineHeight: "1.65",
          }}>
            Or book a call. Either way, we&apos;d love to learn about your breeding program
            and show you what HatchKit can do for it.
          </p>
          <Link
            href="/demo/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 36px",
              borderRadius: "10px",
              background: "#FF6F00",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(255,111,0,0.35)",
            }}
          >
            Book a Free Demo →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
