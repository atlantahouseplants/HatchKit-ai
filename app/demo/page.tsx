'use client';

import { useState } from "react";
import VideoSection from "@/components/show/VideoSection";

type DemoFormData = {
  name: string;
  businessName: string;
  species: string;
  salesChannels: string;
  monthlyVolume: string;
  biggestChallenge: string;
  email: string;
  phone: string;
};

const initialFormData: DemoFormData = {
  name: "",
  businessName: "",
  species: "",
  salesChannels: "",
  monthlyVolume: "",
  biggestChallenge: "",
  email: "",
  phone: "",
};

const outcomes = [
  "Where your leads are coming from and where they are getting lost",
  "Which repetitive jobs the robots can handle first",
  "How HatchKit can help with website, follow-up, shipping, content, and CRM",
  "The smallest setup that makes sense for your operation",
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<DemoFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_DEMO_WEBHOOK_URL;
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: "hatchkit.ai/demo",
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto", paddingBottom: "72px" }}>
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="hk-eyebrow">Breeder business strategy call</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.7rem, 5vw, 4.8rem)", marginTop: "22px" }}>
              Show us where the business gets messy. We will show what HatchKit can take off your plate.
            </h1>
            <p className="hk-hero-copy">
              This is not a fancy software pitch. Tell us how you sell, where buyers find
              you, how you ship, and what keeps falling through the cracks. We will map
              HatchKit around that.
            </p>
          </div>

          <div className="hk-card" style={{ padding: "28px" }}>
            {submitted ? (
              <div style={{ padding: "28px 0", textAlign: "center" }}>
                <div
                  style={{
                    alignItems: "center",
                    background: "rgba(0,184,169,0.12)",
                    borderRadius: "999px",
                    color: "#008C82",
                    display: "inline-flex",
                    fontFamily: "var(--font-accent)",
                    fontSize: "13px",
                    fontWeight: 800,
                    height: "44px",
                    justifyContent: "center",
                    marginBottom: "18px",
                    width: "44px",
                  }}
                >
                  OK
                </div>
                <h2 style={{ color: "#102A43", fontSize: "28px", marginBottom: "10px" }}>
                  Demo request received.
                </h2>
                <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.7 }}>
                  We will reach out within one business day with the next available demo windows
                  and a short prep note based on your answers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                <div>
                  <h2 style={{ color: "#102A43", fontSize: "24px", marginBottom: "8px" }}>
                    Talk to Brianna and the HatchKit team
                  </h2>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6 }}>
                    No tech homework. Just answer a few questions so we can make the call useful.
                  </p>
                </div>

                <div className="demo-form-grid">
                  <Field label="Your name" name="name" value={formData.name} onChange={handleChange} required />
                  <Field label="Business name" name="businessName" value={formData.businessName} onChange={handleChange} />
                </div>

                <Field
                  label="Species or animal categories"
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                  placeholder="Ball pythons, geckos, feeders, birds, rabbits..."
                  required
                />

                <div className="demo-form-grid">
                  <SelectField
                    label="Primary sales channels"
                    name="salesChannels"
                    value={formData.salesChannels}
                    onChange={handleChange}
                    options={["Shows", "Website", "Social media", "Marketplace", "Mixed channels"]}
                  />
                  <SelectField
                    label="Monthly sales volume"
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    options={["0-5", "6-15", "16-40", "40+", "Seasonal drops"]}
                  />
                </div>

                <div>
                  <label className="demo-label" htmlFor="biggestChallenge">What part of the business is driving you crazy?</label>
                  <textarea
                    id="biggestChallenge"
                    name="biggestChallenge"
                    rows={4}
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    placeholder="Example: I lose show leads, forget to follow up, hate posting, shipping is stressful, my website is weak..."
                    className="demo-input"
                  />
                </div>

                <div className="demo-form-grid">
                  <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  <Field label="Phone / text" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>

                {error && (
                  <div
                    style={{
                      background: "rgba(255,107,107,0.12)",
                      borderRadius: "8px",
                      color: "#B42323",
                      fontSize: "14px",
                      padding: "12px 14px",
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  className="hk-button hk-button-primary"
                  disabled={submitting}
                  style={{ border: "none", cursor: submitting ? "not-allowed" : "pointer", width: "100%" }}
                  type="submit"
                >
                  {submitting ? "Sending..." : "Request My Demo"}
                </button>
                <p style={{ color: "#8795A1", fontSize: "12px", lineHeight: 1.5, textAlign: "center" }}>
                  No spam. Your answers are only used to tailor the walkthrough.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "start" }}>
          <div>
            <span className="hk-kicker">What the call covers</span>
            <h2 className="hk-section-heading">We start with how you already sell, not with a generic demo script.</h2>
            <p className="hk-section-copy">
              If your buyers come from shows, Instagram, MorphMarket, Facebook, your website,
              text messages, or all of the above, that is the point. We will show how HatchKit
              can clean up the follow-through.
            </p>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {outcomes.map((item) => (
              <div className="hk-card" key={item} style={{ alignItems: "center", display: "flex", gap: "12px", padding: "18px" }}>
                <span style={{ background: "#B9FBC0", borderRadius: "999px", height: "10px", width: "10px" }} />
                <span style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 700 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      <style>{`
        .demo-form-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .demo-label {
          color: #102A43;
          display: block;
          font-family: var(--font-subheading);
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        .demo-input {
          background: #ffffff;
          border: 1.5px solid rgba(16,42,67,0.14);
          border-radius: 8px;
          color: #1F2933;
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
          padding: 13px 14px;
          resize: vertical;
          width: 100%;
        }

        .demo-input:focus {
          border-color: #2F80ED;
          box-shadow: 0 0 0 3px rgba(47,128,237,0.12);
        }

        @media (max-width: 720px) {
          .demo-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: keyof DemoFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="demo-label" htmlFor={name}>{label}{required ? " *" : ""}</label>
      <input
        className="demo-input"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: keyof DemoFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="demo-label" htmlFor={name}>{label}</label>
      <select className="demo-input" id={name} name={name} onChange={onChange} value={value}>
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
