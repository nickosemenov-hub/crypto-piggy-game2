import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useEffect, useState } from 'react';

const InitDataPage = () => {
  const [userData, setUserData] = useState<any>(null);
  const [startParam, setStartParam] = useState<string>('');
  const [chatType, setChatType] = useState<string>('');

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      setUserData(tg.initDataUnsafe?.user || null);
      setStartParam(tg.initDataUnsafe?.start_param || '');
      setChatType(tg.initDataUnsafe?.chat_type || '');
      
      // Показываем все данные в консоли для отладки
      console.log('Telegram Init Data:', tg.initDataUnsafe);
    }
  }, []);

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
            background: 'linear-gradient(135deg, #6B8CFF, #4B6AE0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            МОИ ДАННЫЕ
          </h1>
        </div>

        {/* Карточка пользователя */}
        <div style={{
          background: 'linear-gradient(135deg, #6B8CFF, #4B6AE0)',
          padding: '30px 20px',
          borderRadius: '24px',
          marginBottom: '24px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }} />
          
          <div style={{
            fontSize: '80px',
            marginBottom: '16px',
            position: 'relative',
            zIndex: 1,
            animation: 'float 3s ease-in-out infinite'
          }}>
            👤
          </div>
          
          <h2 style={{ 
            margin: '0 0 8px 0',
            position: 'relative',
            zIndex: 1,
            fontSize: '24px'
          }}>
            {userData?.first_name || 'Пользователь'} {userData?.last_name || ''}
          </h2>
          
          {userData?.username && (
            <p style={{ 
              margin: 0,
              position: 'relative',
              zIndex: 1,
              opacity: 0.9
            }}>
              @{userData.username}
            </p>
          )}
        </div>

        {/* Детальная информация */}
        <div style={{
          background: 'var(--tg-theme-secondary-bg-color)',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '16px'
        }}>
          <h3 style={{ 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>📋</span>
            Детальная информация
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <InfoRow label="ID" value={userData?.id || '—'} />
            <InfoRow label="Имя" value={userData?.first_name || '—'} />
            <InfoRow label="Фамилия" value={userData?.last_name || '—'} />
            <InfoRow label="Username" value={userData?.username ? '@' + userData.username : '—'} />
            <InfoRow label="Язык" value={userData?.language_code || '—'} />
            <InfoRow label="Start Param" value={startParam || '—'} />
            <InfoRow label="Тип чата" value={chatType || '—'} />
            <InfoRow label="Премиум" value={userData?.is_premium ? '✅ Да' : '❌ Нет'} />
          </div>
        </div>

        {/* Информация о приложении */}
        <div style={{
          background: 'var(--tg-theme-secondary-bg-color)',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '16px'
        }}>
          <h3 style={{ 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>ℹ️</span>
            О приложении
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <InfoRow label="Версия" value="1.0.0" />
            <InfoRow label="Платформа" value={getPlatform()} />
            <InfoRow label="Окружение" value={isTelegramEnvironment() ? 'Telegram' : 'Браузер'} />
          </div>
        </div>

        {/* Кнопки действий */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginTop: '20px'
        }}>
          <button
            onClick={() => navigator.clipboard.writeText(JSON.stringify(userData, null, 2))}
            style={{
              padding: '16px',
              background: 'linear-gradient(135deg, #6B8CFF, #4B6AE0)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📋 КОПИРОВАТЬ
          </button>
          
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '16px',
              background: 'var(--tg-theme-button-color)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🔄 ОБНОВИТЬ
          </button>
        </div>
      </div>
    </Page>
  );
};

// Компонент для отображения строки информации
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid var(--tg-theme-hint-color)20'
  }}>
    <span style={{ color: 'var(--tg-theme-hint-color)' }}>{label}</span>
    <span style={{ 
      fontWeight: 'bold',
      color: 'var(--tg-theme-text-color)',
      textAlign: 'right'
    }}>
      {value}
    </span>
  </div>
);

// Функция для определения платформы
const getPlatform = () => {
  const tg = (window as any).Telegram?.WebApp;
  if (tg?.platform) {
    const platforms: Record<string, string> = {
      ios: 'iOS',
      android: 'Android',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      web: 'Web'
    };
    return platforms[tg.platform] || tg.platform;
  }
  return navigator.userAgent.includes('Mac') ? 'macOS' : 
         navigator.userAgent.includes('Windows') ? 'Windows' : 
         navigator.userAgent.includes('Linux') ? 'Linux' : 'Unknown';
};

// Функция для проверки окружения
const isTelegramEnvironment = () => {
  return !!(window as any).Telegram?.WebApp;
};

export default InitDataPage;
