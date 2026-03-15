'use client';

import Link from 'next/link';
import HatchKitLogo from './HatchKitLogo';

const navLinks = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Demo', href: '/demo/' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#111111',
      color: 'rgba(255,255,255,0.7)',
      padding: '64px 24px 40px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <HatchKitLogo size={36} variant="light" showText={true} />
            <p style={{
              marginTop: '16px',
              fontSize: '14px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '240px',
            }}>
              The AI-powered growth platform built specifically for reptile breeders.
            </p>
            <p style={{
              marginTop: '12px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.35)',
              fontStyle: 'italic',
            }}>
              Built with love for the reptile community.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '16px',
            }}>
              Platform
            </h4>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6F00')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '16px',
            }}>
              Get in Touch
            </h4>
            <p style={{ fontSize: '14px', marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>
              Text us: (555) 000-0000
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
              hello@hatchkit.ai
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {['Instagram', 'Facebook', 'YouTube'].map(social => (
                <a
                  key={social}
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background 0.15s ease, color 0.15s ease',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#FF6F00';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  }}
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} HatchKit. All rights reserved.
          </p>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
          }}>
            Powered by AI. Built by breeders.
          </p>
        </div>
      </div>
    </footer>
  );
}
