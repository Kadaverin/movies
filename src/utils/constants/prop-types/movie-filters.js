import { oneOf, number } from 'prop-types';
import { contains, listOf } from 'react-immutable-proptypes';
import { MOVIES_SORT_OPTIONS } from '../movies-sort-options';
import { MOVIES_FILTER_NAMES } from '../filters';

const MOVIES_SORT_VALUES = MOVIES_SORT_OPTIONS.map(({ value }) => value);

export const moviesSorterPropType = oneOf(MOVIES_SORT_VALUES);

export const moviesFiltersShape = contains({
  [MOVIES_FILTER_NAMES.YEAR]: number,
  [MOVIES_FILTER_NAMES.GENRES]: listOf(number),
});
