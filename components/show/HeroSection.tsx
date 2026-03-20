'use client';

import ScrollReveal from "@/components/ScrollReveal";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "#111111",
        padding: "100px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="scale-pattern"
    >
      {/* Green radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(27,94,32,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Amber accent glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(255,111,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <ScrollReveal stagger>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Pill badge */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,111,0,0.12)",
              color: "#FF6F00",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "24px",
              border: "1px solid rgba(255,111,0,0.2)",
            }}
          >
            Made by a breeder. For breeders.
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.08,
            }}
          >
            People walked by your table today. You&apos;ll never hear from them again.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
          >
            Unless you have a way to stay in touch. HatchKit gives you one — it
            texts them for you, follows up automatically, and helps you actually
            sell to the people who showed interest. You set it up once. It runs
            while you focus on your animals.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            style={{
              padding: "16px 36px",
              borderRadius: "10px",
              background: "#FF6F00",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              minHeight: "52px",
            }}
            className="pulse-accent"
          >
            I Want In
          </button>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              marginTop: "16px",
            }}
          >
            Free to sign up. We set everything up for you.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
