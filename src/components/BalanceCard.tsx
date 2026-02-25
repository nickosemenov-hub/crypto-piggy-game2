interface BalanceCardProps {
  points: number;
}

export const BalanceCard = ({ points }: BalanceCardProps) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      boxShadow: 'var(--card-shadow)',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}
    className="hover-scale"
    >
      {/* Декоративные элементы */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '-20px',
        width: '80px',
        height: '80px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%'
      }} />
      
      <span style={{ 
        fontSize: '16px', 
        fontWeight: '500',
        position: 'relative',
        zIndex: 1
      }}>
        🎮 Игровые поинты
      </span>
      <span style={{ 
        fontSize: '32px', 
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 1,
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
        {points.toLocaleString()}
      </span>
    </div>
  );
};
