import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [user, setUser] = useState<any>({});
  const [bonusAvailable, setBonusAvailable] = useState(true);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      setUser(tg.initDataUnsafe?.user || {});
    }
  }, []);

  return (
    <Page back={false}>
      <div style={{ padding: '16px' }}>
        
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px 20px',
          borderRadius: '0 0 40px 40px',
          marginBottom: '30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          color: 'white'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite reverse'
          }} />
          
          <div style={{
            fontSize: '100px',
            marginBottom: '10px',
            animation: 'float 3s ease-in-out infinite',
            position: 'relative',
            zIndex: 1
          }}>
            🐷
          </div>
          
          <h1 style={{ 
            fontSize: '32px', 
            color: 'white',
            marginBottom: '8px',
            position: 'relative',
            zIndex: 1,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            КРИПТО-КОПИЛКА
          </h1>
          
          <p style={{ 
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            position: 'relative',
            zIndex: 1
          }}>
            Привет, {user.firstName || 'игрок'}! 👋
          </p>
        </div>

        <Link to="/bonus" style={{ textDecoration: 'none' }}>
          <div style={{
            background: bonusAvailable 
              ? 'linear-gradient(135deg, #FFE5B4, #FFD700)'
              : 'var(--tg-theme-secondary-bg-color)',
            padding: '16px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
            cursor: 'pointer',
            transition: 'var(--transition)',
            border: bonusAvailable ? '2px solid gold' : 'none',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="hover-scale"
          >
            {bonusAvailable && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            )}
            
            <div style={{
              fontSize: '48px',
              animation: bonusAvailable ? 'pulse 2s ease-in-out infinite' : 'none'
            }}>
              🎁
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: bonusAvailable ? '#000' : 'var(--tg-theme-text-color)',
                marginBottom: '4px'
              }}>
                {bonusAvailable ? '🎉 БОНУС ДОСТУПЕН!' : 'Ежедневные бонусы'}
              </div>
              <div style={{
                fontSize: '14px',
                color: bonusAvailable ? '#333' : 'var(--tg-theme-hint-color)'
              }}>
                {bonusAvailable 
                  ? '+50 поинтов сегодня! Забери сейчас' 
                  : 'Задания, достижения и награды'}
              </div>
            </div>
            
            <div style={{
              background: bonusAvailable ? '#000' : 'var(--tg-theme-button-color)',
              color: bonusAvailable ? '#FFD700' : 'white',
              padding: '8px 16px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {bonusAvailable ? 'ЗАБРАТЬ' : 'ОТКРЫТЬ'}
            </div>
          </div>
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              padding: '20px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              transition: 'var(--transition)',
              boxShadow: '0 4px 12px rgba(255,215,0,0.3)'
            }}
            className="hover-scale"
            >
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backdropFilter: 'blur(5px)'
              }}>
                🐷
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: 'white'
                }}>
                  МОЯ КОПИЛКА
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>💰 79/100 TON</span>
                  <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    +15%
                  </span>
                </div>
              </div>
              <div style={{ 
                color: 'white',
                fontSize: '20px'
              }}>
                →
              </div>
            </div>
          </Link>

          <Link to="/ton-connect" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #40a7e3, #2481cc)',
              padding: '20px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              transition: 'var(--transition)',
              boxShadow: '0 4px 12px rgba(64,167,227,0.3)'
            }}
            className="hover-scale"
            >
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backdropFilter: 'blur(5px)'
              }}>
                💎
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: 'white'
                }}>
                  TON КОШЕЛЕК
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px'
                }}>
                  Подключи и пополняй
                </div>
              </div>
              <div style={{ 
                color: 'white',
                fontSize: '20px'
              }}>
                →
              </div>
            </div>
          </Link>

          <Link to="/init-data" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #6B8CFF, #4B6AE0)',
              padding: '20px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              transition: 'var(--transition)',
              boxShadow: '0 4px 12px rgba(75,106,224,0.3)'
            }}
            className="hover-scale"
            >
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backdropFilter: 'blur(5px)'
              }}>
                👤
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: 'white'
                }}>
                  МОИ ДАННЫЕ
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px'
                }}>
                  {user.firstName ? `${user.firstName} ${user.lastName || ''}` : 'Информация профиля'}
                </div>
              </div>
              <div style={{ 
                color: 'white',
                fontSize: '20px'
              }}>
                →
              </div>
            </div>
          </Link>

          <Link to="/games" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              padding: '20px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              transition: 'var(--transition)',
              boxShadow: '0 4px 12px rgba(255,107,107,0.3)',
              marginTop: '8px'
            }}
            className="hover-scale"
            >
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backdropFilter: 'blur(5px)'
              }}>
                🎮
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: 'white'
                }}>
                  ИГРЫ
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px'
                }}>
                  Орёл/Решка • Лотерея
                </div>
              </div>
              <div style={{ 
                color: 'white',
                fontSize: '20px'
              }}>
                →
              </div>
            </div>
          </Link>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: 'var(--tg-theme-secondary-bg-color)',
          borderRadius: '24px'
        }}>
          <h2 style={{ 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--tg-theme-text-color)'
          }}>
            <span style={{ fontSize: '24px' }}>🎮</span>
            Быстрые игры
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}>
            <Link to="/games" style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '16px',
                background: 'var(--tg-theme-bg-color)',
                borderRadius: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              className="hover-scale"
              >
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>🎲</div>
                <div style={{ fontWeight: 'bold', color: 'var(--tg-theme-text-color)' }}>Орёл/Решка</div>
                <div style={{ fontSize: '12px', color: 'var(--tg-theme-hint-color)' }}>
                  x2 к выигрышу
                </div>
              </div>
            </Link>
            
            <Link to="/games" style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '16px',
                background: 'var(--tg-theme-bg-color)',
                borderRadius: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              className="hover-scale"
              >
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>🎰</div>
                <div style={{ fontWeight: 'bold', color: 'var(--tg-theme-text-color)' }}>Лотерея</div>
                <div style={{ fontSize: '12px', color: 'var(--tg-theme-hint-color)' }}>
                  Джекпот 1000 TON
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          color: 'var(--tg-theme-hint-color)',
          fontSize: '12px',
          padding: '20px',
          marginTop: '20px'
        }}>
          Версия 1.0.0 • Комиссия 5%
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;