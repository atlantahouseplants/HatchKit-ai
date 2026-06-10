'use client';

import { useEffect } from "react";

// Public GHL booking widget for "HatchKit Discovery Call" — lives in the HatchKit
// sales sub-account (fqj4rbp2VRkvMa8GWVWn), host: Brianna. Hardcoded default so the
// booking path can never silently break if a build-time env var is missing.
// Override with NEXT_PUBLIC_GHL_BOOKING_CALENDAR_ID if needed.
const CALENDAR_ID =
  process.env.NEXT_PUBLIC_GHL_BOOKING_CALENDAR_ID || "rqjzGHUbB4uUJn19zaXo";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export default function BookingCalendar() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
      style={{ width: "100%", minHeight: "720px", border: "none", overflow: "hidden" }}
      scrolling="no"
      id={`${CALENDAR_ID}_booking`}
      title="Book your free HatchKit demo"
    />
  );
}
