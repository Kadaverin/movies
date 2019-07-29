export const moviesFiltersSelector = ({ Movies }) => Movies.get('filters');
export const moviesSorterSelector = ({ Movies }) => Movies.get('sortBy');

export const moviesEntitiesSelector = ({ Movies }) => Movies.get('entities');
export const moviesIdsSelector = ({ Movies }) => Movies.get('ids');

export const moviesSearchQuerySelector = ({ Movies }) =>
  Movies.get('searchQuery');

export function moviesListSelector(state) {
  const ids = moviesIdsSelector(state);
  const entities = moviesEntitiesSelector(state);

  return ids.map(id => entities.get(id.toString()));
}
