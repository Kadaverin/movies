import { ROUTES } from '../../utils/constants/routes.constants';
import { isMoviesNextPageLoadingSelector } from '../movies/movies.selectors';

const TRIGGER_SHOW_PAGE_LOADER_SELECTORS = [isMoviesNextPageLoadingSelector];

export const pathnameSelector = state =>
  state.getIn(['router', 'location', 'pathname']);

export const isSearchMoviesageSelector = state => {
  return pathnameSelector(state).includes(ROUTES.SEARCH_MOVIES);
};

export const isPageLoaderVisibleSelector = state => {
  return TRIGGER_SHOW_PAGE_LOADER_SELECTORS.reduce(
    (show, selector) => show || selector(state),
    false,
  );
};
