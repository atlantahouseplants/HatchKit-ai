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
        background: popular ? '#1B5E20' : '#fff',
        border: popular ? '2px solid #1B5E20' : '1px solid rgba(0,0,0,0.08)',
        borderRadius: '20px',
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
          background: '#FF6F00',
          color: '#fff',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: '20px',
          color: popular ? '#fff' : '#1A1A1A',
          marginBottom: '8px',
        }}>
          {name}
        </h3>
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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: '44px',
          color: popular ? '#fff' : '#1A1A1A',
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
                ? (popular ? 'rgba(255,111,0,0.25)' : 'rgba(27,94,32,0.1)')
                : 'rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1px',
            }}>
              {f.included ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke={popular ? '#FF6F00' : '#1B5E20'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
          background: popular ? '#FF6F00' : 'transparent',
          color: popular ? '#fff' : '#1B5E20',
          border: popular ? '2px solid #FF6F00' : '2px solid #1B5E20',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          if (popular) {
            el.style.background = '#FFA000';
            el.style.borderColor = '#FFA000';
          } else {
            el.style.background = '#1B5E20';
            el.style.color = '#fff';
          }
          el.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          if (popular) {
            el.style.background = '#FF6F00';
            el.style.borderColor = '#FF6F00';
            el.style.color = '#fff';
          } else {
            el.style.background = 'transparent';
            el.style.color = '#1B5E20';
          }
          el.style.transform = 'none';
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
