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
        border: '1px solid rgba(16,42,67,0.1)',
        borderRadius: '8px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        background: accent ? 'rgba(0,184,169,0.1)' : 'rgba(47,128,237,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accent ? '#00B8A9' : '#2F80ED',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: '17px',
        color: '#102A43',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        lineHeight: '1.7',
        color: '#52606D',
      }}>
        {description}
      </p>
    </div>
  );
}
