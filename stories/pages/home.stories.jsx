import { SessionProvider } from 'next-auth/react';
import Home from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePageNotLoggedIn = () => (
  <SessionProvider session={null}>
    <Home />
  </SessionProvider>
);

export const HomePageLoggedIn = () => (
  <SessionProvider
    session={{
      user: {
        email: 'example@example.com',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIo9zw5uLmmB_BUiCiNwbrb_mnR7HdYqq-nw&usqp=CAU',
      },
    }}
  >
    <Home />
  </SessionProvider>
);
