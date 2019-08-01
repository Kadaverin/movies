// ENTITIES

export const moviesEntitiesSelector = state => {
  return state.getIn(['Movies', 'entities']);
};

export const moviesIdsSelector = state => state.getIn(['Movies', 'ids']);

export const movieByIdSelector = (state, { id }) => {
  return moviesEntitiesSelector(state).get(id);
};

export function moviesListSelector(state) {
  const ids = moviesIdsSelector(state);
  const entities = moviesEntitiesSelector(state);

  return ids.map(id => entities.get(id.toString()));
}
// //

// PAGINATION

export const moviesPaginationSelector = state => {
  return state.getIn(['Movies', 'pagination']);
};

export const moviesPaginationPageSelector = state => {
  return moviesPaginationSelector(state).get('page');
};

export const hasMoviesNextPageSelector = state => {
  const pagination = moviesPaginationSelector(state);

  return pagination.get('page') < pagination.get('totalPages');
};

// //

// FILTERS

export const moviesFiltersSelector = state => {
  return state.getIn(['Movies', 'filters']);
};

export const moviesSorterSelector = state => state.getIn(['Movies', 'sortBy']);

export const moviesSearchQuerySelector = state => {
  return state.getIn(['Movies', 'searchQuery']);
};

// //

// UI
export const isMoviesListLoadingSelector = state => {
  return state.getIn(['Movies', 'UI', 'isListLoading']);
};
export const isMoviesNextPageLoadingSelector = state => {
  return state.getIn(['Movies', 'UI', 'isNextPageLoading']);
};

export const isSingleMovieLoadingSelector = state => {
  return state.getIn(['Movies', 'UI', 'isMovieLoading']);
};

export const isFirstListLoadingSelector = state => {
  return (
    isMoviesListLoadingSelector(state) &&
    moviesPaginationPageSelector(state) === 1
  );
};

export const canLoadMoreMoviesSelector = state => {
  return (
    !isMoviesListLoadingSelector(state) && hasMoviesNextPageSelector(state)
  );
};
// //
