'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HatchKitLogo from './HatchKitLogo';

const navLinks = [
  { label: 'Live Demo', href: '/experience/' },
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textColor = scrolled || mobileOpen ? '#102A43' : 'rgba(255,255,255,0.9)';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled || mobileOpen ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: scrolled || mobileOpen ? '1px solid rgba(16,42,67,0.1)' : '1px solid transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(14px)' : 'none',
        transition: 'background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '72px',
          justifyContent: 'space-between',
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '0 24px',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
          <HatchKitLogo size={42} variant={scrolled || mobileOpen ? 'dark' : 'light'} showText />
        </Link>

        <div className="hk-nav-desktop" style={{ alignItems: 'center', display: 'flex', gap: '30px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: textColor,
                fontFamily: 'var(--font-subheading)',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo/"
            className="hk-button hk-button-primary"
            style={{ minHeight: '42px', padding: '0 18px' }}
          >
            Get a Free Demo
          </Link>
        </div>

        <button
          className="hk-nav-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          style={{
            alignItems: 'center',
            background: scrolled || mobileOpen ? 'rgba(16,42,67,0.06)' : 'rgba(255,255,255,0.1)',
            border: scrolled || mobileOpen ? '1px solid rgba(16,42,67,0.12)' : '1px solid rgba(255,255,255,0.18)',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'none',
            height: '42px',
            justifyContent: 'center',
            width: '42px',
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            style={{
              background: textColor,
              borderRadius: '999px',
              boxShadow: `0 ${mobileOpen ? 0 : 7}px 0 ${textColor}, 0 ${mobileOpen ? 0 : -7}px 0 ${textColor}`,
              display: 'block',
              height: '2px',
              transform: mobileOpen ? 'rotate(45deg)' : 'none',
              transition: 'box-shadow 0.18s ease, transform 0.18s ease',
              width: '20px',
            }}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="hk-nav-mobile"
          style={{
            background: '#ffffff',
            borderTop: '1px solid rgba(16,42,67,0.1)',
            display: 'none',
            padding: '8px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                borderBottom: '1px solid rgba(16,42,67,0.08)',
                color: '#102A43',
                display: 'block',
                fontFamily: 'var(--font-subheading)',
                fontSize: '16px',
                fontWeight: 700,
                padding: '15px 0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo/"
            className="hk-button hk-button-primary"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: '18px' }}
          >
            Get a Free Demo
          </Link>
        </div>
      )}

      <style>{`
        .hk-nav-desktop a:hover {
          color: #00B8A9 !important;
        }

        @media (max-width: 767px) {
          .hk-nav-desktop {
            display: none !important;
          }

          .hk-nav-toggle {
            display: flex !important;
          }

          .hk-nav-mobile {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
