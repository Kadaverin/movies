import * as types from './movies.types';

export const searchMovies = () => ({
  type: types.MOVIES__SEARCH,
});

export const setMovies = ({ ids, entities }) => ({
  type: types.MOVIES__SET,
  payload: { ids, entities },
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

export const searchMoviesError = () => ({
  type: types.MOVIES__ERROR__SEARCH,
});

export const mergeMoviesPagination = ({ page, totalPages, totalResults }) => ({
  type: types.MOVIES__MERGE_PAGINATION,
  payload: {
    page,
    totalPages,
    totalResults,
  },
});
