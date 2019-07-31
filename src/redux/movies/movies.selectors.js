export const moviesFiltersSelector = state =>
  state.getIn(['Movies', 'filters']);

export const moviesSorterSelector = state => state.getIn(['Movies', 'sortBy']);

export const moviesEntitiesSelector = state =>
  state.getIn(['Movies', 'entities']);

export const moviesIdsSelector = state => state.getIn(['Movies', 'ids']);

export const movieByIdSelector = (state, { id }) =>
  moviesEntitiesSelector(state).get(id);

export const moviesSearchQuerySelector = state =>
  state.getIn(['Movies', 'searchQuery']);

export function moviesListSelector(state) {
  const ids = moviesIdsSelector(state);
  const entities = moviesEntitiesSelector(state);

  return ids.map(id => entities.get(id.toString()));
}

export const moviesPaginationSelector = state =>
  state.getIn(['Movies', 'pagination']);

export const moviesPaginationPageSelector = state =>
  moviesPaginationSelector(state).get('page');

export const isMoviesLoadingSelector = state =>
  state.getIn(['Movies', 'UI', 'isLoading']);

export const hasMoviesNextPageSelector = state => {
  const pagination = moviesPaginationSelector(state);

  return pagination.get('page') < pagination.get('totalPages');
};

export const canLoadMoreMoviesSelector = state =>
  !isMoviesLoadingSelector(state) && hasMoviesNextPageSelector(state);
