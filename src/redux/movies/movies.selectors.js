import { MOVIES_FILTER_NAMES } from '../../utils/constants/filter-names';

export const moviesFiltersSelector = state => {
  return state.getIn(['Movies', 'filters']);
};

export const moviesSorterSelector = state => state.getIn(['Movies', 'sortBy']);

export const moviesEntitiesSelector = state => {
  return state.getIn(['Movies', 'entities']);
};

export const moviesIdsSelector = state => state.getIn(['Movies', 'ids']);

export const movieByIdSelector = (state, { id }) => {
  return moviesEntitiesSelector(state).get(id);
};

export const moviesSearchQuerySelector = state => {
  return state.getIn(['Movies', 'searchQuery']);
};

export function moviesListSelector(state) {
  const ids = moviesIdsSelector(state);
  const entities = moviesEntitiesSelector(state);

  return ids.map(id => entities.get(id.toString()));
}

export const moviesPaginationSelector = state => {
  return state.getIn(['Movies', 'pagination']);
};

export const moviesPaginationPageSelector = state => {
  return moviesPaginationSelector(state).get('page');
};

export const isMoviesLoadingSelector = state => {
  return state.getIn(['Movies', 'UI', 'isLoading']);
};

export const hasMoviesNextPageSelector = state => {
  const pagination = moviesPaginationSelector(state);

  return pagination.get('page') < pagination.get('totalPages');
};

export const canLoadMoreMoviesSelector = state => {
  return !isMoviesLoadingSelector(state) && hasMoviesNextPageSelector(state);
};
