'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const sizeStyles = {
    sm: { padding: '10px 20px', fontSize: '14px' },
    md: { padding: '14px 28px', fontSize: '15px' },
    lg: { padding: '18px 36px', fontSize: '17px' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: '#FF6F00',
      color: '#fff',
      border: '2px solid #FF6F00',
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.4)',
    },
    'outline-dark': {
      background: 'transparent',
      color: '#1B5E20',
      border: '2px solid #1B5E20',
    },
  };

  const hoverMap: Record<string, React.CSSProperties> = {
    primary: { background: '#FFA000', border: '2px solid #FFA000', boxShadow: '0 8px 24px rgba(255,111,0,0.4)', transform: 'translateY(-1px)' },
    outline: { background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.8)', transform: 'translateY(-1px)' },
    'outline-dark': { background: '#1B5E20', color: '#fff', transform: 'translateY(-1px)' },
  };

  return (
    <Link
      href={href}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      onMouseEnter={e => {
        const styles = hoverMap[variant];
        Object.assign((e.currentTarget as HTMLElement).style, styles);
      }}
      onMouseLeave={e => {
        Object.assign((e.currentTarget as HTMLElement).style, {
          ...variantStyles[variant],
          transform: 'none',
          boxShadow: 'none',
        });
      }}
    >
      {children}
    </Link>
  );
}
