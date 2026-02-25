import { ReactNode, useEffect } from 'react';

interface PageProps {
  children: ReactNode;
  back?: boolean;
}

export const Page = ({ children, back = true }: PageProps) => {
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      if (back) {
        tg.BackButton.show();
        tg.BackButton.onClick(() => window.history.back());
      } else {
        tg.BackButton.hide();
      }
    }
  }, [back]);

  return (
    <div style={{
      background: 'var(--tg-theme-bg-color)',
      color: 'var(--tg-theme-text-color)',
      minHeight: '100vh',
      width: '100%',
      animation: 'fadeIn 0.3s ease',
      position: 'relative'
    }}>
      {children}
    </div>
  );
};

// Добавляем стили для анимации
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
