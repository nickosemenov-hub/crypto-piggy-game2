interface PiggyBankProps {
  currentTon: number;
  targetTon: number;
}

export const PiggyBank = ({ currentTon, targetTon }: PiggyBankProps) => {
  const percentage = (currentTon / targetTon) * 100;

  return (
    <div style={{
      background: 'var(--tg-theme-secondary-bg-color)',
      padding: '24px',
      borderRadius: '24px',
      textAlign: 'center',
      marginBottom: '20px',
      boxShadow: 'var(--card-shadow)',
      transition: 'var(--transition)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    }}
    className="hover-scale"
    >
      {/* Декоративный фон */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '120px',
        height: '120px',
        background: 'var(--gold-gradient)',
        borderRadius: '50%',
        opacity: '0.1',
        animation: 'float 3s ease-in-out infinite'
      }} />
      
      {/* Иконка свинки с анимацией */}
      <div style={{
        fontSize: '100px',
        marginBottom: '10px',
        animation: percentage >= 100 ? 'pulse 2s ease-in-out infinite' : 'float 3s ease-in-out infinite',
        transform: 'scaleX(-1)',
        filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.2))'
      }}>
        {percentage >= 100 ? '🐷💰' : '🐷'}
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          color: 'var(--tg-theme-hint-color)',
          fontSize: '14px'
        }}>
          <span>💰 Накоплено</span>
          <span>🎯 Цель</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'var(--tg-theme-text-color)',
          marginBottom: '12px'
        }}>
          <span style={{ color: '#4CAF50' }}>{currentTon} TON</span>
          <span style={{ color: '#FFA500' }}>{targetTon} TON</span>
        </div>
        
        {/* Прогресс-бар с градиентом */}
        <div style={{
          width: '100%',
          height: '24px',
          background: 'var(--tg-theme-bg-color)',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '10px',
            color: '#000',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'width 0.5s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {percentage >= 15 && `${Math.round(percentage)}%`}
            {/* Эффект блеска */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shimmer 2s infinite'
            }} />
          </div>
        </div>
      </div>

      {/* Сообщение о бонусе */}
      {percentage >= 100 && (
        <div style={{
          background: 'var(--gold-gradient)',
          color: '#000',
          padding: '12px',
          borderRadius: '12px',
          marginTop: '16px',
          fontWeight: 'bold',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          🎉 КОПИЛКА ПОЛНА! ПОЛУЧИ БОНУС 🎉
        </div>
      )}
    </div>
  );
};
