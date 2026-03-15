import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: boolean;
}

export default function FeatureCard({ icon, title, description, accent = false }: FeatureCardProps) {
  return (
    <div
      className="card-hover"
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '16px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: accent ? 'rgba(255,111,0,0.1)' : 'rgba(27,94,32,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accent ? '#FF6F00' : '#1B5E20',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: '17px',
        color: '#1A1A1A',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        lineHeight: '1.7',
        color: '#555555',
      }}>
        {description}
      </p>
    </div>
  );
}
