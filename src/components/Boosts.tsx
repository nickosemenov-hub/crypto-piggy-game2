interface BoostsProps {
  onBuyBoost: (type: 'x2' | 'x5') => void;
}

export const Boosts = ({ onBuyBoost }: BoostsProps) => {
  const boosts = [
    { type: 'x2', price: 0.5, duration: '1 день', icon: '⚡️', color: '#40a7e3' },
    { type: 'x5', price: 2, duration: '7 дней', icon: '🔥', color: 'linear-gradient(135deg, #FFD700, #FFA500)' }
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ 
        fontSize: '18px', 
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ fontSize: '24px' }}>⚡️</span>
        Ускорители
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
      }}>
        {boosts.map((boost) => (
          <div
            key={boost.type}
            onClick={() => onBuyBoost(boost.type as 'x2' | 'x5')}
            style={{
              background: 'var(--tg-theme-secondary-bg-color)',
              padding: '16px',
              borderRadius: '16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              border: boost.type === 'x5' ? '2px solid gold' : 'none',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="hover-scale"
          >
            {/* Анимированный фон для x5 */}
            {boost.type === 'x5' && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '60px',
                height: '60px',
                background: 'rgba(255,215,0,0.2)',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            )}
            
            <div style={{ fontSize: '36px', marginBottom: '8px' }}>
              {boost.icon}
            </div>
            <div style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '4px'
            }}>
              x{boost.type.replace('x', '')}
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--tg-theme-hint-color)',
              marginBottom: '8px'
            }}>
              {boost.duration}
            </div>
            <div style={{
              background: boost.color,
              color: boost.type === 'x5' ? '#000' : 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>
              {boost.price} TON
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
