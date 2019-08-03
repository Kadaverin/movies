import React from 'react';
import { shallow } from 'enzyme';
import { OrderedSet, Map } from 'immutable';
import MovieCard from '../../../common/components/movie-card';
import MoviesList from '../../../common/components/movies-list';
import { makePosterUrl } from '../../../utils/helpers/make-poster-url';
import { DEFAULT_IMG_HEIGHT } from '../../../utils/constants/movie-card';

const movieShapes = [
  {
    id: 1,
    poster_path: 'url1',
    title: 'card1',
    release_date: '2019-07-19',
    vote_count: 100,
    vote_average: 9.2,
  },
  {
    id: 2,
    poster_path: 'url2',
    title: 'car21',
    release_date: '2019-07-19',
    vote_count: 1000,
    vote_average: 100,
  },
];

const movies = OrderedSet(movieShapes.map(Map));

describe('common component', () => {
  describe('MovieList', () => {
    test('matches snapshot', () => {
      const list = shallow(<MoviesList movies={movies} />);

      expect(list).toMatchSnapshot();
    });

    test('maps movies to MovieCard', () => {
      const list = shallow(<MoviesList movies={movies} />);

      const renderedMovies = list.find(MovieCard);

      expect(renderedMovies.length).toEqual(movies.size);

      movieShapes.forEach((movie, index) => {
        expect(renderedMovies.at(index).props()).toEqual({
          imgUrl: makePosterUrl(movie.poster_path),
          title: movie.title,
          releaseDate: movie.release_date,
          voteCount: movie.vote_count,
          voteAverage: movie.vote_average,
          imgHeight: DEFAULT_IMG_HEIGHT,
        });
      });
    });
  });
});
