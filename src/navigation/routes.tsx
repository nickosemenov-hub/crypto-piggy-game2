import IndexPage from '@/pages/IndexPage/IndexPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import TONConnectPage from '@/pages/TONConnectPage/TONConnectPage';
import BonusPage from '@/pages/BonusPage/BonusPage';
import InitDataPage from '@/pages/InitDataPage/InitDataPage';
import GamesPage from '@/pages/GamesPage/GamesPage';

export const routes = [
  {
    path: '/',
    element: <IndexPage />,
    title: 'Главная'
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Моя копилка'
  },
  {
    path: '/ton-connect',
    element: <TONConnectPage />,
    title: 'TON Connect'
  },
  {
    path: '/bonus',
    element: <BonusPage />,
    title: 'Бонусы'
  },
  {
    path: '/init-data',
    element: <InitDataPage />,
    title: 'Мои данные'
  },
  {
    path: '/games',
    element: <GamesPage />,
    title: 'Игры'
  }
];