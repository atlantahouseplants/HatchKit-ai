import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HatchKit terms of service. The rules and guidelines for using HatchKit.",
};

export default function TermsPage() {
  const headingStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: "20px",
    color: "#1A1A1A",
    marginTop: "40px",
    marginBottom: "12px",
  };

  const pStyle: React.CSSProperties = {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.75",
    marginBottom: "16px",
  };

  return (
    <>
      <section
        style={{
          background: "#111111",
          padding: "140px 24px 64px",
          textAlign: "center",
        }}
        className="scale-pattern"
      >
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#fff",
            marginBottom: "12px",
          }}
        >
          Terms of Service
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
          Last updated: March 15, 2026
        </p>
      </section>

      <section style={{ padding: "64px 24px 96px", background: "#F5F5F0" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.08)",
            padding: "48px 40px",
          }}
        >
          <p style={pStyle}>
            Welcome to HatchKit. By using our website at hatchkit.ai and our services, you agree
            to these Terms of Service. Please read them carefully.
          </p>

          <h2 style={headingStyle}>1. What HatchKit Is</h2>
          <p style={pStyle}>
            HatchKit provides software tools and services designed to help reptile breeders
            manage leads, shipping, follow-up, social media, and other business operations.
            We offer monthly subscription plans with a one-time setup fee.
          </p>

          <h2 style={headingStyle}>2. Your Account</h2>
          <p style={pStyle}>
            When you sign up for HatchKit, you are responsible for keeping your account
            credentials secure. You are responsible for all activity that happens under your
            account. If you think someone has gained unauthorized access to your account,
            contact us immediately at{" "}
            <a href="mailto:hello@hatchkit.ai" style={{ color: "#1B5E20", fontWeight: 600 }}>
              hello@hatchkit.ai
            </a>.
          </p>

          <h2 style={headingStyle}>3. Subscription & Payments</h2>
          <p style={pStyle}>
            HatchKit subscriptions are billed monthly after your initial setup period. Prices
            are listed on our{" "}
            <Link href="/pricing/" style={{ color: "#1B5E20", fontWeight: 600 }}>
              pricing page
            </Link>.
            We may change our prices with 30 days&apos; notice. Your setup fee is a one-time
            charge and is non-refundable after your account has been set up, except as described
            in our Money-Back Guarantee.
          </p>

          <h2 style={headingStyle}>4. Money-Back Guarantee</h2>
          <p style={pStyle}>
            If you don&apos;t make back your setup fee within 90 days of going live, we&apos;ll
            work with you for free until you do. This guarantee applies to breeders who are
            actively using the tools and following the recommended setup. We reserve the right
            to determine eligibility on a case-by-case basis.
          </p>

          <h2 style={headingStyle}>5. Cancellation</h2>
          <p style={pStyle}>
            You can cancel your HatchKit subscription at any time. There are no long-term
            contracts. When you cancel, your access continues through the end of your current
            billing period. We do not offer prorated refunds for partial months.
          </p>

          <h2 style={headingStyle}>6. Your Data</h2>
          <p style={pStyle}>
            You own your data. The contacts, leads, messages, and content you put into HatchKit
            belong to you. If you cancel, we will provide an export of your data upon request
            within 30 days of cancellation. After 90 days, we may delete your data from our
            systems.
          </p>

          <h2 style={headingStyle}>7. Acceptable Use</h2>
          <p style={pStyle}>You agree not to:</p>
          <ul style={{ ...pStyle, paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Use HatchKit for anything illegal or harmful</li>
            <li style={{ marginBottom: "8px" }}>Send spam or unsolicited messages through our tools</li>
            <li style={{ marginBottom: "8px" }}>Attempt to access other users&apos; accounts or data</li>
            <li style={{ marginBottom: "8px" }}>Reverse-engineer, copy, or resell any part of HatchKit</li>
            <li style={{ marginBottom: "8px" }}>Use the service to promote the sale of illegal species or violate wildlife regulations</li>
          </ul>

          <h2 style={headingStyle}>8. AI-Generated Content</h2>
          <p style={pStyle}>
            HatchKit uses AI to help draft social media posts, email replies, and shipping
            recommendations. While we work to make these accurate and helpful, you are
            responsible for reviewing and approving any AI-generated content before it goes
            out. We are not liable for errors in AI-generated content that you approve.
          </p>

          <h2 style={headingStyle}>9. Shipping Recommendations</h2>
          <p style={pStyle}>
            HatchKit&apos;s Smart Shipping feature provides weather-based recommendations for
            when it is safe to ship live animals. These are recommendations only. You, as the
            shipper, are ultimately responsible for making the final decision on whether to ship.
            We are not liable for any loss or harm to animals during transit.
          </p>

          <h2 style={headingStyle}>10. Limitation of Liability</h2>
          <p style={pStyle}>
            HatchKit is provided &quot;as is.&quot; We do our best to keep things running
            smoothly, but we cannot guarantee 100% uptime or that the service will be
            error-free. Our total liability to you for any claims related to the service is
            limited to the amount you paid us in the 3 months before the claim.
          </p>

          <h2 style={headingStyle}>11. Changes to These Terms</h2>
          <p style={pStyle}>
            We may update these Terms from time to time. If we make significant changes, we
            will notify you by email or by posting a notice on our website. Continued use of
            HatchKit after changes take effect means you accept the new terms.
          </p>

          <h2 style={headingStyle}>12. Contact</h2>
          <p style={pStyle}>
            Questions about these terms? Email us at{" "}
            <a href="mailto:hello@hatchkit.ai" style={{ color: "#1B5E20", fontWeight: 600 }}>
              hello@hatchkit.ai
            </a>.
          </p>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link
              href="/"
              style={{
                color: "#1B5E20",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
