'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HatchKitLogo from './HatchKitLogo';

const navLinks = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
    boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <HatchKitLogo
            size={36}
            variant={scrolled ? 'dark' : 'light'}
            showText={true}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '15px',
                color: scrolled ? '#1A1A1A' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = scrolled ? '#1B5E20' : '#FF6F00';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = scrolled ? '#1A1A1A' : 'rgba(255,255,255,0.9)';
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: '8px',
              background: '#FF6F00',
              color: '#fff',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#FFA000';
              el.style.transform = 'translateY(-1px)';
              el.style.boxShadow = '0 6px 20px rgba(255,111,0,0.35)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#FF6F00';
              el.style.transform = 'none';
              el.style.boxShadow = 'none';
            }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: scrolled ? '#1A1A1A' : '#fff',
                borderRadius: '2px',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(7px)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translateY(-7px)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '16px 24px 24px',
            animation: 'fadeIn 0.2s ease both',
            display: 'none',
          }}
          className="show-mobile-block"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                color: '#1A1A1A',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo/"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              padding: '14px 20px',
              borderRadius: '8px',
              background: '#FF6F00',
              color: '#fff',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Book a Free Demo
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block !important; }
        }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
