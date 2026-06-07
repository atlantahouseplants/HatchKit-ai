import Link from 'next/link';
import HatchKitLogo from './HatchKitLogo';

const productLinks = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Talk to Brianna', href: '/demo/' },
];

const companyLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
];

const socialLinks = [
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
              hello@hatchkit.ai
            </p>
            <div
              aria-label="HatchKit social media links"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '18px',
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.78)',
                    display: 'inline-flex',
                    fontFamily: 'var(--font-subheading)',
                    fontSize: '13px',
                    fontWeight: 800,
                    minHeight: '36px',
                    padding: '0 11px',
                    textDecoration: 'none',
                  }}
                >
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
        @media (max-width: 820px) {
          .hk-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
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
