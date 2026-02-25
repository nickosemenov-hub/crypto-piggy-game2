import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useState } from 'react';
import { CoinFlipGame } from '../../components/games/CoinFlipGame';
import { LotteryGame } from '../../components/games/LotteryGame';

const GamesPage = () => {
  const [userPoints, setUserPoints] = useState(1250);
  const [gameHistory, setGameHistory] = useState<any[]>([]);
  const [activeGame, setActiveGame] = useState<'coinflip' | 'lottery'>('coinflip');

  const handleGamePlay = (game: string, bet: number, isWin: boolean, winAmount: number) => {
    const pointsChange = isWin ? winAmount - bet : -bet;
    setUserPoints(prev => prev + pointsChange);

    const newHistory = {
      id: Date.now(),
      game,
      bet,
      isWin,
      winAmount: isWin ? winAmount : 0,
      pointsChange,
      time: new Date().toLocaleTimeString()
    };
    setGameHistory(prev => [newHistory, ...prev.slice(0, 9)]);
  };

  return (
    <Page back={true}>
      <div style={{ padding: '16px' }}>
        
        {/* Шапка */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--tg-theme-secondary-bg-color)',
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                cursor: 'pointer',
                boxShadow: 'var(--card-shadow)'
              }}>
                ←
              </div>
            </Link>
            <h1 style={{ 
              fontSize: '28px',
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              ИГРЫ
            </h1>
          </div>
          
          <div style={{
            background: 'var(--tg-theme-secondary-bg-color)',
            padding: '8px 16px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>🎮</span>
            <span style={{ fontWeight: 'bold' }}>{userPoints}</span>
          </div>
        </div>

        {/* Переключатель игр */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginBottom: '20px',
          background: 'var(--tg-theme-secondary-bg-color)',
          padding: '6px',
          borderRadius: '16px'
        }}>
          <button
            onClick={() => setActiveGame('coinflip')}
            style={{
              padding: '12px',
              background: activeGame === 'coinflip' 
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'transparent',
              color: activeGame === 'coinflip' ? '#000' : 'var(--tg-theme-text-color)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            🪙 Орёл/Решка
          </button>
          <button
            onClick={() => setActiveGame('lottery')}
            style={{
              padding: '12px',
              background: activeGame === 'lottery' 
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'transparent',
              color: activeGame === 'lottery' ? '#000' : 'var(--tg-theme-text-color)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            🎰 Лотерея
          </button>
        </div>

        {/* Активная игра */}
        {activeGame === 'coinflip' ? (
          <CoinFlipGame 
            userPoints={userPoints}
            onPlay={(bet, isWin, winAmount) => handleGamePlay('Орёл/Решка', bet, isWin, winAmount)}
          />
        ) : (
          <LotteryGame 
            userPoints={userPoints}
            onPlay={(tickets, isWin, winAmount) => handleGamePlay('Лотерея', tickets * 10, isWin, winAmount)}
          />
        )}

        {/* История игр */}
        {gameHistory.length > 0 && (
          <div style={{
            background: 'var(--tg-theme-secondary-bg-color)',
            borderRadius: '20px',
            padding: '16px',
            marginTop: '20px'
          }}>
            <h3 style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '20px' }}>📜</span>
              История игр
            </h3>
            
            {gameHistory.map((game) => (
              <div
                key={game.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--tg-theme-hint-color)20'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>
                    {game.game === 'Орёл/Решка' ? '🪙' : '🎰'}
                  </span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {game.game}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--tg-theme-hint-color)' }}>
                      {game.time}
                    </div>
                  </div>
                </div>
                <div style={{
                  color: game.isWin ? '#4CAF50' : '#f44336',
                  fontWeight: 'bold'
                }}>
                  {game.isWin ? `+${game.winAmount}` : `-${game.bet}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Бонус за игру */}
        {gameHistory.length >= 3 && (
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'linear-gradient(135deg, #FFE5B4, #FFD700)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ fontSize: '40px' }}>🎁</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', color: '#000' }}>
                Бонус за активность!
              </div>
              <div style={{ fontSize: '14px', color: '#333' }}>
                Сыграй еще 2 игры и получи +50 поинтов
              </div>
            </div>
            <div style={{
              background: '#000',
              color: '#FFD700',
              padding: '8px 16px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {3 - gameHistory.length}/3
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default GamesPage;
