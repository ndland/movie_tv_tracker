import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import Home from './Home';

const session = {
  user: {
    email: 'test@test.com',
    image: 'http://test.com/image.png',
  },
};

describe('Home', () => {
  it('renders with the header', () => {
    render(
      <SessionProvider session={session}>
        <Home />
      </SessionProvider>
    );

    expect(screen.getByText('test@test.com')).toBeInTheDocument();
  });
});
