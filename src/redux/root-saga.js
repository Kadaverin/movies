import { all, fork } from 'redux-saga/effects';
import { moviesSaga } from './movies/movies.sagas';
import { genresSaga } from './genres/genres.sagas';

export function* rootSaga() {
  yield all([fork(moviesSaga), fork(genresSaga)]);
}
