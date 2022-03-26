import { render, screen } from '@testing-library/react';
import Poster from './Poster';
import userEvent from '@testing-library/user-event';

const exampleMovieDbResponse = {
  results: [
    {
      adult: false,
      backdrop_path: '/iPhDToxFzREctUA0ZQiYZamXsMy.jpg',
      genre_ids: [16, 10751, 35, 14],
      id: 508947,
      original_language: 'en',
      original_title: 'Turning Red',
      overview:
        'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.',
      popularity: 8712.351,
      poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
      release_date: '2022-03-10',
      title: 'Turning Red',
      video: false,
      vote_average: 7.5,
      vote_count: 917,
    },
  ],
};

let onClick;
let originalTitle;

describe('Poster', () => {
  beforeEach(() => {
    onClick = jest.fn();
    originalTitle = exampleMovieDbResponse.results[0].original_title;
    render(
      <Poster result={exampleMovieDbResponse.results[0]} onClick={onClick} />
    );
  });

  it('renders a poster with correct label and alt text', () => {
    expect(screen.getByLabelText(originalTitle)).toBeInTheDocument();
    expect(screen.getByAltText(originalTitle)).toBeInTheDocument();
  });

  it("calls the onClick callback when it's clicked", () => {
    userEvent.click(screen.getByAltText(originalTitle));

    expect(onClick).toHaveBeenCalledWith(exampleMovieDbResponse.results[0].id);
  });
});
