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
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "HatchKit — AI-Powered Growth Platform for Reptile Breeders",
  description:
    "Stop losing sales at every reptile show. HatchKit captures every lead, automates your follow-up, and ships safely — all from one platform.",
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
      "Visual deal tracking from first interest to delivery to repeat customer. Know exactly where every sale stands.",
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
    description: "Perfect for breeders doing a few shows a year who want to stop losing leads.",
    features: [
      { text: "Show Lead Capture", included: true },
      { text: "Basic CRM", included: true },
      { text: "Email automation (5 sequences)", included: true },
      { text: "Standard support", included: true },
      { text: "AI Shipping Agent", included: false },
      { text: "SMS automation", included: false },
      { text: "Sales pipeline", included: false },
      { text: "Brand website", included: false },
      { text: "Smart Reporting dashboard", included: false },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$249",
    setupFee: "$799",
    description: "For breeders ready to grow their business with automation and AI.",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "AI Shipping Agent", included: true },
      { text: "SMS automation", included: true },
      { text: "Sales pipeline", included: true },
      { text: "Brand website", included: true },
      { text: "Priority support", included: true },
      { text: "Smart Reporting dashboard", included: false },
      { text: "Multi-show management", included: false },
      { text: "Custom integrations", included: false },
    ],
    ctaLabel: "Get Growth",
  },
  {
    name: "Pro",
    price: "$399",
    setupFee: "$1,199",
    description: "For serious breeders running a real business with multiple shows and high volume.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Smart Reporting dashboard", included: true },
      { text: "Multi-show management", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Early access to new features", included: true },
      { text: "White-glove onboarding", included: true },
      { text: "Quarterly strategy calls", included: true },
      { text: "Custom morph pricing rules", included: true },
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
      "Yes. HatchKit works for any live animal or feeder business. The AI Shipping Agent has species-specific temperature tolerances built in for hundreds of species — and we can add more.",
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
      "HatchKit still helps massively with lead capture, follow-up automation, and marketing. The shipping agent is just one of seven modules — and you only pay for what you use.",
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
              { label: "Leads Captured", value: "50,000+" },
              { label: "Shows Managed", value: "300+" },
              { label: "Avg Lead Conversion", value: "33%" },
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

      {/* SOLUTION SECTION */}
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
                Seven powerful modules that work together as one unified platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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

      {/* TESTIMONIAL */}
      <section style={{ background: "#F5F5F0", padding: "96px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            <TestimonialCard
              quote="I used to lose 90% of my show leads. After 3 months with HatchKit, I convert over a third of them into paying customers."
              name="Sarah M."
              business="SunScale Geckos"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
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
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
                Or text us at{" "}
                <a
                  href="sms:5550000000"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  (555) 000-0000
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
