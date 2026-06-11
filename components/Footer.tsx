import Link from 'next/link';
import HatchKitLogo from './HatchKitLogo';

const productLinks = [
  { label: 'Try It Live', href: '/experience/' },
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Shows & Expos', href: '/show/' },
  { label: 'Book a Demo Call', href: '/demo/' },
];

const companyLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
];

const socialLinks: Array<{ label: SocialIconName; href: string }> = [
  { label: 'YouTube', href: 'https://www.youtube.com/@hatch_kit' },
  { label: 'Instagram', href: 'https://www.instagram.com/hatch_kit' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1Dj5PxUyMU/' },
  { label: 'X', href: 'https://x.com/hatch_kit' },
];

export default function Footer() {
  return (
    <footer
      className="scale-pattern"
      style={{
        background: '#102A43',
        color: 'rgba(255,255,255,0.72)',
        padding: '72px 24px 104px',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <div
          style={{
            display: 'grid',
            gap: '48px',
            gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(3, minmax(160px, 1fr))',
          }}
          className="hk-footer-grid"
        >
          <div>
            <HatchKitLogo size={44} variant="light" showText />
            <p
              style={{
                color: 'rgba(255,255,255,0.62)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginTop: '18px',
                maxWidth: '320px',
              }}
            >
              Business software for breeders who need organized lead capture, safer shipping,
              customer follow-up, and social content without adding more apps.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <h4 style={footerHeadingStyle}>Contact</h4>
            <p style={{ color: 'rgba(255,255,255,0.64)', fontSize: '14px' }}>
              brianna@hatchkitai.com
            </p>
            <div
              aria-label="HatchKit social media links"
              style={{
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                marginTop: '18px',
              }}
              className="hk-social-links"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.78)',
                    display: 'inline-flex',
                    fontFamily: 'var(--font-subheading)',
                    fontSize: '13px',
                    gap: '9px',
                    fontWeight: 800,
                    minHeight: '42px',
                    padding: '0 12px',
                    textDecoration: 'none',
                    transition: 'background 0.16s ease, border-color 0.16s ease, color 0.16s ease',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      alignItems: 'center',
                      background: 'rgba(0,184,169,0.14)',
                      borderRadius: '8px',
                      color: '#7BE3D8',
                      display: 'inline-flex',
                      flexShrink: 0,
                      height: '26px',
                      justifyContent: 'center',
                      width: '26px',
                    }}
                  >
                    <SocialIcon name={link.label} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.42)',
                fontFamily: 'var(--font-accent)',
                fontSize: '13px',
                fontWeight: 600,
                marginTop: '16px',
              }}
            >
              Lead follow-up + shipping safety + content help
            </p>
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'space-between',
            marginTop: '56px',
            paddingTop: '24px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '13px' }}>
            Copyright {new Date().getFullYear()} HatchKit. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '13px' }}>
            Built for breeder businesses, not pet-store shelves.
          </p>
        </div>
      </div>

      <style>{`
        .hk-social-links a:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(0,184,169,0.45) !important;
          color: #ffffff !important;
        }

        @media (max-width: 820px) {
          .hk-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

type SocialIconName = 'YouTube' | 'Instagram' | 'Facebook' | 'X';

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === 'YouTube') {
    return (
      <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
        <path
          d="M21 8.3c-.2-1.1-.9-1.9-2-2.1C17.4 5.8 12 5.8 12 5.8s-5.4 0-7 .4c-1.1.2-1.8 1-2 2.1-.3 1.7-.3 3.7-.3 3.7s0 2 .3 3.7c.2 1.1.9 1.9 2 2.1 1.6.4 7 .4 7 .4s5.4 0 7-.4c1.1-.2 1.8-1 2-2.1.3-1.7.3-3.7.3-3.7s0-2-.3-3.7Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="m10.2 9.2 4.7 2.8-4.7 2.8V9.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === 'Instagram') {
    return (
      <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
        <rect height="16.5" rx="5" stroke="currentColor" strokeWidth="1.8" width="16.5" x="3.75" y="3.75" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7.1" fill="currentColor" r="1.1" />
      </svg>
    );
  }

  if (name === 'Facebook') {
    return (
      <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
        <path
          d="M14.2 8.1h2.4V4.5c-.4-.1-1.8-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7v3.2H4.5v4h3.3v6h4.1v-6h3.2l.5-4h-3.7V10.4c0-1.1.3-2.3 2.3-2.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
      <path d="m4.5 4.8 6.7 8.5-6.3 6.9h2.6l4.4-4.9 3.9 4.9h4.1l-7-8.9 5.8-6.5h-2.6l-4 4.5-3.5-4.5H4.5Z" fill="currentColor" />
    </svg>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 style={footerHeadingStyle}>{title}</h4>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            color: 'rgba(255,255,255,0.62)',
            display: 'block',
            fontSize: '14px',
            marginBottom: '10px',
            textDecoration: 'none',
          }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

const footerHeadingStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.46)',
  fontFamily: 'var(--font-accent)',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: 0,
  marginBottom: '16px',
  textTransform: 'uppercase',
};
