'use client';

const steps = [
  { label: 'Sale Made', icon: '💰', detail: 'Order confirmed' },
  { label: 'Weather Check', icon: '🌡️', detail: '97°F in Phoenix' },
  { label: 'Species Check', icon: '🦎', detail: 'Crested gecko: max 85°F' },
  { label: 'Ship / Hold', icon: '📦', detail: 'HOLD — too hot' },
  { label: 'Customer Updated', icon: '📱', detail: 'SMS sent automatically' },
];

export default function ShippingFlowDiagram() {
  return (
    <div>
      {/* Flow diagram */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0',
        marginBottom: '40px',
      }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Step box */}
            <div
              className="card-hover"
              style={{
                background: i === 3
                  ? 'rgba(255,111,0,0.15)'
                  : i === 4
                  ? 'rgba(27,94,32,0.2)'
                  : 'rgba(255,255,255,0.07)',
                border: i === 3
                  ? '1px solid rgba(255,111,0,0.4)'
                  : i === 4
                  ? '1px solid rgba(27,200,32,0.4)'
                  : '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '16px 14px',
                textAlign: 'center',
                minWidth: '100px',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>{step.icon}</div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                color: '#fff',
                marginBottom: '4px',
              }}>
                {step.label}
              </div>
              <div style={{
                fontSize: '11px',
                color: i === 3 ? '#FFA000' : i === 4 ? '#4CAF50' : 'rgba(255,255,255,0.5)',
              }}>
                {step.detail}
              </div>
            </div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'relative',
                width: '40px',
                height: '2px',
                background: 'rgba(255,111,0,0.25)',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#FF6F00',
                  transform: 'translateY(-50%)',
                  animation: `flow-dot ${2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }} />
                {/* Arrow head */}
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderLeft: '6px solid rgba(255,111,0,0.5)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent',
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Example message */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '24px 28px',
        maxWidth: '580px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '14px',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#FF6F00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
          }}>
            📱
          </div>
          <div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              color: '#fff',
            }}>
              HatchKit SMS
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
              Sent automatically
            </div>
          </div>
        </div>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.65',
          color: 'rgba(255,255,255,0.85)',
          fontStyle: 'italic',
          borderLeft: '3px solid #FF6F00',
          paddingLeft: '16px',
        }}>
          &ldquo;Hey! We&apos;re keeping your crested gecko safe until Wednesday when temps drop to 82°F. We&apos;ll ship then — no action needed on your end. 🦎&rdquo;
        </p>
        <p style={{
          marginTop: '10px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.35)',
          textAlign: 'right',
        }}>
          — SunScale Geckos via HatchKit
        </p>
      </div>

      <style>{`
        @keyframes flow-dot {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 8px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
