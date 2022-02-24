import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SocialButton from './SocialButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import userEvent from '@testing-library/user-event';

describe('Social Button', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    render(
      <SocialButton
        textColor="text-white"
        buttonText="Sign in with Github!"
        buttonColor="bg-slate-500"
        Icon={<FontAwesomeIcon icon={faGithub} alt="Github Icon" inverse />}
        onClick={onClick}
      />
    );
  });

  it('should be a button', () => {
    expect(
      screen.getByRole('button', { name: /social button/i })
    ).toBeInTheDocument();
  });

  it('should render the name of the social platform on the button', () => {
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });

  it('should render an image of the socal platform', () => {
    waitFor(() => {
      expect(screen.findByAltText(/github icon/i)).toBeInTheDocument();
    });
  });

  it("should trigger an 'onClick' event handler when the button is clicked", () => {
    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should take in a class prop to dynamically style the button', () => {
    expect(screen.getByRole('button')).toHaveClass('bg-slate-500');
  });
});
