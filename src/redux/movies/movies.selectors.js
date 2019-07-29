export const moviesFiltersSelector = state =>
  state.getIn(['Movies', 'filters']);

export const moviesSorterSelector = state => state.getIn(['Movies', 'sortBy']);

export const moviesEntitiesSelector = state =>
  state.getIn(['Movies', 'entities']);

export const moviesIdsSelector = state => state.getIn(['Movies', 'ids']);

export const moviesSearchQuerySelector = state =>
  state.getIn(['Movies', 'searchQuery']);

export function moviesListSelector(state) {
  const ids = moviesIdsSelector(state);
  const entities = moviesEntitiesSelector(state);

  return ids.map(id => entities.get(id.toString()));
}
