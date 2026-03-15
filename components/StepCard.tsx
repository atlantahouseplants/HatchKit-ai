interface StepCardProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function StepCard({ number, title, description, isLast = false }: StepCardProps) {
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
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        boxShadow: '0 8px 24px rgba(27,94,32,0.25)',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: '22px',
          color: '#fff',
        }}>
          {number}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: '19px',
        color: '#1A1A1A',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '15px',
        lineHeight: '1.65',
        color: '#666',
        maxWidth: '240px',
      }}>
        {description}
      </p>
    </div>
  );
}
