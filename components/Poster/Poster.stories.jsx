import Poster from './Poster';

export default {
  title: 'Components/Poster',
  component: Poster,
};

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

export const Default = () => <Poster info={exampleMovieDbResponse} />;
