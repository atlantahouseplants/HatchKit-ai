// SVG Icons for each HatchKit module

export function ShowLeadIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* QR code base */}
      <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="4" y="4" width="4" height="4" fill="currentColor"/>
      <rect x="14" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="16" y="4" width="4" height="4" fill="currentColor"/>
      <rect x="2" y="14" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="4" y="16" width="4" height="4" fill="currentColor"/>
      {/* Plus / person indicator */}
      <path d="M16 14h2M17 13v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 17.5c0-1.5-1-2.5-2.5-2.5S15 16 15 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="17.5" cy="13" r="1.2" fill="currentColor"/>
    </svg>
  );
}

export function AIShippingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box */}
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Cloud with lightning */}
      <path d="M16 3c.8.5 1.5 1.2 1.5 2 1.4.2 2.5 1.3 2.5 2.7A2.7 2.7 0 0117.3 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 10l-1.5 2.5h2L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MarketingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Envelope */}
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Lightning bolt */}
      <path d="M16 2l-2 4h3l-2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SalesPipelineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Funnel stages */}
      <path d="M3 4h18L14 11v7l-4-2v-5L3 4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow progression */}
      <path d="M17 17l3 3M17 20l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BrandWebsiteIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Browser window */}
      <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M2 8h20" stroke="currentColor" strokeWidth="1.8"/>
      {/* Window controls */}
      <circle cx="6" cy="5.5" r="1" fill="currentColor"/>
      <circle cx="9.5" cy="5.5" r="1" fill="currentColor"/>
      <circle cx="13" cy="5.5" r="1" fill="currentColor"/>
      {/* Content lines */}
      <path d="M6 12h12M6 15h8M6 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function ReportingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart */}
      <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Upward trend line */}
      <path d="M3 14l5-5 4 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="7" r="1.5" fill="currentColor"/>
      {/* Base line */}
      <path d="M2 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
