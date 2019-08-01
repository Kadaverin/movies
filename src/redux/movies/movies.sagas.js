import { put, call, all, takeLatest, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  moviesSearchQuerySelector,
  moviesPaginationSelector,
  moviesPaginationPageSelector,
  moviesFiltersSelector,
  moviesSorterSelector,
} from './movies.selectors';
import {
  MOVIES__SET_SEARCH_QUERY,
  MOVIES__SEARCH,
  MOVIES__LOAD_NEXT_SEARCH_PAGE,
  MOVIES__GET_MOVIE,
  MOVIES__DISCOVER,
  MOVIES__DISCOVER_GENRE_CLICK,
} from './movies.types';
import { MoviesApiService } from './movies.api-service';
import {
  searchMovies,
  mergeMoviesPagination,
  searchMoviesError,
  mergeMoviesUi,
  mergeMoviesEntities,
  clearMoviesEntities,
  getMovieError,
  discoverMoviesError,
  setMoviesFilter,
  discoverMovies,
} from './movies.actions';
import { isSearchMoviesageSelector } from '../common.js/common.selectors';
import { ROUTES } from '../../utils/constants/routes.constants';
import { normalize } from '../../utils/helpers/normalize';
import { MOVIES_FILTER_NAMES } from '../../utils/constants/filter-names';

function* searchMoviesSaga() {
  try {
    yield put(mergeMoviesUi({ isLoading: true }));

    const query = yield select(moviesSearchQuerySelector);
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      yield put(clearMoviesEntities());
      return;
    }

    const page = yield select(moviesPaginationPageSelector);

    const { movies, pagination } = yield call(
      MoviesApiService.search,
      trimmedQuery,
      page,
    );

    yield put(mergeMoviesPagination(pagination));
    yield put(mergeMoviesEntities(movies));
  } catch (error) {
    console.error(error);
    yield put(searchMoviesError());
  } finally {
    yield put(mergeMoviesUi({ isLoading: false }));
  }
}

function* loadNextSearchPageSaga() {
  try {
    const pagination = yield select(moviesPaginationSelector);

    if (pagination.get('page') === pagination.get('totalPages')) {
      return;
    }

    yield put(mergeMoviesPagination({ page: pagination.get('page') + 1 }));
    yield put(searchMovies());
  } catch (error) {
    console.error(error);
  }
}

function* debouncedMoviesSearchSaga() {
  try {
    yield delay(500);

    const isSearchPage = yield select(isSearchMoviesageSelector);

    if (!isSearchPage) {
      yield put(push(ROUTES.SEARCH_MOVIES));
    }

    yield put(clearMoviesEntities());
    yield put(searchMovies());
  } catch (error) {
    console.error(error);
  }
}

function* getMovieSaga({ payload: id }) {
  try {
    yield put(mergeMoviesUi({ isLoading: true }));

    const movie = yield call(MoviesApiService.getOne, id);

    yield put(mergeMoviesEntities(normalize([movie])));
  } catch (error) {
    yield put(getMovieError());
    console.error(error);
  } finally {
    yield put(mergeMoviesUi({ isLoading: false }));
  }
}

function* discoverMoviesSaga() {
  try {
    yield put(mergeMoviesUi({ isLoading: true }));

    const filters = yield select(moviesFiltersSelector);
    const sorter = yield select(moviesSorterSelector);
    const page = yield select(moviesPaginationPageSelector);

    const { movies, pagination } = yield call(
      MoviesApiService.discover,
      filters.toJS(),
      sorter,
      page,
    );

    yield put(mergeMoviesPagination(pagination));
    yield put(mergeMoviesEntities(movies));
  } catch (error) {
    console.error(error);
    yield put(discoverMoviesError());
  } finally {
    yield put(mergeMoviesUi({ isLoading: false }));
  }
}

function* discoverGenreSaga({ payload: genreId }) {
  try {
    yield put(setMoviesFilter(MOVIES_FILTER_NAMES.GENRES, [genreId]));
    yield put(discoverMovies());
    yield put(push(ROUTES.DISCOVER_MOVIES));
  } catch (error) {
    console.error(error);
  }
}

export function* moviesSaga() {
  yield all([
    takeLatest(MOVIES__SET_SEARCH_QUERY, debouncedMoviesSearchSaga),
    takeLatest(MOVIES__SEARCH, searchMoviesSaga),
    takeLatest(MOVIES__LOAD_NEXT_SEARCH_PAGE, loadNextSearchPageSaga),
    takeLatest(MOVIES__GET_MOVIE, getMovieSaga),
    takeLatest(MOVIES__DISCOVER_GENRE_CLICK, discoverGenreSaga),
    takeLatest(MOVIES__DISCOVER, discoverMoviesSaga),
  ]);
}
