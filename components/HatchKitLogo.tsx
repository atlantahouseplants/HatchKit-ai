'use client';

import Image from 'next/image';

interface HatchKitLogoProps {
  size?: number;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function HatchKitLogo({ size = 40, variant = 'dark', showText = true }: HatchKitLogoProps) {
  const eggStroke = variant === 'light' ? '#FFFFFF' : '#102A43';

  if (showText) {
    return (
      <div
        style={{
          alignItems: 'center',
          background: variant === 'light' ? 'rgba(255,255,255,0.94)' : 'transparent',
          border: variant === 'light' ? '1px solid rgba(255,255,255,0.55)' : 'none',
          borderRadius: '8px',
          display: 'inline-flex',
          padding: variant === 'light' ? '5px 8px' : 0,
        }}
      >
        <Image
          src="/hatchkit-logo-reference.png"
          alt="HatchKit"
          width={1134}
          height={380}
          priority
          style={{
            display: 'block',
            height: size,
            width: 'auto',
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16.2 27.2V35.8L5.3 31.1V19.9L16.2 27.2Z"
          fill="#102A43"
        />
        <path
          d="M17.8 27.2V35.8L42.7 31.1V19.9L17.8 27.2Z"
          fill="#2F80ED"
          transform="translate(0 0)"
        />
        <path
          d="M16.2 27.2L5.3 19.9L15.2 23.4L24 29.2L17.8 27.2L42.7 19.9L32.7 23.4L24 29.2"
          fill="#FFFFFF"
          opacity="0.96"
        />
        <path
          d="M11.2 21.1C10.9 10.8 16.1 3.9 23.9 3.9C31.6 3.9 36.9 10.8 36.6 21.1"
          stroke={eggStroke}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M8.9 20.1L14.2 24.4L20.1 20.3L25.8 24.4L31.6 20.3L37.7 23.9"
          stroke="#2F80ED"
          strokeWidth="3.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1 14.7L21.1 19.4L31 9.6"
          stroke="#00B8A9"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>
  );
}
