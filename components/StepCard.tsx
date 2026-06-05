interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* Number circle */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2F80ED 0%, #00B8A9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        boxShadow: '0 8px 24px rgba(47,128,237,0.24)',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{
          fontFamily: "var(--font-accent)",
          fontWeight: 800,
          fontSize: '22px',
          color: '#fff',
        }}>
          {number}
        </span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: '19px',
        color: '#102A43',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '15px',
        lineHeight: '1.65',
        color: '#52606D',
        maxWidth: '240px',
      }}>
        {description}
      </p>
    </div>
  );
}
