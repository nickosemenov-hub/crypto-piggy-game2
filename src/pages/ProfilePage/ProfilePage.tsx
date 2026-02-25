import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useState } from 'react';
import { TonConnect } from '../../components/TonConnect';
import { PiggyBank } from '../../components/PiggyBank';
import { BalanceCard } from '../../components/BalanceCard';
import { ActionButtons } from '../../components/ActionButtons';
import { DailyBonus } from '../../components/DailyBonus';
import { Boosts } from '../../components/Boosts';

const ProfilePage = () => {
  const [piggyData, setPiggyData] = useState({
    currentTon: 79,
    targetTon: 100,
    points: 1250
  });

  const [bonusAvailable, setBonusAvailable] = useState(true);

  const handleDeposit = () => {
    alert('🔜 Пополнение скоро будет доступно');
  };

  const handleWithdraw = () => {
    alert('🔜 Вывод скоро будет доступен');
  };

  const handleClaimBonus = () => {
    setBonusAvailable(false);
    setPiggyData(prev => ({
      ...prev,
      points: prev.points + 50
    }));
    alert('✅ +50 поинтов получено!');
  };

  const handleBuyBoost = (type: 'x2' | 'x5') => {
    const cost = type === 'x2' ? 0.5 : 2;
    alert(`🔜 Покупка буста ${type} за ${cost} TON`);
  };

  return (
    <Page back={true}>
      <div style={{ padding: '16px' }}>
        
        {/* Шапка с TON Connect */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '8px 0'
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
              transition: 'var(--transition)',
              boxShadow: 'var(--card-shadow)'
            }}
            className="hover-scale"
            >
              ←
            </div>
          </Link>
          <TonConnect />
        </div>

        <h1 style={{ 
          fontSize: '28px', 
          marginBottom: '24px',
          background: 'var(--gold-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          МОЯ КОПИЛКА
        </h1>

        <PiggyBank 
          currentTon={piggyData.currentTon} 
          targetTon={piggyData.targetTon} 
        />

        <BalanceCard points={piggyData.points} />

        <ActionButtons 
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
        />

        <DailyBonus 
          onClaim={handleClaimBonus}
          isAvailable={bonusAvailable}
        />

        <Boosts onBuyBoost={handleBuyBoost} />

        {/* История транзакций */}
        <div style={{
          background: 'var(--tg-theme-secondary-bg-color)',
          padding: '16px',
          borderRadius: '16px',
          marginTop: '20px'
        }}>
          <h3 style={{ 
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>📋</span>
            Последние операции
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: '1px solid var(--tg-theme-hint-color)20'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>📥</span>
              <div>
                <div style={{ fontWeight: '600' }}>Пополнение</div>
                <div style={{ color: 'var(--tg-theme-hint-color)', fontSize: '12px' }}>Сегодня</div>
              </div>
            </div>
            <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>+10 TON</div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>🎮</span>
              <div>
                <div style={{ fontWeight: '600' }}>Выигрыш</div>
                <div style={{ color: 'var(--tg-theme-hint-color)', fontSize: '12px' }}>Вчера</div>
              </div>
            </div>
            <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>+250 поинтов</div>
          </div>
        </div>

        {/* Комиссия */}
        <div style={{
          textAlign: 'center',
          color: 'var(--tg-theme-hint-color)',
          fontSize: '12px',
          padding: '20px',
          marginTop: '10px'
        }}>
          Комиссия при выводе: 5% • Мин. сумма: 10 TON
        </div>
      </div>
    </Page>
  );
};

export default ProfilePage;
