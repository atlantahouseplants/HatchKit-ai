import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing — Plans Starting at $149/mo",
  description:
    "HatchKit offers three plans for reptile breeders at every stage. Starter at $149/mo, Growth at $249/mo, and Pro at $399/mo. Month-to-month after setup.",
};

const tiers = [
  {
    name: "Starter",
    subtitle: "Stop Losing Leads",
    price: 149,
    setupFee: 499,
    description: "For breeders doing a few shows a year who are tired of watching potential customers disappear. Get organized, start following up, and stop leaving money on the table.",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Automate Your Business",
    price: 249,
    setupFee: 799,
    description: "For breeders ready to let AI handle the busy work. Automated shipping decisions, content creation, unified inbox, and marketing that runs while you focus on your animals.",
    popular: true,
  },
  {
    name: "Pro",
    subtitle: "Scale Like a Brand",
    price: 399,
    setupFee: 1199,
    description: "For serious breeders running a real operation. Advanced analytics, dedicated support, full AI autonomy, and everything you need to build a brand that dominates your market.",
    popular: false,
  },
];

const comparisonRows = [
  {
    category: "Lead Capture",
    features: [
      { name: "Show Lead Capture (QR codes)", starter: true, growth: true, pro: true },
      { name: "Instant follow-up automation", starter: true, growth: true, pro: true },
      { name: "Multi-show lead tagging", starter: false, growth: true, pro: true },
      { name: "GPS show check-in", starter: false, growth: true, pro: true },
    ],
  },
  {
    category: "CRM & Pipeline",
    features: [
      { name: "Basic CRM with contact management", starter: true, growth: true, pro: true },
      { name: "Sales pipeline (Kanban)", starter: false, growth: true, pro: true },
      { name: "Payment & deposit tracking", starter: false, growth: true, pro: true },
      { name: "Professional invoicing (Square & Stripe)", starter: false, growth: true, pro: true },
      { name: "Automated waitlist for upcoming clutches", starter: false, growth: true, pro: true },
      { name: "Repeat customer / VIP tagging", starter: false, growth: true, pro: true },
    ],
  },
  {
    category: "Unified Inbox",
    features: [
      { name: "Basic unified inbox (email + SMS)", starter: true, growth: true, pro: true },
      { name: "Full unified inbox (all platforms)", starter: false, growth: true, pro: true },
      { name: "AI-assisted response drafting", starter: false, growth: true, pro: true },
      { name: "Fully autonomous AI first-response", starter: false, growth: false, pro: true },
      { name: "Automatic lead creation from new messages", starter: false, growth: true, pro: true },
      { name: "Conversation tagging & priority flagging", starter: false, growth: true, pro: true },
    ],
  },
  {
    category: "Marketing Automation",
    features: [
      { name: "Email automation (5 sequences)", starter: true, growth: true, pro: true },
      { name: "Email automation (unlimited)", starter: false, growth: true, pro: true },
      { name: "SMS automation", starter: false, growth: true, pro: true },
      { name: "New animal listing alerts", starter: false, growth: true, pro: true },
      { name: "Referral program with automated tracking", starter: false, growth: true, pro: true },
      { name: "A/B testing", starter: false, growth: false, pro: true },
    ],
  },
  {
    category: "AI Shipping",
    features: [
      { name: "AI Shipping Agent with weather intelligence", starter: false, growth: true, pro: true },
      { name: "Species tolerance database", starter: false, growth: true, pro: true },
      { name: "Automatic customer SMS on hold", starter: false, growth: true, pro: true },
      { name: "Heat pack recommendations", starter: false, growth: true, pro: true },
      { name: "Multi-carrier support", starter: false, growth: true, pro: true },
    ],
  },
  {
    category: "Brand & Website",
    features: [
      { name: "Professional branded website", starter: false, growth: true, pro: true },
      { name: "Available animals gallery", starter: false, growth: true, pro: true },
      { name: "Inquiry form integration", starter: false, growth: true, pro: true },
      { name: "Custom domain", starter: false, growth: true, pro: true },
    ],
  },
  {
    category: "Reporting",
    features: [
      { name: "Basic lead reports", starter: true, growth: true, pro: true },
      { name: "Smart Reporting dashboard with full analytics", starter: false, growth: false, pro: true },
      { name: "Revenue by show & morph", starter: false, growth: false, pro: true },
      { name: "Custom date ranges & CSV export", starter: false, growth: false, pro: true },
      { name: "Seasonal forecasting", starter: false, growth: false, pro: true },
    ],
  },
  {
    category: "AI Content Engine",
    features: [
      { name: "Social media template library (DIY)", starter: true, growth: true, pro: true },
      { name: "AI-generated posts (3/week, approval queue)", starter: false, growth: true, pro: true },
      { name: "AI-generated posts (daily, auto-publish)", starter: false, growth: false, pro: true },
      { name: "8-category smart rotation", starter: false, growth: true, pro: true },
      { name: "Show-aware scheduling (previews & recaps)", starter: false, growth: true, pro: true },
      { name: "SMS approval flow", starter: false, growth: true, pro: true },
      { name: "Direct Instagram/Facebook publishing", starter: false, growth: false, pro: true },
    ],
  },
  {
    category: "Support & Onboarding",
    features: [
      { name: "Standard email support", starter: true, growth: false, pro: false },
      { name: "Priority support", starter: false, growth: true, pro: true },
      { name: "Dedicated success manager", starter: false, growth: false, pro: true },
      { name: "Quarterly strategy calls", starter: false, growth: false, pro: true },
      { name: "Custom integrations and API access", starter: false, growth: false, pro: true },
      { name: "Multi-species and multi-location support", starter: false, growth: false, pro: true },
      { name: "Early access to new features", starter: false, growth: false, pro: true },
      { name: "Setup in 5\u20137 business days", starter: true, growth: true, pro: true },
    ],
  },
];

