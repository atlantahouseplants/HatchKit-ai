interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  subtitle?: string;
}

export default function TestimonialCard({ quote, name, business, subtitle }: TestimonialCardProps) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(16,42,67,0.1)',
      borderRadius: '8px',
      padding: '36px',
      maxWidth: '680px',
      margin: '0 auto',
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#2F80ED">
            <path d="M9 1L11.12 6.26H16.18L12.03 9.74L13.76 15L9 11.77L4.24 15L5.97 9.74L1.82 6.26H6.88L9 1Z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontSize: '19px',
        lineHeight: '1.65',
        color: '#102A43',
        fontStyle: 'italic',
        fontFamily: "var(--font-body)",
        marginBottom: '28px',
      }}>
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2F80ED, #00B8A9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontFamily: "var(--font-subheading)",
          fontWeight: 700,
          fontSize: '18px',
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{
            fontFamily: "var(--font-subheading)",
            fontWeight: 700,
            fontSize: '15px',
            color: '#102A43',
          }}>
            {name}
          </p>
          <p style={{
            fontSize: '13px',
            color: '#888',
          }}>
            {business}
          </p>
          {subtitle && (
            <p style={{
              fontSize: '12px',
              color: '#aaa',
              marginTop: '2px',
            }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
