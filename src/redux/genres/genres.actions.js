import * as types from './genres.types';

export const getGenresList = () => ({
  type: types.GENRES__GET_LIST,
});

export const setGenresList = ({ genres }) => ({
  type: types.GENRES__SET_LIST,
  payload: genres,
});

export const getGenresListError = () => ({
  type: types.GENRES__ERROR__GET_LIST,
});
