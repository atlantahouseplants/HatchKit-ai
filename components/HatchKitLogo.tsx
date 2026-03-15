'use client';

interface HatchKitLogoProps {
  size?: number;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function HatchKitLogo({ size = 40, variant = 'dark', showText = true }: HatchKitLogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1B5E20';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Egg body */}
        <ellipse
          cx="20"
          cy="22"
          rx="14"
          ry="16"
          fill="#1B5E20"
        />
        {/* Egg highlight */}
        <ellipse
          cx="15"
          cy="14"
          rx="4"
          ry="5"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Crack / lightning bolt */}
        <path
          d="M20 6 L17 14 L21 14 L18 22"
          stroke="#FF6F00"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Crack tip glow */}
        <circle cx="18" cy="22" r="1.5" fill="#FFA000" />
      </svg>

      {showText && (
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: size * 0.5,
            color: textColor,
            letterSpacing: '-0.5px',
          }}
        >
          HatchKit
        </span>
      )}
    </div>
  );
}
