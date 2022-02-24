import { SessionProvider } from 'next-auth/react';
import Index from '../../pages/index';

export default {
  title: 'Pages/Index',
  component: Index,
};

export const HomePageNotLoggedIn = () => (
  <SessionProvider session={null}>
    <Index />
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
    <Index />
  </SessionProvider>
);
