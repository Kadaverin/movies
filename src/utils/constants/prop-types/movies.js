import { contains } from 'immutable-prop-types';
import { string, number } from 'prop-types';

export const moviesPreviewShape = contains({
  id: number.isRequired,
  title: string.isRequired,
  release_date: string.isRequired,
  vote_average: number.isRequired,
  vote_count: number.isRequired,
  poster_path: string,
});
