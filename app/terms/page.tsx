import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - HatchKit",
  description: "Terms and conditions for using HatchKit breeder business software and related services.",
};

const sections = [
  {
    title: "1. What HatchKit Provides",
    body: "HatchKit provides software, implementation, and workflow services for breeder businesses, including lead capture, CRM setup, buyer follow-up, shipping review workflows, content planning, and related business tools.",
  },
  {
    title: "2. Accounts and Accuracy",
    body: "You are responsible for providing accurate information, maintaining access to your account, and using HatchKit in a lawful and responsible manner.",
  },
  {
    title: "3. Billing and Cancellation",
    body: "Subscriptions are billed according to the plan selected and any implementation scope agreed to during onboarding. Plans are month-to-month after setup unless a separate written agreement says otherwise.",
  },
  {
    title: "4. Customer Data",
    body: "You own the customer, contact, inventory, and business data you provide. HatchKit uses that data to provide and improve the service and support your account.",
  },
  {
    title: "5. AI-Assisted Output",
    body: "HatchKit may use AI to help draft messages, content ideas, shipping communications, and workflow recommendations. You are responsible for reviewing and approving important communications and business decisions.",
  },
  {
    title: "6. Shipping Decisions",
    body: "Shipping review tools are designed to support safer decision-making, but they do not replace your responsibility to follow carrier rules, applicable laws, animal welfare standards, and your own judgment.",
  },
  {
    title: "7. Prohibited Use",
    body: "You may not use HatchKit for illegal, harmful, abusive, fraudulent, or unauthorized activity, or attempt to copy, reverse-engineer, or resell the service without permission.",
  },
  {
    title: "8. Changes",
    body: "We may update these terms from time to time. Continued use of HatchKit after changes take effect means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="hk-page">
      <section className="hk-section hk-section-soft" style={{ paddingTop: "132px" }}>
        <div className="hk-shell" style={{ maxWidth: "820px" }}>
          <span className="hk-kicker">Legal</span>
          <h1 className="hk-section-heading">Terms of Service</h1>
          <p className="hk-section-copy">Last updated: June 5, 2026</p>

          <div className="hk-card" style={{ marginTop: "32px" }}>
            <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.8 }}>
              These terms govern your use of HatchKit at hatchkit.ai and related HatchKit
              software, implementation, and support services.
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
                9. Contact
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.75 }}>
                Questions about these terms can be sent to{" "}
                <a href="mailto:brianna@hatchkitai.com" style={{ color: "#2F80ED", fontWeight: 800 }}>
                  brianna@hatchkitai.com
                </a>. You can also{" "}
                <Link href="/demo/" style={{ color: "#2F80ED", fontWeight: 800 }}>
                  request a demo
                </Link>{" "}
                if you need help understanding HatchKit before becoming a customer.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
