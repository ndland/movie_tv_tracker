import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  const defaultProps = {};
  const { container } = render(<Home {...defaultProps} />);

  it('renders', () => {
    expect(container).toMatchSnapshot();
  });
});
