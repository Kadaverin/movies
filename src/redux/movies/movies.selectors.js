// DATA

export const moviesEntitiesSelector = state => {
  return state.getIn(['Movies', 'data', 'entities']);
};

export const moviesIdsSelector = state => {
  return state.getIn(['Movies', 'data', 'ids']);
};

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

// UI
export const moviesUiSelector = state => {
  return state.getIn(['Movies', 'UI']);
};

export const isMoviesListLoadingSelector = state => {
  return moviesUiSelector(state).get('isListLoading');
};

export const isMoviesNextPageLoadingSelector = state => {
  return moviesUiSelector(state).get('isNextPageLoading');
};

export const isSingleMovieLoadingSelector = state => {
  return moviesUiSelector(state).get('isMovieLoading');
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

export const moviesFiltersSelector = state => {
  return state.getIn(['Movies', 'discoverFilters']);
};

export const moviesSearchStringSelector = state => {
  return state.getIn(['Movies', 'searchString']);
};
