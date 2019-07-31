import * as types from './movies.types';

export const searchMovies = () => ({
  type: types.MOVIES__SEARCH,
});

export const mergeMoviesEntities = ({ ids, entities }) => ({
  type: types.MOVIES__MERGE_ENTITIES,
  payload: { ids, entities },
});

export const loadNextSearchMoviesPage = () => ({
  type: types.MOVIES__LOAD_NEXT_SEARCH_PAGE,
});

export const mergeMoviesUi = uiPartial => ({
  type: types.MOVIES__MERGE_UI,
  payload: uiPartial,
});

export const setMoviesFilter = (name, value) => ({
  type: types.MOVIES__SET_FILTER,
  payload: {
    name,
    value,
  },
});

export const setMoviesSorter = value => ({
  type: types.MOVIES__SET_SORTER,
  payload: value,
});

export const setSearchQuery = value => ({
  type: types.MOVIES__SET_SEARCH_QUERY,
  payload: value,
});

export const clearSearchQuery = () => ({
  type: types.MOVIES__CLEAR_SEARCH_QUERY,
});

export const searchMoviesError = () => ({
  type: types.MOVIES__ERROR__SEARCH,
});

export const mergeMoviesPagination = paginationPartial => ({
  type: types.MOVIES__MERGE_PAGINATION,
  payload: paginationPartial,
});

export const clearMoviesEntities = () => ({
  type: types.MOVIES__CLEAR_ENTITIES,
});

export const getMovie = id => ({
  type: types.MOVIES__GET_MOVIE,
  payload: id,
});

export const getMovieError = () => ({
  type: types.MOVIES__ERROR__GET_MOVIE,
});
