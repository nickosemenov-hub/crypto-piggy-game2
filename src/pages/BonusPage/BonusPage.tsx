import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useState, useEffect } from 'react';

const BonusPage = () => {
  const [dailyBonus, setDailyBonus] = useState({
    available: true,
    streak: 5,
    nextIn: '12 часов'
  });

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Подписаться на канал', reward: 100, completed: false, icon: '📢' },
    { id: 2, title: 'Пригласить друга', reward: 200, completed: false, icon: '👥' },
    { id: 3, title: 'Сделать депозит', reward: 500, completed: false, icon: '💰' },
    { id: 4, title: 'Сыграть 3 игры', reward: 150, completed: true, icon: '🎮' },
    { id: 5, title: 'Ежедневный вход', reward: 50, completed: false, icon: '📅' },
  ]);

  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Новичок', description: 'Пополнить счет впервые', reward: 100, progress: 100, icon: '🌱' },
    { id: 2, title: 'Игрок', description: 'Сыграть 10 игр', reward: 250, progress: 70, icon: '🎲' },
    { id: 3, title: 'Инвестор', description: 'Накопить 500 TON', reward: 1000, progress: 15, icon: '💎' },
    { id: 4, title: 'Друг', description: 'Пригласить 5 друзей', reward: 500, progress: 40, icon: '👥' },
  ]);

  const handleClaimDaily = () => {
    if (dailyBonus.available) {
      setDailyBonus({ ...dailyBonus, available: false });
      alert('✅ Ежедневный бонус получен! +50 поинтов');
    }
  };

  const handleCompleteTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    alert('✅ Задание выполнено! Награда получена');
  };

  return (
    <Page back={true}>
      <div style={{ padding: '16px' }}>
        
        {/* Шапка */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px'
        }}>
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
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            БОНУСЫ
          </h1>
        </div>

        {/* Ежедневный бонус */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px',
          borderRadius: '24px',
          marginBottom: '24px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '64px',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                🎁
              </div>
              <div>
                <h2 style={{ margin: '0 0 4px 0' }}>Ежедневный бонус</h2>
                <p style={{ margin: 0, opacity: 0.9 }}>День {dailyBonus.streak} подряд</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Следующий бонус</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{dailyBonus.nextIn}</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Награда</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>+50</div>
              </div>
            </div>

            <button
              onClick={handleClaimDaily}
              disabled={!dailyBonus.available}
              style={{
                width: '100%',
                padding: '16px',
                background: dailyBonus.available ? 'white' : '#ccc',
                color: dailyBonus.available ? '#667eea' : '#666',
                border: 'none',
                borderRadius: '16px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: dailyBonus.available ? 'pointer' : 'not-allowed',
                transition: 'var(--transition)'
              }}
            >
              {dailyBonus.available ? 'ЗАБРАТЬ БОНУС' : 'УЖЕ ПОЛУЧЕНО'}
            </button>
          </div>
        </div>

        {/* Задания */}
        <h2 style={{ 
          fontSize: '22px', 
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>📋</span>
          Ежедневные задания
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '24px'
        }}>
          {tasks.map(task => (
            <div
              key={task.id}
              style={{
                background: 'var(--tg-theme-secondary-bg-color)',
                padding: '16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                opacity: task.completed ? 0.7 : 1,
                transition: 'var(--transition)'
              }}
              className="hover-scale"
            >
              <div style={{
                background: task.completed ? '#4CAF50' : 'var(--tg-theme-bg-color)',
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                {task.completed ? '✅' : task.icon}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontWeight: 'bold',
                  marginBottom: '4px'
                }}>
                  {task.title}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--tg-theme-hint-color)',
                  fontSize: '14px'
                }}>
                  <span>🎁 +{task.reward}</span>
                  {task.completed && <span style={{ color: '#4CAF50' }}>✓ Выполнено</span>}
                </div>
              </div>

              {!task.completed && (
                <button
                  onClick={() => handleCompleteTask(task.id)}
                  style={{
                    padding: '8px 16px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  ВЫПОЛНИТЬ
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Достижения */}
        <h2 style={{ 
          fontSize: '22px', 
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>🏆</span>
          Достижения
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '24px'
        }}>
          {achievements.map(ach => (
            <div
              key={ach.id}
              style={{
                background: 'var(--tg-theme-secondary-bg-color)',
                padding: '16px',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {ach.progress === 100 && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '20px'
                }}>
                  ✅
                </div>
              )}
              
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>
                {ach.icon}
              </div>
              
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                {ach.title}
              </div>
              
              <div style={{
                fontSize: '12px',
                color: 'var(--tg-theme-hint-color)',
                marginBottom: '8px'
              }}>
                {ach.description}
              </div>

              {/* Прогресс-бар */}
              <div style={{
                width: '100%',
                height: '6px',
                background: 'var(--tg-theme-bg-color)',
                borderRadius: '3px',
                marginBottom: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${ach.progress}%`,
                  height: '100%',
                  background: ach.progress === 100 ? '#4CAF50' : 'linear-gradient(90deg, #FFD700, #FFA500)',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: 'var(--tg-theme-hint-color)'
              }}>
                <span>{ach.progress}%</span>
                <span>🎁 {ach.reward}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Пригласить друзей */}
        <div style={{
          background: 'linear-gradient(135deg, #4158D0 0%, #C850C0 50%, #FFCC70 100%)',
          padding: '24px',
          borderRadius: '24px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '10px' }}>👥</div>
          <h3 style={{ marginBottom: '8px' }}>Пригласи друзей</h3>
          <p style={{ marginBottom: '16px', opacity: 0.9 }}>
            Получай 10% от их пополнений
          </p>
          <button style={{
            padding: '12px 24px',
            background: 'white',
            color: '#4158D0',
            border: 'none',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }}
          className="hover-scale"
          >
            ПОЛУЧИТЬ ССЫЛКУ
          </button>
        </div>
      </div>
    </Page>
  );
};

export default BonusPage;
