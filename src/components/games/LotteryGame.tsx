import { useState } from 'react';

interface LotteryGameProps {
  userPoints: number;
  onPlay: (tickets: number, isWin: boolean, winAmount: number) => void;
}

export const LotteryGame = ({ userPoints, onPlay }: LotteryGameProps) => {
  const [tickets, setTickets] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);

  const ticketPrice = 10;
  const maxTickets = 5;
  const totalCost = tickets * ticketPrice;

  const generateNumbers = () => {
    const nums: number[] = [];
    while (nums.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!nums.includes(num)) {
        nums.push(num);
      }
    }
    return nums.sort((a, b) => a - b);
  };

  const buyTickets = () => {
    if (totalCost > userPoints) {
      alert('❌ Недостаточно поинтов');
      return;
    }
    if (tickets < 1 || tickets > maxTickets) {
      alert(`❌ Можно купить от 1 до ${maxTickets} билетов`);
      return;
    }

    setIsPlaying(true);
    setShowResult(false);
    
    // Генерируем числа для билетов
    const newNumbers: number[] = [];
    for (let i = 0; i < tickets * 6; i++) {
      newNumbers.push(Math.floor(Math.random() * 49) + 1);
    }
    setNumbers(newNumbers);

    // Генерируем выигрышные числа
    const winNums = generateNumbers();
    setWinningNumbers(winNums);

    // Анимация розыгрыша
    setTimeout(() => {
      // Считаем совпадения
      let matchCount = 0;
      for (let i = 0; i < newNumbers.length; i++) {
        if (winNums.includes(newNumbers[i])) {
          matchCount++;
        }
      }
      setMatches(matchCount);

      // Рассчитываем выигрыш
      let winAmount = 0;
      if (matchCount > 0) {
        const prizes = [0, 2, 5, 20, 100, 500, 10000];
        winAmount = prizes[matchCount] * tickets * 10;
      }

      setShowResult(true);
      
      setTimeout(() => {
        onPlay(tickets, matchCount > 0, winAmount);
        setIsPlaying(false);
      }, 3000);
    }, 2000);
  };

  const getPrizeText = (matches: number) => {
    const prizes = ['0', 'x2', 'x5', 'x20', 'x100', 'x500', 'ДЖЕКПОТ 10000'];
    return prizes[matches] || '0';
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
        <span style={{ fontSize: '24px' }}>🎰</span>
        Лотерея
      </h3>

      {/* Анимация лотереи */}
      <div style={{
        minHeight: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        background: 'var(--tg-theme-bg-color)',
        borderRadius: '16px',
        padding: '16px'
      }}>
        {!isPlaying && !showResult && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>🎰</div>
            <div style={{ color: 'var(--tg-theme-hint-color)' }}>
              Купи билеты и выиграй джекпот!
            </div>
          </div>
        )}

        {isPlaying && !showResult && (
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {numbers.map((num, i) => (
              <div
                key={i}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  animation: `pulse ${1 + i * 0.1}s ease-in-out infinite`
                }}
              >
                {num}
              </div>
            ))}
          </div>
        )}

        {showResult && (
          <div style={{ width: '100%' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              {winningNumbers.map((num, i) => (
                <div
                  key={i}
                  style={{
                    width: '45px',
                    height: '45px',
                    background: matches > 0 ? '#4CAF50' : '#f44336',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: '16px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
            
            <div style={{
              padding: '12px',
              background: matches > 0 
                ? 'linear-gradient(135deg, #4CAF50, #45a049)'
                : 'linear-gradient(135deg, #f44336, #d32f2f)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {matches > 0 
                ? `🎉 Совпадений: ${matches}! Выигрыш x${matches}! 🎉` 
                : '😢 Нет совпадений. Повезёт в следующий раз!'}
            </div>
          </div>
        )}
      </div>

      {/* Таблица выигрышей */}
      <div style={{
        background: 'var(--tg-theme-bg-color)',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          textAlign: 'center',
          fontSize: '12px'
        }}>
          <div><strong>1 совпад.</strong> 🎁 x2</div>
          <div><strong>2 совпад.</strong> 🎁 x5</div>
          <div><strong>3 совпад.</strong> 🎁 x20</div>
          <div><strong>4 совпад.</strong> 🎁 x100</div>
          <div><strong>5 совпад.</strong> 🎁 x500</div>
          <div><strong>6 совпад.</strong> 🎁 ДЖЕКПОТ</div>
        </div>
      </div>

      {/* Покупка билетов */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          color: 'var(--tg-theme-hint-color)'
        }}>
          <span>Количество билетов (1-5)</span>
          <span>Цена: {ticketPrice} поинтов</span>
        </div>

        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <button
            onClick={() => setTickets(Math.max(1, tickets - 1))}
            disabled={isPlaying || tickets <= 1}
            style={{
              width: '50px',
              padding: '12px',
              background: 'var(--tg-theme-button-color)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              opacity: isPlaying || tickets <= 1 ? 0.5 : 1
            }}
          >-</button>
          
          <div style={{
            flex: 1,
            background: 'var(--tg-theme-bg-color)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            {tickets}
          </div>
          
          <button
            onClick={() => setTickets(Math.min(maxTickets, tickets + 1))}
            disabled={isPlaying || tickets >= maxTickets}
            style={{
              width: '50px',
              padding: '12px',
              background: 'var(--tg-theme-button-color)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              opacity: isPlaying || tickets >= maxTickets ? 0.5 : 1
            }}
          >+</button>
        </div>

        <button
          onClick={buyTickets}
          disabled={isPlaying}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            color: '#000',
            border: 'none',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: isPlaying ? 'not-allowed' : 'pointer',
            opacity: isPlaying ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isPlaying ? (
            '🎲 РОЗЫГРЫШ...'
          ) : (
            <>
              🎰 КУПИТЬ {tickets} {tickets === 1 ? 'БИЛЕТ' : 'БИЛЕТОВ'} ЗА {totalCost} ПОИНТОВ
            </>
          )}
        </button>
      </div>
    </div>
  );
};
