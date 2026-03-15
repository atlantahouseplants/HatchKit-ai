'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQItem({ question, answer, index }: FAQItem & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: '16px',
          color: '#1A1A1A',
          lineHeight: 1.4,
        }}>
          {question}
        </span>
        <span style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: open ? '#1B5E20' : 'rgba(27,94,32,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease',
        }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: open ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          >
            <path
              d="M6 1V11M1 6H11"
              stroke={open ? '#fff' : '#1B5E20'}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.3s ease, opacity 0.25s ease',
        }}
      >
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#555',
          paddingBottom: '20px',
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
    }}>
      {items.map((item, i) => (
        <FAQItem key={i} {...item} index={i} />
      ))}
    </div>
  );
}
