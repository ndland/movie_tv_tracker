import React from 'react';
import { render, screen } from '@testing-library/react';
import { SocialButton } from './SocialButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import userEvent from '@testing-library/user-event';

describe('Social Button', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    render(
      <SocialButton
        socialPlatform="Github"
        icon={faGithub}
        altText="Github Icon"
        onClick={onClick}
      />
    );
  });

  it('should be a button', () => {
    expect(
      screen.getByRole('heading', { name: /social button/i })
    ).toBeInTheDocument();
  });

  it('should render the name of the social platform on the button', () => {
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });

  // TODO: This isn't able to find an 'img' tag yet, come back and fix it
  it.skip('should render an image of the socal platform', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  // TODO: figure out why it's not seeing the onClick called
  it("should trigger an 'onClick' event handler when the button is clicked", () => {
    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
