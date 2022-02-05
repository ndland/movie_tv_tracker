import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

const onClick = jest.fn();
const session = {
  user: {
    email: 'test@test.com',
    image: 'http://test.com/image.png',
  },
};

describe('Header', () => {
  beforeEach(() => {
    render(<Header onClick={onClick} session={session} />);
  });

  it('renders', () => {
    expect(
      screen.getByRole('button', { name: 'sign out' })
    ).toBeInTheDocument();
  });

  it('calls the onClick callback when the sign out button is clicked', () => {
    userEvent.click(screen.getByRole('button', { name: 'sign out' }));
    expect(onClick).toHaveBeenCalled();
  });

  it("displays the users email to show that they're logged in", () => {
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
  });

  it('renders an image of the user on the page', () => {
    const image = screen.getByAltText(/user image/i);
    expect(image.src).toBe(session.user.image);
  });
});
