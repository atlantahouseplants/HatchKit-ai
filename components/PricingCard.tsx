'use client';

import Link from 'next/link';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  setupFee: string;
  subtitle?: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  setupFee,
  subtitle,
  description,
  features,
  popular = false,
  ctaLabel = 'Get Started',
  ctaHref = '/demo/',
}: PricingCardProps) {
  return (
    <div
      className="card-hover"
      style={{
        background: popular ? '#102A43' : '#fff',
        border: popular ? '2px solid #2F80ED' : '1px solid rgba(16,42,67,0.1)',
        borderRadius: '8px',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {popular && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '-28px',
          background: '#00B8A9',
          color: '#fff',
          fontFamily: "var(--font-accent)",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '5px 40px',
          transform: 'rotate(45deg)',
        }}>
          Most Popular
        </div>
      )}

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: '20px',
          color: popular ? '#fff' : '#102A43',
          marginBottom: '4px',
        }}>
          {name}
        </h3>
        {subtitle && (
          <p style={{
            fontFamily: "var(--font-subheading)",
            fontWeight: 600,
            fontSize: '13px',
            color: popular ? '#B9FBC0' : '#2F80ED',
            marginBottom: '8px',
          }}>
            {subtitle}
          </p>
        )}
        <p style={{
          fontSize: '13px',
          color: popular ? 'rgba(255,255,255,0.65)' : '#777',
          lineHeight: 1.5,
        }}>
          {description}
        </p>
      </div>

      <div style={{ marginBottom: '4px' }}>
        <span style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: '44px',
          color: popular ? '#fff' : '#102A43',
          lineHeight: 1,
        }}>
          {price}
        </span>
        <span style={{
          fontSize: '15px',
          color: popular ? 'rgba(255,255,255,0.6)' : '#888',
          marginLeft: '4px',
        }}>
          /mo
        </span>
      </div>
      <p style={{
        fontSize: '13px',
        color: popular ? 'rgba(255,255,255,0.5)' : '#999',
        marginBottom: '28px',
      }}>
        + {setupFee} setup fee
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{
              flexShrink: 0,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: f.included
                ? (popular ? 'rgba(0,184,169,0.22)' : 'rgba(47,128,237,0.1)')
                : 'rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1px',
            }}>
              {f.included ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke={popular ? '#B9FBC0' : '#2F80ED'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 1L7 7M7 1L1 7" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </span>
            <span style={{
              fontSize: '14px',
              color: f.included
                ? (popular ? 'rgba(255,255,255,0.85)' : '#333')
                : (popular ? 'rgba(255,255,255,0.35)' : '#bbb'),
              lineHeight: 1.4,
            }}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '14px 20px',
          borderRadius: '10px',
          fontFamily: "var(--font-subheading)",
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
          background: popular ? '#2F80ED' : 'transparent',
          color: popular ? '#fff' : '#102A43',
          border: popular ? '2px solid #2F80ED' : '2px solid #2F80ED',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          if (popular) {
            el.style.background = '#00B8A9';
            el.style.borderColor = '#00B8A9';
          } else {
            el.style.background = '#2F80ED';
            el.style.color = '#fff';
          }
          el.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          if (popular) {
            el.style.background = '#2F80ED';
            el.style.borderColor = '#2F80ED';
            el.style.color = '#fff';
          } else {
            el.style.background = 'transparent';
            el.style.color = '#102A43';
          }
          el.style.transform = 'none';
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
