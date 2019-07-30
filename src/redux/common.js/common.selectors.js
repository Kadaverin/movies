import { ROUTES } from '../../utils/constants/routes.constants';

export const pathnameSelector = state =>
  state.getIn(['router', 'location', 'pathname']);

export const isSearchMoviesageSelector = state => {
  return pathnameSelector(state).includes(ROUTES.SEARCH_MOVIES);
};
