'use client';

import { useState } from "react";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    species: "",
    showsPerYear: "",
    biggestChallenge: "",
    email: "",
    phone: "",
  });

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
      // Submit to webhook if configured, otherwise just save locally
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "10px",
    border: "1.5px solid rgba(0,0,0,0.12)",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#1A1A1A",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.15s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    color: "#1A1A1A",
    marginBottom: "7px",
  };

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#111111",
          padding: "140px 24px 64px",
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
        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
              marginBottom: "20px",
              border: "1px solid rgba(255,111,0,0.2)",
            }}
          >
            Free, No-Pressure Call
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Book Your Free 15-Minute Demo
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.65",
            }}
          >
            We&apos;ll walk you through HatchKit live, set up for your exact species,
            show schedule, and how you sell. No pitch. Just a real walkthrough.
          </p>
        </div>
      </section>

      {/* FORM + CALENDAR */}
      <section style={{ padding: "64px 24px 96px", background: "#F5F5F0" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* FORM */}
          <div>
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "20px",
                padding: "36px",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "56px", marginBottom: "20px" }}>🎉</div>
                  <h2 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "26px",
                    color: "#1A1A1A",
                    marginBottom: "12px",
                  }}>
                    You&apos;re on the list!
                  </h2>
                  <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.65" }}>
                    We&apos;ll reach out within 1 business day to schedule your demo.
                    Check your email for a confirmation.
                  </p>
                  <div style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "rgba(27,94,32,0.06)",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#1B5E20",
                    fontWeight: 500,
                  }}>
                    Or text us directly at (555) 000-0000 to get on the calendar today.
                  </div>
                </div>
              ) : (
                <>
                  <h2 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "#1A1A1A",
                    marginBottom: "6px",
                  }}>
                    Tell us about your business
                  </h2>
                  <p style={{ fontSize: "14px", color: "#888", marginBottom: "28px" }}>
                    This helps us personalize your demo to what matters most.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={labelStyle} htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Marcus Webb"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="businessName">Business Name</label>
                        <input
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="SunScale Geckos"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="species">Species You Breed or Sell *</label>
                      <input
                        id="species"
                        name="species"
                        type="text"
                        required
                        value={formData.species}
                        onChange={handleChange}
                        placeholder="Ball pythons, crested geckos, blue tongue skinks..."
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="showsPerYear">Shows Per Year</label>
                      <select
                        id="showsPerYear"
                        name="showsPerYear"
                        value={formData.showsPerYear}
                        onChange={handleChange}
                        style={inputStyle}
                      >
                        <option value="">Select...</option>
                        <option value="1-3">1–3 shows</option>
                        <option value="4-8">4–8 shows</option>
                        <option value="9-15">9–15 shows</option>
                        <option value="15+">15+ shows</option>
                        <option value="online-only">Online only / no shows</option>
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="biggestChallenge">Biggest Business Challenge</label>
                      <textarea
                        id="biggestChallenge"
                        name="biggestChallenge"
                        rows={3}
                        value={formData.biggestChallenge}
                        onChange={handleChange}
                        placeholder="e.g., I lose most of my show leads, shipping is stressful, I have no marketing system..."
                        style={{ ...inputStyle, resize: "vertical", minHeight: "90px" }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={labelStyle} htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="phone">Phone / Text</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {error && (
                      <div style={{
                        padding: "12px 16px",
                        borderRadius: "10px",
                        background: "rgba(211,47,47,0.08)",
                        color: "#c62828",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}>
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        padding: "15px 24px",
                        borderRadius: "10px",
                        background: submitting ? "#ccc" : "#FF6F00",
                        color: "#fff",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        border: "none",
                        cursor: submitting ? "not-allowed" : "pointer",
                        transition: "all 0.15s ease",
                        marginTop: "4px",
                      }}
                    >
                      {submitting ? "Sending..." : "Request My Free Demo →"}
                    </button>

                    <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>
                      No spam. No sales pressure. Just a real demo from a real breeder.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Calendar placeholder */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "20px",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  background: "#F5F5F0",
                  borderRadius: "12px",
                  padding: "40px 24px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>📅</div>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#333",
                  marginBottom: "4px",
                }}>
                  Calendar Scheduling
                </p>
                <p style={{ fontSize: "13px", color: "#888" }}>
                  Available slots load after form submission
                </p>
              </div>
              <p style={{ fontSize: "13px", color: "#999" }}>
                Or text us directly at{" "}
                <a href="sms:5550000000" style={{ color: "#FF6F00", textDecoration: "none", fontWeight: 600 }}>
                  (555) 000-0000
                </a>
              </p>
            </div>

            {/* What to expect */}
            <div
              style={{
                background: "#1B5E20",
                borderRadius: "20px",
                padding: "28px",
                color: "#fff",
              }}
            >
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "17px",
                marginBottom: "16px",
              }}>
                What to Expect on the Call
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Live walkthrough set up for your species",
                  "See Smart Shipping in action with real weather data",
                  "We'll show you how it works from QR scan to closing the sale",
                  "Honest recommendation on which plan fits you",
                  "Q&A — ask us anything, including the hard stuff",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(255,111,0,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#FF6F00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial mini */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill="#FF6F00">
                    <path d="M9 1L11.12 6.26H16.18L12.03 9.74L13.76 15L9 11.77L4.24 15L5.97 9.74L1.82 6.26H6.88L9 1Z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333", fontStyle: "italic", marginBottom: "12px" }}>
                &ldquo;The demo took 12 minutes and I signed up the same day. Setup was done by Thursday.&rdquo;
              </p>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#1A1A1A",
              }}>
                Derek K. — Apex Reptiles
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, textarea:focus, select:focus {
          border-color: #1B5E20 !important;
          box-shadow: 0 0 0 3px rgba(27,94,32,0.1);
        }
      `}</style>
    </>
  );
}
