import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { TonConnect } from '../../components/TonConnect';

const TONConnectPage = () => {
  return (
    <Page back={true}>
      <div style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#f0f0f0',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              cursor: 'pointer'
            }}>←</div>
          </Link>
          <h1 style={{ fontSize: '24px', margin: 0 }}>TON КОШЕЛЕК</h1>
          <div style={{ width: '40px' }} />
        </div>

        <div style={{
          background: '#f8f8f8',
          padding: '30px',
          borderRadius: '24px',
          textAlign: 'center'
        }}>
          <TonConnect />
          <p style={{ marginTop: '20px', color: '#666' }}>
            Подключи кошелек чтобы пополнять и выводить средства
          </p>
        </div>
      </div>
    </Page>
  );
};

export default TONConnectPage;
