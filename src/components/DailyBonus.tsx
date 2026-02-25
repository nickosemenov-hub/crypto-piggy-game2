interface DailyBonusProps {
  onClaim: () => void;
  amount?: number;
  isAvailable?: boolean;
}

export const DailyBonus = ({ 
  onClaim, 
  amount = 50, 
  isAvailable = true 
}: DailyBonusProps) => {
  return (
    <div style={{
      background: isAvailable ? 'linear-gradient(135deg, #FFE5B4, #FFD700)' : '#f0f0f0',
      padding: '16px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '20px'
    }}>
      <div style={{ fontSize: '40px' }}>🎁</div>
      <div style={{ flex: 1 }}>
        <div style={{ 
          fontWeight: 'bold', 
          color: isAvailable ? '#000' : '#666'
        }}>
          Ежедневный бонус
        </div>
        <div style={{ 
          color: isAvailable ? '#333' : '#999'
        }}>
          {isAvailable ? `+${amount} поинтов сегодня!` : 'Бонус уже получен'}
        </div>
      </div>
      <button 
        onClick={onClaim}
        disabled={!isAvailable}
        style={{
          background: isAvailable ? '#000' : '#999',
          color: isAvailable ? '#FFD700' : '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          fontWeight: 'bold',
          cursor: isAvailable ? 'pointer' : 'not-allowed'
        }}
      >
        {isAvailable ? 'ЗАБРАТЬ' : 'ПОЛУЧЕНО'}
      </button>
    </div>
  );
};
