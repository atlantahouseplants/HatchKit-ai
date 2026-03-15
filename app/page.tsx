import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import ShippingFlowDiagram from "@/components/ShippingFlowDiagram";
import {
  ShowLeadIcon,
  AIShippingIcon,
  MarketingIcon,
  SalesPipelineIcon,
  BrandWebsiteIcon,
  ReportingIcon,
  ContentEngineIcon,
  UnifiedInboxIcon,
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "HatchKit — AI-Powered CRM & Marketing for Reptile Breeders",
  description:
    "Stop losing show leads. HatchKit gives reptile breeders AI-powered shipping, unified inbox, automated marketing, and daily content creation — all in one platform. Book a free demo.",
};

const painPoints = [
  {
    icon: "😤",
    text: "You meet 200 people at a show and sell to maybe 10. The other 190 disappear.",
  },
  {
    icon: "📱",
    text: "You're managing leads across MorphMarket DMs, Instagram, text messages, and email — and dropping half of them.",
  },
  {
    icon: "🌡️",
    text: "You check the weather in 3 cities, do mental math on heat packs, and hope for the best when you ship.",
  },
  {
    icon: "🌐",
    text: "You know you need a website and email list but you don't have time to figure it out.",
  },
];

const modules = [
  {
    icon: <ShowLeadIcon size={22} />,
    title: "Show Lead Capture",
    description:
      "QR codes, instant follow-up, never lose a show lead again. Turn every handshake into a tracked contact.",
    accent: false,
  },
  {
    icon: <AIShippingIcon size={22} />,
    title: "AI Shipping Agent",
    description:
      "Weather monitoring, species-safe decisions, automatic customer updates. No more manual weather checks or angry customers.",
    accent: true,
  },
  {
    icon: <UnifiedInboxIcon size={22} />,
    title: "Unified Inbox",
    description:
      "Every message in one place. MorphMarket inquiries, Instagram DMs, Facebook messages, texts, and emails — all in a single inbox. AI drafts responses so you reply in seconds, not hours.",
    accent: true,
  },
  {
    icon: <MarketingIcon size={22} />,
    title: "Marketing Automation",
    description:
      "Email and SMS drips, new animal alerts, referral programs. Your marketing runs even when you're at the reptile room.",
    accent: false,
  },
  {
    icon: <SalesPipelineIcon size={22} />,
    title: "Sales Pipeline",
    description:
      "Visual deal tracking from first interest to delivery to repeat customer. Professional invoicing with secure payment links — no more Venmo screenshots or Zelle guesswork.",
    accent: false,
  },
  {
    icon: <BrandWebsiteIcon size={22} />,
    title: "Brand & Website",
    description:
      "Your own professional website with available animals gallery. Look like the serious breeder you are.",
    accent: false,
  },
  {
    icon: <ReportingIcon size={22} />,
    title: "Smart Reporting",
    description:
      "Know which shows, posts, and morphs drive your revenue. Make data-driven decisions about your breeding program.",
    accent: false,
  },
  {
    icon: <ContentEngineIcon size={22} />,
    title: "AI Content Engine",
    description:
      "Daily social media posts written in your voice, automatically. Show previews, hatchling spotlights, care tips — scheduled and ready to approve.",
    accent: false,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$149",
    setupFee: "$499",
    subtitle: "Stop Losing Leads",
    description: "For breeders doing a few shows a year who are tired of watching potential customers disappear. Get organized, start following up, and stop leaving money on the table.",
    features: [
      { text: "Show lead capture with QR codes", included: true },
      { text: "Basic unified inbox (email + SMS)", included: true },
      { text: "5 automated follow-up sequences", included: true },
      { text: "Basic CRM with contact management", included: true },
      { text: "Standard email support", included: true },
      { text: "Social media template library (DIY)", included: true },
      { text: "AI Shipping Agent", included: false },
      { text: "Full unified inbox (all platforms)", included: false },
      { text: "AI Content Engine", included: false },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$249",
    setupFee: "$799",
    subtitle: "Automate Your Business",
    description: "For breeders ready to let AI handle the busy work. Automated shipping decisions, content creation, unified inbox, and marketing that runs while you focus on your animals.",
    popular: true,
    features: [
      { text: "Everything in Starter, plus:", included: true },
      { text: "AI Shipping Agent with weather intelligence", included: true },
      { text: "Full unified inbox (all platforms + AI-drafted responses)", included: true },
      { text: "AI Content Engine (3 posts/week, approval queue)", included: true },
      { text: "Professional branded website with animals gallery", included: true },
      { text: "Full sales pipeline with payment tracking", included: true },
      { text: "SMS automation and new animal alerts", included: true },
      { text: "Referral program with automated tracking", included: true },
      { text: "Priority support", included: true },
    ],
    ctaLabel: "Get Growth",
  },
  {
    name: "Pro",
    price: "$399",
    setupFee: "$1,199",
    subtitle: "Scale Like a Brand",
    description: "For serious breeders running a real operation. Advanced analytics, dedicated support, full AI autonomy, and everything you need to build a brand that dominates your market.",
    features: [
      { text: "Everything in Growth, plus:", included: true },
      { text: "Smart Reporting dashboard with full analytics", included: true },
      { text: "AI Content Engine (daily posts, auto-publish)", included: true },
      { text: "Fully autonomous AI inbox (first-response without approval)", included: true },
      { text: "Multi-species and multi-location support", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Quarterly strategy calls", included: true },
      { text: "Custom integrations and API access", included: true },
      { text: "Early access to new features", included: true },
    ],
    ctaLabel: "Go Pro",
  },
];

const faqItems = [
  {
    question: "Do I need to be technical?",
    answer:
      "No. We set everything up for you. If you can use Instagram, you're good. Our onboarding team handles the technical side — you just show up to your next show.",
  },
  {
    question: "Will this work for snakes, feeders, tarantulas, or frogs?",
    answer:
      "Yes. HatchKit works for any live animal or feeder business. The AI Shipping Agent has species-specific temperature tolerances built in for hundreds of species — and we can add more. We also work with feeder insect and rodent sellers. If you ship live animals or sell at shows, HatchKit is built for you.",
  },
  {
    question: "What about MorphMarket? Does this replace it?",
    answer:
      "No. MorphMarket is where buyers find you. HatchKit is what happens before and after. Think of it as your backend CRM, marketing engine, and shipping brain — MorphMarket sends you leads, HatchKit closes and keeps them.",
  },
  {
    question: "How does the AI shipping agent work?",
    answer:
      "It monitors weather forecasts along your shipping route, checks species-specific temperature tolerances, and automatically makes ship/hold decisions. When it holds a shipment, it texts your customer with an updated timeline — no manual work required.",
  },
  {
    question: "What if I only do shows and local pickup?",
    answer:
      "HatchKit still helps massively with lead capture, follow-up automation, and marketing. The shipping agent is just one of eight modules — and you only pay for what you use.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month after your initial setup period. No long-term contracts, no cancellation fees. We keep you because you love the results, not because you're locked in.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most breeders are fully live within 5–7 business days. We handle the technical setup, build your lead capture forms, and train you on the platform in a single onboarding call.",
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
        .inbox-platform-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 13px;
        }
        .comparison-col {
          padding: 28px 24px;
          border-radius: 16px;
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
      `}</style>

      {/* HERO */}
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
            HatchKit is the AI-powered growth engine built specifically for reptile
            breeders. Capture every lead, automate your follow-up, and ship safely
            — all from one platform.
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
            <Link href="#how-it-works" className="hero-btn-outline">
              See How It Works
            </Link>
          </div>

          {/* HERO STATS — Option A */}
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
              { value: "5+ Platforms", label: "Unified Into One Inbox" },
              { value: "60 Seconds", label: "From Show Scan to Follow-Up" },
              { value: "8 Modules", label: "Working Together as One Platform" },
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

      {/* PROBLEM SECTION */}
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
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "480px", margin: "0 auto" }}>
                Every reptile breeder we talk to runs into the same walls.
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
              {painPoints.map((point, i) => (
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

      {/* SOLUTION SECTION — Module Grid */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
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
                The Platform
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
                HatchKit Handles All of It
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "500px", margin: "0 auto" }}>
                Eight powerful modules that work together as one unified platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {modules.map((mod, i) => (
                <FeatureCard
                  key={i}
                  icon={mod.icon}
                  title={mod.title}
                  description={mod.description}
                  accent={mod.accent}
                />
              ))}
            </div>
          </ScrollReveal>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/features/" className="cta-link-green">
              See all features in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* COMPETITIVE DIFFERENTIATION */}
      <section style={{ background: "#F5F5F0", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#1A1A1A",
                  marginBottom: "16px",
                }}
              >
                We Don&apos;t Track Your Animals. We Grow Your Business.
              </h2>
              <p style={{ fontSize: "17px", color: "#555", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
                HatchKit is not a husbandry app. Use your favorite breeding tracker for animal records — ReptiWare, Husbandry Pro, HatchLedger, whatever works for you. HatchKit handles everything else: finding customers, following up, shipping safely, and growing your brand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {/* Left column — Breeding trackers */}
              <div
                className="comparison-col"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  What Breeding Trackers Do
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Track feeding schedules and weight",
                    "Log breeding pairs and clutch data",
                    "Manage genetics and morph calculations",
                    "Record health and shed history",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: "rgba(0,0,0,0.06)", display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{ fontSize: "15px", color: "#555" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column — HatchKit */}
              <div
                className="comparison-col"
                style={{
                  background: "#1B5E20",
                  border: "1px solid #1B5E20",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontSize: "13px",
                    color: "#FFA000",
                    marginBottom: "20px",
                  }}
                >
                  What HatchKit Does
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Capture and convert leads from shows and online",
                    "Automate follow-up so no buyer falls through the cracks",
                    "AI-managed shipping logistics with weather intelligence",
                    "Build your brand with a website, content, and marketing",
                    "Manage every customer conversation in one inbox",
                    "Turn one-time buyers into repeat customers",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: "rgba(255,111,0,0.25)", display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#FF6F00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={{
              textAlign: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "#1A1A1A",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              Think of it this way: your breeding tracker manages your animals. HatchKit manages your business.
            </p>
          </ScrollReveal>

          <style>{`
            @media (max-width: 768px) {
              .comparison-col { grid-column: span 1; }
            }
          `}</style>
        </div>
      </section>

      {/* AI SHIPPING AGENT SPOTLIGHT */}
      <section
        style={{
          background: "#1B5E20",
          padding: "96px 24px",
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
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(255,111,0,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,111,0,0.15)",
                  color: "#FFA000",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  marginBottom: "16px",
                  border: "1px solid rgba(255,111,0,0.2)",
                }}
              >
                Featured Module
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#fff",
                  marginBottom: "14px",
                }}
              >
                Meet the AI Shipping Agent
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "560px",
                  margin: "0 auto",
                  lineHeight: "1.65",
                }}
              >
                It monitors weather, checks species tolerances, makes ship/hold decisions,
                and texts your customer — all automatically.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ShippingFlowDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* UNIFIED INBOX SPOTLIGHT */}
      <section
        style={{
          background: "#FAF8F5",
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,111,0,0.1)",
                  color: "#FF6F00",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  marginBottom: "16px",
                  border: "1px solid rgba(255,111,0,0.15)",
                }}
              >
                Featured Module
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
                One Inbox. Every Platform. Zero Missed Messages.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#555",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.65",
                }}
              >
                Stop checking 5 apps to manage customer conversations. Every message lands in one place.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            {/* Inbox Mockup */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "20px",
                padding: "32px",
                maxWidth: "700px",
                margin: "0 auto 48px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              }}
            >
              {/* Inbox header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#1A1A1A",
                }}>
                  Unified Inbox — Jake Henderson
                </div>
                <div style={{
                  background: "#1B5E20",
                  color: "#fff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "100px",
                }}>
                  Hot Lead
                </div>
              </div>

              {/* Messages */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { platform: "MorphMarket", color: "#E65100", time: "10:14 PM", msg: "Hey, is the Mack Snow female still available? What's the best price?" },
                  { platform: "AI Draft", color: "#1B5E20", time: "10:14 PM", msg: "Yes, she's still available at $185! Want me to send more photos? I can also hold her with a $50 deposit." },
                  { platform: "Instagram DM", color: "#C13584", time: "Yesterday", msg: "Saw your post — do you have any Mack Snows left?" },
                  { platform: "SMS", color: "#2196F3", time: "3 days ago", msg: "Thanks for chatting at NARBC! I'm interested in the leopard geckos." },
                ].map((message, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: "12px",
                    padding: "14px 16px",
                    background: i === 1 ? "rgba(27,94,32,0.04)" : "rgba(0,0,0,0.02)",
                    borderRadius: "12px",
                    border: i === 1 ? "1px solid rgba(27,94,32,0.15)" : "1px solid transparent",
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: message.color,
                      marginTop: "6px",
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          color: message.color,
                        }}>
                          {message.platform}
                        </span>
                        <span style={{ fontSize: "11px", color: "#999" }}>{message.time}</span>
                      </div>
                      <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.5" }}>
                        {message.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scenario callout */}
            <div style={{
              maxWidth: "700px",
              margin: "0 auto 40px",
              background: "#111111",
              borderRadius: "16px",
              padding: "28px 32px",
            }}>
              <p style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.85)",
                fontStyle: "italic",
              }}>
                A buyer messages you on MorphMarket at 10pm asking about a Mack Snow. HatchKit&apos;s AI responds instantly: &ldquo;Yes, she&apos;s still available at $185! Want me to send more photos?&rdquo; By morning, you have a warm lead ready to close — and you didn&apos;t lift a finger.
              </p>
            </div>

            {/* Key callouts */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              maxWidth: "700px",
              margin: "0 auto",
            }}>
              {[
                { icon: "🤖", text: "AI-drafted responses for common questions" },
                { icon: "⚡", text: "Average response time drops from 6 hours to under 2 minutes" },
                { icon: "🔗", text: "Never lose a message across platforms again" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                  <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.5", fontWeight: 500 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
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
                quote="The shipping agent alone is worth the subscription. I used to spend 30 minutes checking weather before every shipment. Now HatchKit handles it and texts my customers for me. I had a shipment to Phoenix held automatically last week because of a heat wave — the customer actually thanked me for being so professional."
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "96px 24px", background: "#F5F5F0" }}>
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
                description="Our onboarding team builds your lead capture forms, configures your pipeline, and sets up your automations in 5–7 days."
              />
              <StepCard
                number={2}
                title="You focus on your animals"
                description="Go to shows, breed your animals, do what you love. HatchKit runs in the background capturing leads and following up."
              />
              <StepCard
                number={3}
                title="Your business grows"
                description="Watch your lead conversion climb, your repeat customer rate rise, and your shipping stress disappear."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BUILT FOR BREEDERS LIKE YOU */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
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
                  description: "You sell through MorphMarket and social media but you\u2019re drowning in DMs across 5 platforms. Buyers ghost you, you forget who wanted what, and your Instagram hasn\u2019t been updated in two weeks. HatchKit puts every conversation in one inbox and keeps your social feed active with AI-generated content.",
                },
                {
                  icon: "📈",
                  title: "The Growing Operation",
                  description: "You\u2019re doing real revenue \u2014 $50K+ a year \u2014 but you\u2019re doing everything manually. Shipping logistics eat your mornings, marketing is an afterthought, and you know you\u2019re leaving money on the table. HatchKit automates the business side so you can focus on breeding.",
                },
              ].map((persona, i) => (
                <div key={i} className="persona-card">
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: "rgba(27,94,32,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    margin: "0 auto 20px",
                  }}>
                    {persona.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#1A1A1A",
                    marginBottom: "12px",
                  }}>
                    {persona.title}
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#555",
                    textAlign: "left",
                  }}>
                    {persona.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "#F5F5F0", padding: "96px 24px" }}>
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
                Simple Pricing
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
                Invest in Your Business
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "460px", margin: "0 auto" }}>
                Month-to-month after setup. Cancel anytime. Most breeders recoup their
                investment in 60 days.
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

      {/* FAQ */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
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

      {/* FINAL CTA */}
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
              Ready to Hatch Your{" "}
              <span style={{ color: "#FF6F00" }}>Next Level?</span>
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
                Built by breeders. Powered by AI. Trusted by reptile businesses across the Southeast.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
