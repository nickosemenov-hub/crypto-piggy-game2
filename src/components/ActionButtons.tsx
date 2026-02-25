interface ActionButtonsProps {
  onDeposit: () => void;
  onWithdraw: () => void;
  isWalletConnected?: boolean;
}

export const ActionButtons = ({ 
  onDeposit, 
  onWithdraw, 
  isWalletConnected = false 
}: ActionButtonsProps) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '20px'
    }}>
      <button 
        onClick={onDeposit}
        style={{
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '16px',
          borderRadius: '16px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          opacity: isWalletConnected ? 1 : 0.7
        }}
      >
        📥 ПОПОЛНИТЬ
      </button>
      
      <button 
        onClick={onWithdraw}
        style={{
          background: '#f44336',
          color: 'white',
          border: 'none',
          padding: '16px',
          borderRadius: '16px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          opacity: isWalletConnected ? 1 : 0.7
        }}
      >
        📤 ВЫВЕСТИ
      </button>
    </div>
  );
};
