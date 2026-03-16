import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HatchKit privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
          Privacy Policy
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
            HatchKit (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website at hatchkit.ai or use our services.
          </p>

          <h2 style={headingStyle}>Information We Collect</h2>
          <p style={pStyle}>
            <strong>Information you give us directly:</strong> When you fill out our demo request
            form, we collect your name, business name, email address, phone number, species you
            breed, number of shows you attend, and any challenges you share with us. This is so
            we can personalize your demo and follow up with you.
          </p>
          <p style={pStyle}>
            <strong>Information collected automatically:</strong> When you visit our website, we
            may collect basic usage data like your browser type, pages visited, and referring
            website. We use this to understand how people find us and improve the site.
          </p>

          <h2 style={headingStyle}>How We Use Your Information</h2>
          <p style={pStyle}>We use your information to:</p>
          <ul style={{ ...pStyle, paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Schedule and personalize your demo call</li>
            <li style={{ marginBottom: "8px" }}>Follow up about HatchKit services</li>
            <li style={{ marginBottom: "8px" }}>Send you updates about HatchKit (only if you opt in)</li>
            <li style={{ marginBottom: "8px" }}>Improve our website and services</li>
          </ul>
          <p style={pStyle}>
            We will never sell your information to third parties. Period.
          </p>

          <h2 style={headingStyle}>How We Protect Your Information</h2>
          <p style={pStyle}>
            We use industry-standard security measures to protect your personal information.
            Your data is transmitted over encrypted connections (HTTPS) and stored securely.
            However, no method of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 style={headingStyle}>Third-Party Services</h2>
          <p style={pStyle}>
            We may use third-party services for email delivery, analytics, and payment
            processing. These services have their own privacy policies and only receive the
            minimum information necessary to perform their function.
          </p>

          <h2 style={headingStyle}>Cookies</h2>
          <p style={pStyle}>
            Our website may use cookies and similar technologies to remember your preferences
            and understand how you use our site. You can disable cookies in your browser
            settings, though some features may not work properly without them.
          </p>

          <h2 style={headingStyle}>Your Rights</h2>
          <p style={pStyle}>You have the right to:</p>
          <ul style={{ ...pStyle, paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Request a copy of the personal data we hold about you</li>
            <li style={{ marginBottom: "8px" }}>Ask us to update or correct your information</li>
            <li style={{ marginBottom: "8px" }}>Ask us to delete your information</li>
            <li style={{ marginBottom: "8px" }}>Opt out of marketing communications at any time</li>
          </ul>
          <p style={pStyle}>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:hello@hatchkit.ai" style={{ color: "#1B5E20", fontWeight: 600 }}>
              hello@hatchkit.ai
            </a>.
          </p>

          <h2 style={headingStyle}>Children&apos;s Privacy</h2>
          <p style={pStyle}>
            HatchKit is not intended for children under 13. We do not knowingly collect
            personal information from children under 13. If you believe we have collected
            information from a child under 13, please contact us and we will delete it.
          </p>

          <h2 style={headingStyle}>Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by posting the new policy on this page and updating the
            &quot;Last updated&quot; date.
          </p>

          <h2 style={headingStyle}>Contact Us</h2>
          <p style={pStyle}>
            If you have any questions about this Privacy Policy, contact us at{" "}
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
