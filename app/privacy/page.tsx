import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - HatchKit",
  description: "How HatchKit collects, uses, and protects information for website visitors and customers.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect contact details, business details, demo-request information, website analytics, and information you choose to provide while evaluating or using HatchKit.",
  },
  {
    title: "How We Use Information",
    body: "We use information to respond to demo requests, provide HatchKit services, improve product workflows, support customers, send relevant service updates, and protect the security of the platform.",
  },
  {
    title: "Sharing",
    body: "We do not sell personal information. We may share information with service providers that help us operate the website, process requests, deliver communications, or provide the HatchKit service.",
  },
  {
    title: "Data Security",
    body: "We use reasonable administrative, technical, and organizational safeguards to protect information. No system is perfectly secure, but we take protection seriously.",
  },
  {
    title: "Your Choices",
    body: "You can contact us to update, delete, or request information about your data, subject to legal and operational requirements.",
  },
  {
    title: "Children",
    body: "HatchKit is not intended for children under 13, and we do not knowingly collect information from children under 13.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="hk-page">
      <section className="hk-section hk-section-soft" style={{ paddingTop: "132px" }}>
        <div className="hk-shell" style={{ maxWidth: "820px" }}>
          <span className="hk-kicker">Legal</span>
          <h1 className="hk-section-heading">Privacy Policy</h1>
          <p className="hk-section-copy">Last updated: June 5, 2026</p>

          <div className="hk-card" style={{ marginTop: "32px" }}>
            <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.8 }}>
              HatchKit is committed to protecting your privacy. This policy explains how we
              collect and use information when you visit hatchkit.ai, request a demo, or use
              HatchKit services.
            </p>

            {sections.map((section) => (
              <section key={section.title} style={{ marginTop: "30px" }}>
                <h2 style={{ color: "#102A43", fontSize: "22px", marginBottom: "10px" }}>
                  {section.title}
                </h2>
                <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.75 }}>
                  {section.body}
                </p>
              </section>
            ))}

            <section style={{ marginTop: "30px" }}>
              <h2 style={{ color: "#102A43", fontSize: "22px", marginBottom: "10px" }}>
                Contact
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.75 }}>
                Questions about this policy can be sent to{" "}
                <a href="mailto:brianna@hatchkitai.com" style={{ color: "#2F80ED", fontWeight: 800 }}>
                  brianna@hatchkitai.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
