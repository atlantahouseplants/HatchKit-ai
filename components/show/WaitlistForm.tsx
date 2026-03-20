'use client';

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "10px",
  border: "1.5px solid rgba(0,0,0,0.12)",
  fontSize: "16px",
  fontFamily: "'DM Sans', sans-serif",
  color: "#1A1A1A",
  background: "#fff",
  outline: "none",
  transition: "border-color 0.15s ease",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  color: "#1A1A1A",
  marginBottom: "7px",
};

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    breeds: "",
    biggestPain: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WAITLIST_WEBHOOK_URL;
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: "hatchkit.ai/show",
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      style={{
        background: "#1B5E20",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,111,0,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#fff",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            Interested? Get on the list.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
            }}
          >
            Drop your info below and we&apos;ll reach out to get you set up.
            No credit card. No commitment.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "20px",
            padding: "36px",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>
                🦎
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#1A1A1A",
                  marginBottom: "12px",
                }}
              >
                You&apos;re in.
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                We&apos;ll text you at{" "}
                <strong style={{ color: "#1A1A1A" }}>{formData.phone}</strong>{" "}
                when HatchKit is ready for you.
              </p>
              <div
                style={{
                  padding: "16px",
                  background: "rgba(27,94,32,0.06)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  color: "#1B5E20",
                  fontWeight: 500,
                }}
              >
                We&apos;ll be in touch soon.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div>
                <label style={labelStyle} htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Marcus"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="email">
                  Email Address *
                </label>
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
                <label style={labelStyle} htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  style={inputStyle}
                />
                <p
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "6px",
                  }}
                >
                  So we can text you when it&apos;s ready.
                </p>
              </div>

              <div>
                <label style={labelStyle} htmlFor="breeds">
                  What do you breed? (optional)
                </label>
                <input
                  id="breeds"
                  name="breeds"
                  type="text"
                  value={formData.breeds}
                  onChange={handleChange}
                  placeholder="Ball pythons, crested geckos, leopard geckos..."
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="biggestPain">
                  What&apos;s the hardest part of selling right now?
                </label>
                <select
                  id="biggestPain"
                  name="biggestPain"
                  value={formData.biggestPain}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  <option value="show-leads">Following up with people after shows</option>
                  <option value="managing-messages">
                    Keeping up with messages on different apps
                  </option>
                  <option value="shipping">Figuring out if it&apos;s safe to ship</option>
                  <option value="website">I don&apos;t have a website</option>
                  <option value="all">Honestly, all of it</option>
                </select>
              </div>

              {error && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(211,47,47,0.08)",
                    color: "#c62828",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: "16px 24px",
                  borderRadius: "10px",
                  background: submitting ? "#ccc" : "#FF6F00",
                  color: "#fff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "all 0.15s ease",
                  marginTop: "4px",
                  minHeight: "52px",
                }}
                className={submitting ? undefined : "pulse-accent"}
              >
                {submitting ? "Sending..." : "Get Me Started"}
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "#aaa",
                  textAlign: "center",
                }}
              >
                No spam. No credit card. Just a text when your account is
                ready.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
