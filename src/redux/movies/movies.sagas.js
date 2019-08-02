import { put, call, all, takeLatest, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  moviesSearchStringSelector,
  moviesPaginationSelector,
  moviesPaginationPageSelector,
  moviesFiltersSelector,
} from './movies.selectors';
import {
  MOVIES__SET_SEARCH_STRING,
  MOVIES__SEARCH,
  MOVIES__LOAD_NEXT_SEARCH_PAGE,
  MOVIES__GET_MOVIE,
  MOVIES__DISCOVER,
  MOVIES__DISCOVER_GENRE_CLICK,
  MOVIES__SET_DISCOVER_FILTER,
  MOVIES__LOAD_NEXT_ADVANCED_DISCOVERING__PAGE,
} from './movies.types';
import { MoviesApiService } from './movies.api-service';
import {
  searchMovies,
  mergeMoviesPagination,
  searchMoviesError,
  mergeMoviesUi,
  mergeMoviesData,
  clearMoviesData,
  getMovieError,
  discoverMoviesError,
  setMoviesFilter,
  discoverMovies,
} from './movies.actions';
import { isSearchMoviesPageSelector } from '../common/common.selectors';
import { ROUTES } from '../../utils/constants/routes.constants';
import { normalize } from '../../utils/helpers/normalize';
import { MOVIES_FILTER_NAMES } from '../../utils/constants/filters';

function* searchMoviesSaga() {
  try {
    const query = yield select(moviesSearchStringSelector);
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      yield put(clearMoviesData());
      return;
    }

    yield put(mergeMoviesUi({ isListLoading: true }));

    const page = yield select(moviesPaginationPageSelector);

    const { movies, pagination } = yield call(
      MoviesApiService.search,
      trimmedQuery,
      page,
    );

    yield put(mergeMoviesPagination(pagination));
    yield put(mergeMoviesData(movies));
  } catch (error) {
    console.error(error);

    yield put(searchMoviesError());
  } finally {
    yield put(mergeMoviesUi({ isListLoading: false }));
  }
}

function* loadNextSearchPageSaga() {
  try {
    yield put(mergeMoviesUi({ isNextPageLoading: true }));

    const pagination = yield select(moviesPaginationSelector);
    yield put(mergeMoviesPagination({ page: pagination.get('page') + 1 }));

    yield call(searchMoviesSaga);
  } catch (error) {
    console.error(error);
  } finally {
    yield put(mergeMoviesUi({ isNextPageLoading: false }));
  }
}

function* debouncedMoviesSearchSaga() {
  yield delay(500);

  const isSearchPage = yield select(isSearchMoviesPageSelector);

  if (!isSearchPage) {
    yield put(push(ROUTES.SEARCH_MOVIES));
  }

  yield put(clearMoviesData());
  yield put(searchMovies());
}

function* getMovieSaga({ payload: id }) {
  try {
    yield put(mergeMoviesUi({ isMovieLoading: true }));

    const movie = yield call(MoviesApiService.getOne, id);

    yield put(mergeMoviesData(normalize([movie])));
  } catch (error) {
    yield put(getMovieError());
    console.error(error);
  } finally {
    yield put(mergeMoviesUi({ isMovieLoading: false }));
  }
}

function* discoverMoviesSaga() {
  try {
    yield put(mergeMoviesUi({ isListLoading: true }));

    const filters = yield select(moviesFiltersSelector);

    const page = yield select(moviesPaginationPageSelector);

    const { movies, pagination } = yield call(
      MoviesApiService.discover,
      filters.toJS(),
      page,
    );

    yield put(mergeMoviesPagination(pagination));
    yield put(mergeMoviesData(movies));
  } catch (error) {
    console.error(error);
    yield put(discoverMoviesError());
  } finally {
    yield put(mergeMoviesUi({ isListLoading: false }));
  }
}

function* loadNextDiscoveringPageSaga() {
  try {
    yield put(mergeMoviesUi({ isNextPageLoading: true }));

    const pagination = yield select(moviesPaginationSelector);
    yield put(mergeMoviesPagination({ page: pagination.get('page') + 1 }));

    yield call(discoverMoviesSaga);
  } catch (error) {
    console.error(error);
  } finally {
    yield put(mergeMoviesUi({ isNextPageLoading: false }));
  }
}

function* debouncedDiscoverMoviesSaga() {
  yield delay(300);
  yield put(clearMoviesData());
  yield put(discoverMovies());
}

function* discoverGenreSaga({ payload: genreId }) {
  yield put(clearMoviesData());
  yield put(setMoviesFilter(MOVIES_FILTER_NAMES.GENRES, [genreId]));
  yield put(push(ROUTES.DISCOVER_MOVIES));
}

export function* moviesSaga() {
  yield all([
    takeLatest(MOVIES__GET_MOVIE, getMovieSaga),
    takeLatest(MOVIES__SET_SEARCH_STRING, debouncedMoviesSearchSaga),
    takeLatest(MOVIES__SEARCH, searchMoviesSaga),
    takeLatest(MOVIES__LOAD_NEXT_SEARCH_PAGE, loadNextSearchPageSaga),
    takeLatest(MOVIES__DISCOVER, discoverMoviesSaga),
    takeLatest(MOVIES__SET_DISCOVER_FILTER, debouncedDiscoverMoviesSaga),
    takeLatest(
      MOVIES__LOAD_NEXT_ADVANCED_DISCOVERING__PAGE,
      loadNextDiscoveringPageSaga,
    ),
    takeLatest(MOVIES__DISCOVER_GENRE_CLICK, discoverGenreSaga),
  ]);
}