type CheckProps = {
  value: boolean;
  isPopular: boolean;
};

function Check({ value, isPopular }: CheckProps) {
  if (value) {
    return (
      <div style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: isPopular ? "rgba(255,111,0,0.2)" : "rgba(27,94,32,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}>
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path d="M1 4.5L4.5 8L11 1" stroke={isPopular ? "#FF6F00" : "#1B5E20"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center", color: "#ccc", fontSize: "18px" }}>\u2014</div>
  );
}

export default function PricingPage() {
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(27,94,32,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Simple, Transparent Pricing
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.65",
              marginBottom: "12px",
            }}
          >
            Month-to-month after your initial setup period. No long-term contracts.
            Cancel anytime.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Most breeders recoup their investment within 60 days.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ padding: "80px 24px", background: "#F5F5F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: tier.popular ? "#1B5E20" : "#fff",
                    border: tier.popular ? "2px solid #1B5E20" : "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "20px",
                    padding: "36px 32px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {tier.popular && (
                    <div style={{
                      position: "absolute",
                      top: "22px",
                      right: "-30px",
                      background: "#FF6F00",
                      color: "#fff",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "5px 44px",
                      transform: "rotate(45deg)",
                    }}>
                      Most Popular
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: tier.popular ? "#fff" : "#1A1A1A",
                    marginBottom: "4px",
                  }}>
                    {tier.name}
                  </h3>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: tier.popular ? "#FFA000" : "#FF6F00",
                    marginBottom: "12px",
                  }}>
                    {tier.subtitle}
                  </p>
                  <p style={{
                    fontSize: "14px",
                    color: tier.popular ? "rgba(255,255,255,0.6)" : "#777",
                    lineHeight: 1.5,
                    marginBottom: "24px",
                  }}>
                    {tier.description}
                  </p>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "52px",
                      color: tier.popular ? "#fff" : "#1A1A1A",
                      lineHeight: 1,
                    }}>
                      ${tier.price}
                    </span>
                    <span style={{
                      fontSize: "16px",
                      color: tier.popular ? "rgba(255,255,255,0.55)" : "#888",
                      marginLeft: "4px",
                    }}>
                      /month
                    </span>
                  </div>
                  <p style={{
                    fontSize: "13px",
                    color: tier.popular ? "rgba(255,255,255,0.45)" : "#aaa",
                    marginBottom: "28px",
                  }}>
                    + ${tier.setupFee.toLocaleString()} one-time setup fee
                  </p>

                  <Link
                    href="/demo/"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "14px 20px",
                      borderRadius: "10px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      textDecoration: "none",
                      background: tier.popular ? "#FF6F00" : "transparent",
                      color: tier.popular ? "#fff" : "#1B5E20",
                      border: tier.popular ? "2px solid #FF6F00" : "2px solid #1B5E20",
                      transition: "all 0.15s ease",
                    }}
                  >
                    Get Started with {tier.name}
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
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
              Full Feature Comparison
            </h2>
          </ScrollReveal>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#888",
                    borderBottom: "2px solid rgba(0,0,0,0.08)",
                    width: "40%",
                  }}>
                    Feature
                  </th>
                  {tiers.map(tier => (
                    <th key={tier.name} style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "15px",
                      color: tier.popular ? "#1B5E20" : "#1A1A1A",
                      borderBottom: "2px solid rgba(0,0,0,0.08)",
                      background: tier.popular ? "rgba(27,94,32,0.03)" : "transparent",
                    }}>
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((section, si) => (
                  <>
                    <tr key={`cat-${si}`}>
                      <td
                        colSpan={4}
                        style={{
                          padding: "20px 20px 10px",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#1B5E20",
                          borderTop: si > 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
                        }}
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feat, fi) => (
                      <tr key={`feat-${si}-${fi}`} style={{
                        background: fi % 2 === 0 ? "transparent" : "rgba(0,0,0,0.018)",
                      }}>
                        <td style={{
                          padding: "12px 20px",
                          fontSize: "14px",
                          color: "#333",
                          borderBottom: "1px solid rgba(0,0,0,0.04)",
                        }}>
                          {feat.name}
                        </td>
                        <td style={{
                          padding: "12px 20px",
                          textAlign: "center",
                          borderBottom: "1px solid rgba(0,0,0,0.04)",
                        }}>
                          <Check value={feat.starter} isPopular={false} />
                        </td>
                        <td style={{
                          padding: "12px 20px",
                          textAlign: "center",
                          borderBottom: "1px solid rgba(0,0,0,0.04)",
                          background: "rgba(27,94,32,0.025)",
                        }}>
                          <Check value={feat.growth} isPopular={true} />
                        </td>
                        <td style={{
                          padding: "12px 20px",
                          textAlign: "center",
                          borderBottom: "1px solid rgba(0,0,0,0.04)",
                        }}>
                          <Check value={feat.pro} isPopular={false} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Guarantee */}
      <section style={{ background: "#F5F5F0", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal stagger>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}>
              {[
                {
                  icon: "\ud83d\udd12",
                  title: "Month-to-Month",
                  desc: "No long-term contracts. Cancel anytime after your initial setup period.",
                },
                {
                  icon: "\u26a1",
                  title: "5\u20137 Day Setup",
                  desc: "We handle everything. You'll be fully live in under a week.",
                },
                {
                  icon: "\ud83c\udfaf",
                  title: "ROI Guarantee",
                  desc: "If you don't recoup your setup fee in 90 days, we'll work for free until you do.",
                },
                {
                  icon: "\ud83e\udd1d",
                  title: "Breeder Support",
                  desc: "Our support team actually knows reptiles. Get help from people who get it.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1B5E20", padding: "80px 24px", textAlign: "center" }}>
        <ScrollReveal>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "#fff",
            marginBottom: "16px",
          }}>
            Not Sure Which Plan?
          </h2>
          <p style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "32px",
            maxWidth: "440px",
            margin: "0 auto 32px",
            lineHeight: "1.65",
          }}>
            Book a free 15-minute call and we&apos;ll recommend the right plan for your species,
            show schedule, and business goals.
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
            Book My Free Demo →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
