import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import ShippingFlowDiagram from "@/components/ShippingFlowDiagram";
import VideoSection from "@/components/show/VideoSection";
import InfographicSection from "@/components/show/InfographicSection";
import {
  ShowLeadIcon,
  AIShippingIcon,
  UnifiedInboxIcon,
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "HatchKit — The All-in-One Tool for Reptile Breeders",
  description:
    "Stop losing show leads. HatchKit handles shipping, follow-up, your inbox, social media, and more — so you can focus on your animals. Book a free demo.",
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$149",
    setupFee: "$499",
    subtitle: "Stop Losing Leads",
    description: "For breeders doing a few shows a year who are tired of watching buyers disappear.",
    features: [
      { text: "Show lead capture with QR codes", included: true },
      { text: "Basic inbox (email + text)", included: true },
      { text: "5 automatic follow-up sequences", included: true },
      { text: "Email support", included: true },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$249",
    setupFee: "$799",
    subtitle: "Let It Run Itself",
    description: "HatchKit handles shipping, social media, and your inbox while you focus on your animals.",
    popular: true,
    features: [
      { text: "Smart Shipping with weather checks", included: true },
      { text: "All your messages in one inbox + AI draft replies", included: true },
      { text: "Auto social posts (3/week)", included: true },
      { text: "Your own website + deal tracker", included: true },
    ],
    ctaLabel: "Get Growth",
  },
  {
    name: "Pro",
    price: "$399",
    setupFee: "$1,199",
    subtitle: "Go Full-Time",
    description: "Everything in Growth plus full number tracking, your own HatchKit helper, and AI that runs your inbox and posts for you daily.",
    features: [
      { text: "See all your numbers in one place", included: true },
      { text: "AI handles your inbox + posts go live daily", included: true },
      { text: "Your own HatchKit helper", included: true },
      { text: "Custom setup + extras", included: true },
    ],
    ctaLabel: "Go Pro",
  },
];

