import Home from './Home';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'Components/Home',
  component: Home,
};

const session = {
  user: {
    email: 'example@example.com',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIo9zw5uLmmB_BUiCiNwbrb_mnR7HdYqq-nw&usqp=CAU',
  },
};

export const Default = () => (
  <SessionProvider session={session}>
    <Home />
  </SessionProvider>
);
