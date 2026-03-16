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

export function UnifiedInboxIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Multiple message indicators */}
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Notification dot */}
      <circle cx="19" cy="5" r="2.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  );
}

export function AnimalProfileIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gecko/reptile silhouette with profile card */}
      <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
      {/* Photo area */}
      <rect x="4.5" y="5.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6.5" cy="8" r="1" fill="currentColor"/>
      <path d="M4.5 10l1.5-1.5 1.5 1 1.5-1 1.5 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Info lines */}
      <path d="M13 6.5h5M13 9h4M13 11.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Heart / interest indicator */}
      <path d="M5 16h3M5 18.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 15l1.2 1.2L20 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MediaLibraryIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stacked photos / folder */}
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      {/* Image mountain */}
      <path d="M4 15l4-4 3 3 2-2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Sun */}
      <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
      {/* Play button for video */}
      <path d="M8 9l3 2-3 2z" fill="currentColor"/>
    </svg>
  );
}

export function ContentEngineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone / post frame */}
      <rect x="5" y="2" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
      {/* Image placeholder in post */}
      <rect x="7.5" y="5" width="9" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 10l2.5-2.5 2 2 1.5-1.5 1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Caption lines */}
      <path d="M7.5 14.5h9M7.5 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      {/* AI spark / star */}
      <path d="M19.5 2l.7 1.8L22 4.5l-1.8.7-.7 1.8-.7-1.8L17 4.5l1.8-.7z" fill="currentColor"/>
    </svg>
  );
}
