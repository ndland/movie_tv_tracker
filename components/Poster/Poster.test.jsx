import { render, screen } from '@testing-library/react';
import Poster from './Poster';

describe('Poster', () => {
  it('renders a poster', () => {
    render(<Poster />);

    expect(screen.getByLabelText('image')).toBeInTheDocument();
  });
});
