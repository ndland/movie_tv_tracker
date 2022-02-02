import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

const onClick = jest.fn();

describe('Login form', () => {
  beforeEach(() => {
    render(<LoginForm onClick={onClick} />);
  });

  it('has a Username & Password field', () => {
    expect(
      screen.getByRole('textbox', { name: /username/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('has a button to submit the login request', () => {
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('calls the click handler when the login button is clicked', () => {
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(onClick).toHaveBeenCalled();
  });
});