const faqItems = [
  {
    question: "Do I need to be technical?",
    answer:
      "Nope. We set everything up for you. If you can use Instagram, you can use HatchKit. Our team handles all the technical stuff — you just show up to your next show.",
  },
  {
    question: "Will this work for snakes, feeders, tarantulas, or frogs?",
    answer:
      "Yes. HatchKit works for any live animal or feeder business. Smart Shipping knows the safe temperature ranges for hundreds of species — and we can add more. We also work with feeder insect and rodent sellers. If you ship live animals or sell at shows, HatchKit is built for you.",
  },
  {
    question: "What about MorphMarket? Does this replace it?",
    answer:
      "No. MorphMarket is where buyers find you. HatchKit is what happens before and after — follow-up, shipping, staying in touch with buyers, and keeping track of your deals. MorphMarket sends you leads, HatchKit helps you close and keep them.",
  },
  {
    question: "How does Smart Shipping work?",
    answer:
      "It checks the weather along your shipping route, looks up the safe temperature range for your species, and decides whether to ship or hold. If it holds, it texts your buyer with a new ship date — you don\u2019t have to do a thing.",
  },
  {
    question: "What if I only do shows and local pickup?",
    answer:
      "HatchKit still helps a ton with lead capture, automatic follow-up, and social media. Smart Shipping is just one of ten tools — and you only pay for what you use.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month after your initial setup. No long-term contracts, no cancellation fees. We keep you because you love the results, not because you\u2019re locked in.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most breeders are fully up and running within 5\u20137 business days. We handle all the technical stuff, build your lead capture forms, and walk you through everything on a single setup call.",
  },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 10px;
          background: #FF6F00;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(255,111,0,0.35);
          transition: all 0.15s ease;
        }
        .hero-btn-primary:hover {
          background: #FFA000;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,111,0,0.45);
        }
        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 16px 28px;
          border-radius: 10px;
          border: 2px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.85);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .hero-btn-outline:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
        }
        .cta-link-green {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #1B5E20;
          text-decoration: none;
          border-bottom: 2px solid rgba(27,94,32,0.25);
          padding-bottom: 2px;
          transition: border-color 0.15s ease;
        }
        .cta-link-green:hover {
          border-color: #1B5E20;
        }
        .final-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 40px;
          border-radius: 12px;
          background: #FF6F00;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 17px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(255,111,0,0.4);
          transition: all 0.15s ease;
        }
        .final-cta-btn:hover {
          background: #FFA000;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,111,0,0.5);
        }
        .persona-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .persona-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .before-after-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
        }
        .before-after-item + .before-after-item {
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .hero-feature-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px;
          padding: 36px 32px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        @media (max-width: 768px) {
          .hero-feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ===================== HERO ===================== */}
      <section
        style={{
          background: "#111111",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
        className="scale-pattern"
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(27,94,32,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "820px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            animation: "fadeInUp 0.7s ease both",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,111,0,0.12)",
              border: "1px solid rgba(255,111,0,0.25)",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "28px",
            }}
          >
            <span style={{ fontSize: "18px" }}>🦎</span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                color: "#FF6F00",
                letterSpacing: "0.04em",
              }}
            >
              Built for Reptile Breeders
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Stop Losing Sales at{" "}
            <span style={{ color: "#FF6F00" }}>Every Reptile Show</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "620px",
              margin: "0 auto 40px",
            }}
          >
            You got into this because you love reptiles. HatchKit handles the business
            side — lead capture, follow-up, shipping, and marketing — so you can
            get back to what you actually care about.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/demo/" className="hero-btn-primary">
              Book a Free Demo →
            </Link>
            <Link href="/show/" className="hero-btn-outline">
              Join the Waitlist →
            </Link>
          </div>

          <div
            style={{
              marginTop: "56px",
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "5+ Apps", label: "All in One Inbox" },
              { value: "60 Seconds", label: "From Show Scan to Follow-Up" },
              { value: "10 Tools", label: "All Working Together" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "28px",
                    color: "#fff",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VIDEO ===================== */}
      <VideoSection />

      {/* ===================== PAIN POINTS + EMOTIONAL HOOK ===================== */}
      <section style={{ background: "#F5F5F0", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "14px",
                }}
              >
                Sound Familiar?
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "520px", margin: "0 auto" }}>
                You started breeding because you love reptiles. Somewhere along the way
                it became a second job managing DMs, shipping logistics, and spreadsheets.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                { icon: "😤", text: "You meet 200 people at a show and sell to maybe 10. The other 190 disappear." },
                { icon: "📱", text: "You're managing leads across MorphMarket DMs, Instagram, text messages, and email — and dropping half of them." },
                { icon: "🌡️", text: "You check the weather in 3 cities, do mental math on heat packs, and hope for the best when you ship." },
                { icon: "🌐", text: "You know you need a website and email list but you don't have time to figure it out." },
              ].map((point, i) => (
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
                  <div style={{ fontSize: "32px", marginBottom: "14px" }}>{point.icon}</div>
                  <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#333" }}>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== BEFORE / AFTER ===================== */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "14px",
                }}
              >
                What Changes When You Have HatchKit
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="before-after-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {/* BEFORE */}
              <div style={{
                background: "#FFF8F5",
                border: "1px solid rgba(230,81,0,0.12)",
                borderRadius: "20px",
                padding: "32px 28px",
              }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#E65100",
                  marginBottom: "24px",
                }}>
                  Without HatchKit
                </div>

                {[
                  { time: "Saturday night", text: "Leave the show with 40 phone numbers scribbled on paper. Promise yourself you'll text them tomorrow." },
                  { time: "Monday", text: "Check MorphMarket, Instagram, texts, email, Facebook. 45 minutes gone. Half the messages are 2 days old." },
                  { time: "Wednesday", text: "Spend 30 minutes checking weather for a shipment to Phoenix. Google says 97°F. Do you ship? You're not sure." },
                  { time: "Friday", text: "Realize you never texted back the guy from the show. He bought from someone else." },
                ].map((item, i) => (
                  <div key={i} className="before-after-item">
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      color: "#E65100",
                      minWidth: "90px",
                      paddingTop: "2px",
                    }}>
                      {item.time}
                    </span>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* AFTER */}
              <div style={{
                background: "#F5FFF5",
                border: "1px solid rgba(27,94,32,0.15)",
                borderRadius: "20px",
                padding: "32px 28px",
              }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#1B5E20",
                  marginBottom: "24px",
                }}>
                  With HatchKit
                </div>

                {[
                  { time: "Saturday night", text: "Buyers scan your QR code at the table. By the time you're loading your car, they've already gotten a thank-you text and care sheet." },
                  { time: "Monday", text: "Open one inbox. Three AI-drafted responses are waiting. Tap approve, approve, edit-and-send. Done in 2 minutes. Coffee's still hot." },
                  { time: "Wednesday", text: "HatchKit already held the Phoenix shipment automatically. Your customer got a text: \"We'll ship Thursday when it drops to 84°F.\" They thanked you for being professional." },
                  { time: "Friday", text: "Check your numbers. 12 show leads turned into sales this week. HatchKit posted a hatchling spotlight on your Instagram that got 200 likes." },
                ].map((item, i) => (
                  <div key={i} className="before-after-item">
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      color: "#1B5E20",
                      minWidth: "90px",
                      paddingTop: "2px",
                    }}>
                      {item.time}
                    </span>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 768px) {
                .before-after-grid { grid-template-columns: 1fr !important; }
                .before-after-item { flex-direction: column; gap: 4px; }
              }
            `}</style>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== 3 HERO FEATURES ===================== */}
      <section style={{ padding: "96px 24px", background: "#F5F5F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                  marginBottom: "16px",
                }}
              >
                What You Get
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "14px",
                }}
              >
                Three Features That Change Everything
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "500px", margin: "0 auto" }}>
                HatchKit does 8 things for you, but these three are the ones breeders
                say they can&apos;t live without.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* FEATURE 1: Show Lead Capture */}
            <ScrollReveal>
              <div className="hero-feature-card">
                <div className="hero-feature-grid" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                }}>
                  <div>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(27,94,32,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#1B5E20", marginBottom: "16px",
                    }}>
                      <ShowLeadIcon size={24} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#1A1A1A",
                      marginBottom: "12px",
                    }}>
                      Show Lead Capture
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555", marginBottom: "20px" }}>
                      Buyers scan your QR code at the table. HatchKit captures their info, sends an instant
                      thank-you text, and starts your follow-up sequence — all before they reach the next booth.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {[
                        "Follow-up starts within 60 seconds of scan",
                        "Tag leads by species interest and budget",
                        "Real-time lead count during the show",
                      ].map((bullet, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            background: "#1B5E20", flexShrink: 0,
                          }} />
                          <span style={{ fontSize: "14px", color: "#333" }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lead capture mockup */}
                  <div style={{
                    background: "#111",
                    borderRadius: "16px",
                    padding: "28px",
                    color: "#fff",
                  }}>
                    <div style={{
                      textAlign: "center",
                      marginBottom: "20px",
                    }}>
                      <div style={{
                        display: "inline-block",
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "16px",
                        marginBottom: "12px",
                      }}>
                        {/* Simple QR code visual */}
                        <div style={{
                          width: "80px", height: "80px",
                          display: "grid",
                          gridTemplateColumns: "repeat(5, 1fr)",
                          gridTemplateRows: "repeat(5, 1fr)",
                          gap: "2px",
                        }}>
                          {[1,1,1,0,1, 1,0,1,1,0, 1,1,0,0,1, 0,1,1,0,1, 1,0,1,1,1].map((filled, i) => (
                            <div key={i} style={{
                              background: filled ? "#111" : "#eee",
                              borderRadius: "2px",
                            }} />
                          ))}
                        </div>
                      </div>
                      <p style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}>
                        Buyer scans at your table
                      </p>
                    </div>
                    <div style={{
                      background: "rgba(27,94,32,0.2)",
                      border: "1px solid rgba(27,200,32,0.3)",
                      borderRadius: "12px",
                      padding: "16px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <div style={{
                          width: "8px", height: "8px", borderRadius: "50%",
                          background: "#4CAF50",
                        }} />
                        <span style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700, fontSize: "12px",
                          color: "#4CAF50",
                        }}>
                          New Lead Captured
                        </span>
                        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginLeft: "auto" }}>
                          Just now
                        </span>
                      </div>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", marginBottom: "6px" }}>
                        Jake Henderson — Interested in Mack Snow
                      </p>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
                        ✓ Thank-you text sent &nbsp;·&nbsp; ✓ Follow-up sequence started
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* FEATURE 2: AI Shipping Agent */}
            <ScrollReveal>
              <div style={{
                background: "#1B5E20",
                borderRadius: "20px",
                padding: "48px 32px",
                position: "relative",
                overflow: "hidden",
              }} className="scale-pattern">
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "600px", height: "400px",
                  background: "radial-gradient(ellipse, rgba(255,111,0,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    marginBottom: "12px",
                  }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(255,111,0,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#FF6F00",
                    }}>
                      <AIShippingIcon size={24} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#fff",
                    }}>
                      Smart Shipping
                    </h3>
                  </div>
                  <p style={{
                    fontSize: "16px", lineHeight: "1.7",
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: "560px",
                    marginBottom: "32px",
                  }}>
                    It checks the weather along the route, knows the safe temps for your species, decides
                    whether to ship or hold, and texts your buyer — all on its own. You never check a forecast again.
                  </p>
                  <ShippingFlowDiagram />
                </div>
              </div>
            </ScrollReveal>

            {/* FEATURE 3: Unified Inbox */}
            <ScrollReveal>
              <div className="hero-feature-card">
                <div className="hero-feature-grid" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                }}>
                  {/* Inbox mockup */}
                  <div style={{
                    background: "#FAFAFA",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      marginBottom: "16px", paddingBottom: "12px",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                    }}>
                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700, fontSize: "13px", color: "#1A1A1A",
                      }}>
                        One Inbox
                      </span>
                      <span style={{
                        background: "#FF6F00", color: "#fff",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700, fontSize: "11px",
                        padding: "3px 8px", borderRadius: "100px",
                      }}>
                        3 new
                      </span>
                    </div>
                    {[
                      { platform: "MorphMarket", color: "#E65100", msg: "Is the Mack Snow still available?", time: "2m" },
                      { platform: "Instagram", color: "#C13584", msg: "Saw your post — any Mack Snows left?", time: "1h" },
                      { platform: "SMS", color: "#2196F3", msg: "Thanks for chatting at NARBC!", time: "3h" },
                      { platform: "AI Draft", color: "#1B5E20", msg: "Yes! She's available at $185. Want photos?", time: "Auto" },
                    ].map((m, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "10px 12px", marginBottom: "4px",
                        borderRadius: "10px",
                        background: i === 3 ? "rgba(27,94,32,0.06)" : "transparent",
                        border: i === 3 ? "1px solid rgba(27,94,32,0.12)" : "1px solid transparent",
                      }}>
                        <div style={{
                          width: "8px", height: "8px", borderRadius: "50%",
                          background: m.color, flexShrink: 0,
                        }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 700, fontSize: "11px", color: m.color,
                            }}>{m.platform}</span>
                            <span style={{ fontSize: "10px", color: "#bbb" }}>{m.time}</span>
                          </div>
                          <p style={{
                            fontSize: "13px", color: "#555",
                            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          }}>{m.msg}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(255,111,0,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#FF6F00", marginBottom: "16px",
                    }}>
                      <UnifiedInboxIcon size={24} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#1A1A1A",
                      marginBottom: "12px",
                    }}>
                      One Inbox
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555", marginBottom: "20px" }}>
                      MorphMarket messages, Instagram DMs, Facebook messages, texts, and emails — all
                      on one screen. AI writes draft replies for you. A buyer messages at 10pm, HatchKit
                      answers right away. By morning, you\u2019ve got a buyer ready to go.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {[
                        "Reply time drops from 6 hours to under 2 minutes",
                        "AI writes draft replies — you approve or edit before sending",
                        "New messages automatically save as new contacts",
                      ].map((bullet, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            background: "#FF6F00", flexShrink: 0,
                          }} />
                          <span style={{ fontSize: "14px", color: "#333" }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/features/" className="cta-link-green">
              See all 10 tools in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                From the Community
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}>
              <TestimonialCard
                quote="I used to leave every show with a pocket full of phone numbers I'd never call. After 3 months on HatchKit, I'm converting 35% of my show leads into sales. Last month I sold 4 geckos to people I met at NARBC Arlington — all through the automated follow-up. I didn't send a single manual text."
                name="Sarah M."
                business="SunScale Geckos"
                subtitle="Leopard Gecko Breeder, Raleigh NC"
              />
              <TestimonialCard
                quote="Smart Shipping alone is worth the subscription. I used to spend 30 minutes checking weather before every shipment. Now HatchKit handles it and texts my buyers for me. I had a shipment to Phoenix held automatically last week because of a heat wave — the buyer actually thanked me for being so professional."
                name="Marcus R."
                business="Desert Edge Reptiles"
                subtitle="Ball Python Breeder, Atlanta GA"
              />
              <TestimonialCard
                quote="I'm not a tech person at all. I was nervous about the setup but the HatchKit team had everything running in 4 days. Now my Instagram posts basically write themselves and I haven't missed a lead since."
                name="Jen T."
                business="Emerald Scales"
                subtitle="Crested Gecko Breeder, Nashville TN"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section id="how-it-works" style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                  marginBottom: "16px",
                }}
              >
                Getting Started
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                }}
              >
                How It Works
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "40px",
              }}
            >
              <StepCard
                number={1}
                title="We set everything up for you"
                description="Our team builds your lead capture forms, sets up your deal tracker, and turns on your automatic follow-ups — all within 5–7 days."
              />
              <StepCard
                number={2}
                title="You focus on your animals"
                description="Go to shows, breed your animals, do what you love. HatchKit runs in the background capturing leads and following up."
              />
              <StepCard
                number={3}
                title="You sell more reptiles"
                description="Watch more leads turn into sales, more past buyers come back, and your shipping stress disappear."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== PERSONA CARDS ===================== */}
      <section style={{ padding: "96px 24px", background: "#F5F5F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                  marginBottom: "16px",
                }}
              >
                Who It&apos;s For
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                }}
              >
                Built For Breeders Like You
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: "🎪",
                  title: "The Show Vendor",
                  description: "You attend 6\u201312 expos a year and meet hundreds of potential buyers. Your table is packed but your follow-up is nonexistent. HatchKit captures every lead the moment they scan your QR code and follows up automatically \u2014 even while you\u2019re driving home.",
                },
                {
                  icon: "💬",
                  title: "The Online Seller",
                  description: "You sell through MorphMarket and social media but you\u2019re drowning in messages across 5 apps. Buyers ghost you, you forget who wanted what, and your Instagram hasn\u2019t been updated in two weeks. HatchKit puts every conversation in one inbox and keeps your social media going without you lifting a finger.",
                },
                {
                  icon: "📈",
                  title: "The Growing Operation",
                  description: "You\u2019re making real money \u2014 $50K+ a year \u2014 but you\u2019re doing everything by hand. Shipping eats your mornings, staying in touch with buyers is an afterthought, and you know you\u2019re leaving money on the table. HatchKit handles the business stuff so you can focus on breeding.",
                },
              ].map((persona, i) => (
                <div key={i} className="persona-card">
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "16px",
                    background: "rgba(27,94,32,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "28px", margin: "0 auto 20px",
                  }}>
                    {persona.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "18px", color: "#1A1A1A",
                    marginBottom: "12px",
                  }}>
                    {persona.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#555", textAlign: "left" }}>
                    {persona.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== INFOGRAPHIC ===================== */}
      <InfographicSection />

      {/* ===================== PRICING (SIMPLIFIED) ===================== */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                  marginBottom: "16px",
                }}
              >
                What It Costs
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "14px",
                }}
              >
                Pick Your Plan
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "460px", margin: "0 auto" }}>
                Month-to-month after setup. Cancel anytime. Most breeders make their
                money back within 60 days.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {pricingPlans.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </ScrollReveal>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/pricing/" className="cta-link-green">
              See full pricing comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section style={{ padding: "96px 24px", background: "#F5F5F0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "14px",
                }}
              >
                Questions? We&apos;ve Got Answers.
              </h2>
              <p style={{ fontSize: "17px", color: "#666" }}>
                The most common things breeders ask us before signing up.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section
        style={{
          background: "#111111",
          padding: "96px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="scale-pattern"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255,111,0,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Ready to Stop{" "}
              <span style={{ color: "#FF6F00" }}>Losing Sales?</span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "36px",
                lineHeight: "1.65",
              }}
            >
              Free, no-pressure 15-minute call. We&apos;ll show you exactly how HatchKit
              would work for your specific species and show schedule.
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <Link href="/demo/" className="final-cta-btn">
                Book My Demo →
              </Link>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                Built by breeders. Trusted by reptile sellers across the Southeast.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
