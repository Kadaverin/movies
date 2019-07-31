import { contains, mapContains, listOf } from 'react-immutable-proptypes';
import { string, number } from 'prop-types';

const previewFields = {
  id: number.isRequired,
  title: string.isRequired,
  release_date: string.isRequired,
  vote_average: number.isRequired,
  vote_count: number.isRequired,
  poster_path: string,
};

export const moviePreviewShape = contains(previewFields);

export const genreShape = contains({
  id: number.isRequired,
  name: string.isRequired,
});

export const productionCountryShape = contains({
  iso_3166_1: string.isRequired,
  name: string.isRequired,
});

export const movieShape = mapContains({
  ...previewFields,
  tagline: string,
  overview: string,
  genres: listOf(genreShape),
  production_countries: listOf(productionCountryShape),
});
