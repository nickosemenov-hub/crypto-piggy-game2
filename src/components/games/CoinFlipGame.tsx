import { useState } from 'react';

interface CoinFlipGameProps {
  userPoints: number;
  onPlay: (bet: number, isWin: boolean, winAmount: number) => void;
}

export const CoinFlipGame = ({ userPoints, onPlay }: CoinFlipGameProps) => {
  const [bet, setBet] = useState<number>(10);
  const [choice, setChoice] = useState<'heads' | 'tails'>('heads');
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);
  const [animation, setAnimation] = useState<'flipping' | 'result' | null>(null);

  const placeBet = () => {
    if (bet < 10) {
      alert('❌ Минимальная ставка: 10 поинтов');
      return;
    }
    if (bet > userPoints) {
      alert('❌ Недостаточно поинтов');
      return;
    }

    setIsPlaying(true);
    setAnimation('flipping');
    setResult(null);

    // Анимация подбрасывания
    setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
      setResult(flipResult);
      setAnimation('result');

      const isWin = flipResult === choice;
      const winAmount = isWin ? bet * 2 : 0;

      setTimeout(() => {
        onPlay(bet, isWin, winAmount);
        setIsPlaying(false);
        setAnimation(null);
      }, 1500);
    }, 2000);
  };

  return (
    <div style={{
      background: 'var(--tg-theme-secondary-bg-color)',
      borderRadius: '24px',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <h3 style={{ 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ fontSize: '24px' }}>🪙</span>
        Орёл и Решка
      </h3>

      {/* Анимация монетки */}
      <div style={{
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{
          fontSize: animation === 'flipping' ? '80px' : '100px',
          animation: animation === 'flipping' ? 'flipCoin 2s ease-in-out' : 'none',
          transform: result === 'heads' ? 'rotate(0deg)' : result === 'tails' ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.5s ease'
        }}>
          {animation === 'flipping' ? '🪙' : result === 'heads' ? '👑' : result === 'tails' ? '💫' : '🪙'}
        </div>
      </div>

      {/* Выбор стороны */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => setChoice('heads')}
          style={{
            padding: '16px',
            background: choice === 'heads' 
              ? 'linear-gradient(135deg, #FFD700, #FFA500)'
              : 'var(--tg-theme-bg-color)',
            color: choice === 'heads' ? '#000' : 'var(--tg-theme-text-color)',
            border: choice === 'heads' ? '2px solid gold' : '1px solid var(--tg-theme-hint-color)',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'var(--transition)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
          disabled={isPlaying}
        >
          <span style={{ fontSize: '32px' }}>👑</span>
          <span>ОРЁЛ</span>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>x2</span>
        </button>

        <button
          onClick={() => setChoice('tails')}
          style={{
            padding: '16px',
            background: choice === 'tails' 
              ? 'linear-gradient(135deg, #FFD700, #FFA500)'
              : 'var(--tg-theme-bg-color)',
            color: choice === 'tails' ? '#000' : 'var(--tg-theme-text-color)',
            border: choice === 'tails' ? '2px solid gold' : '1px solid var(--tg-theme-hint-color)',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'var(--transition)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
          disabled={isPlaying}
        >
          <span style={{ fontSize: '32px' }}>💫</span>
          <span>РЕШКА</span>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>x2</span>
        </button>
      </div>

      {/* Ставка */}
      <div style={{
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          color: 'var(--tg-theme-hint-color)'
        }}>
          <span>Ставка (мин. 10)</span>
          <span>Баланс: {userPoints} поинтов</span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '8px'
        }}>
          <input
            type="number"
            min="10"
            max={userPoints}
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
            disabled={isPlaying}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: '1px solid var(--tg-theme-hint-color)',
              background: 'var(--tg-theme-bg-color)',
              color: 'var(--tg-theme-text-color)',
              fontSize: '16px'
            }}
          />
          <button
            onClick={placeBet}
            disabled={isPlaying}
            style={{
              padding: '12px',
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: isPlaying ? 'not-allowed' : 'pointer',
              opacity: isPlaying ? 0.7 : 1
            }}
          >
            {isPlaying ? '🎲 ИГРАЕМ...' : '🎲 СДЕЛАТЬ СТАВКУ'}
          </button>
        </div>
      </div>

      {/* Выигрыш */}
      {result && animation === 'result' && (
        <div style={{
          padding: '16px',
          background: choice === result 
            ? 'linear-gradient(135deg, #4CAF50, #45a049)'
            : 'linear-gradient(135deg, #f44336, #d32f2f)',
          color: 'white',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          animation: 'pulse 0.5s ease-in-out'
        }}>
          {choice === result 
            ? `🎉 ВЫ ВЫИГРАЛИ ${bet * 2} ПОИНТОВ! 🎉` 
            : `😢 ВЫ ПРОИГРАЛИ ${bet} ПОИНТОВ`}
        </div>
      )}
    </div>
  );
};

// Добавляем стили для анимации
const style = document.createElement('style');
style.textContent = `
  @keyframes flipCoin {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(180deg); }
    50% { transform: rotate(360deg); }
    75% { transform: rotate(540deg); }
    100% { transform: rotate(720deg); }
  }
`;
document.head.appendChild(style);
