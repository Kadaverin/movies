import { put, call, all, takeLatest, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  // moviesFiltersSelector,
  // moviesSorterSelector,
  moviesSearchQuerySelector,
  moviesPaginationSelector,
  moviesPaginationPageSelector,
} from './movies.selectors';
import {
  MOVIES__SET_SEARCH_QUERY,
  MOVIES__SEARCH,
  MOVIES__LOAD_NEXT_SEARCH_PAGE,
} from './movies.types';
import { MoviesApiService } from './movies.api-service';
import {
  searchMovies,
  mergeMoviesPagination,
  setMovies,
  searchMoviesError,
  mergeMoviesUi,
  mergeMoviesEntities,
  clearMoviesEntities,
} from './movies.actions';
import { isSearchMoviesageSelector } from '../common.js/common.selectors';
import { ROUTES } from '../../utils/constants/routes.constants';

// function* getMoviesSaga() {
//   try {
//     const filters = yield select(moviesFiltersSelector);
//     const sorter = yield select(moviesSorterSelector);
//   } catch (error) {
//     console.error(error)
//   }
// }

function* searchMoviesSaga() {
  try {
    const query = yield select(moviesSearchQuerySelector);

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      yield put(clearMoviesEntities());
      return;
    }

    const page = yield select(moviesPaginationPageSelector);

    yield put(mergeMoviesUi({ isLoading: true }));

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

export function* moviesSaga() {
  yield all([
    takeLatest(MOVIES__SET_SEARCH_QUERY, debouncedMoviesSearchSaga),
    takeLatest(MOVIES__SEARCH, searchMoviesSaga),
    takeLatest(MOVIES__LOAD_NEXT_SEARCH_PAGE, loadNextSearchPageSaga),
  ]);
}