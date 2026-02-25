import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

export const TonConnect = () => {
  const wallet = useTonWallet();

  return (
    <div>
      <TonConnectButton />
      {wallet && (
        <div style={{ 
          fontSize: '12px', 
          color: '#666', 
          marginTop: '5px',
          textAlign: 'right'
        }}>
          Подключен: {wallet.account.address.slice(0, 6)}...{wallet.account.address.slice(-4)}
        </div>
      )}
    </div>
  );
};
