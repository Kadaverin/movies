import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../../../common/components/movie-card/movie-card';

const requiredProps = {
  imgUrl: 'url',
  title: 'card',
  releaseDate: '2019-07-19',
  voteCount: 100,
  voteAverage: 9.2,
};

describe('common component', () => {
  describe('MovieCard', () => {
    test('mathes shapshot', () => {
      const card = shallow(<MovieCard {...requiredProps} />);

      expect(card).toMatchSnapshot();
    });
  });
});
