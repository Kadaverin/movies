import { put, call, all, takeLatest, select, delay } from 'redux-saga/effects';
import {
  moviesFiltersSelector,
  moviesSorterSelector,
  moviesSearchQuerySelector,
} from './movies.selectors';
import { MOVIES__SET_SEARCH_QUERY, MOVIES__SEARCH } from './movies.types';
import { MoviesApiService } from './movies.api-service';
import { searchMovies, mergeMoviesPagination, setMovies } from './movies.actions';

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

    // if (!trimmedQuery) {
    //   // todo: clear search results;
    //   return;
    // }

    const { movies, pagination } = yield call(
      MoviesApiService.search,
      trimmedQuery,
    );

    yield put(mergeMoviesPagination(pagination));
    yield put(setMovies(movies));

    console.log(movies);
  } catch (error) {
    console.error(error);
  }
}

function* debouncedMoviesSearchSaga() {
  try {
    yield delay(500);

    yield put(searchMovies());
  } catch (error) {
    console.error(error);
  }
}

export function* moviesSaga() {
  yield all([
    takeLatest(MOVIES__SET_SEARCH_QUERY, debouncedMoviesSearchSaga),
    takeLatest(MOVIES__SEARCH, searchMoviesSaga),
  ]);
}
