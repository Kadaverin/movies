import * as types from './movies.types';

export const searchMovies = () => ({
  type: types.MOVIES__SEARCH,
});

export const mergeMoviesData = ({ ids, entities }) => ({
  type: types.MOVIES__MERGE_DATA,
  payload: { ids, entities },
});

export const clearMoviesData = () => ({
  type: types.MOVIES__CLEAR_DATA,
});

export const loadNextSearchMoviesPage = () => ({
  type: types.MOVIES__LOAD_NEXT_SEARCH_PAGE,
});

export const loadNextMoviesDiscoveringPage = () => ({
  type: types.MOVIES__LOAD_NEXT_ADVANCED_DISCOVERING__PAGE,
});

export const mergeMoviesUi = uiPartial => ({
  type: types.MOVIES__MERGE_UI,
  payload: uiPartial,
});

export const setMoviesFilter = (name, value) => ({
  type: types.MOVIES__SET_DISCOVER_FILTER,
  payload: {
    name,
    value,
  },
});

export const setSearchString = value => ({
  type: types.MOVIES__SET_SEARCH_STRING,
  payload: value,
});

export const clearSearchString = () => ({
  type: types.MOVIES__CLEAR_SEARCH_STRING,
});

export const searchMoviesError = () => ({
  type: types.MOVIES__ERROR__SEARCH,
});

export const mergeMoviesPagination = paginationPartial => ({
  type: types.MOVIES__MERGE_PAGINATION,
  payload: paginationPartial,
});

export const getMovie = id => ({
  type: types.MOVIES__GET_MOVIE,
  payload: id,
});

export const getMovieError = () => ({
  type: types.MOVIES__ERROR__GET_MOVIE,
});

export const discoverGenreClick = genreId => ({
  type: types.MOVIES__DISCOVER_GENRE_CLICK,
  payload: genreId,
});

export const discoverMovies = () => ({
  type: types.MOVIES__DISCOVER,
});

export const discoverMoviesError = () => ({
  type: types.MOVIES__ERROR__DISCOVER,
});
