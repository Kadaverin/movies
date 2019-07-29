import { put, all, takeLatest, call } from 'redux-saga/effects';
import { GenresApiService } from './genres.api-service';
import { setGenresList, getGenresListError } from './genres.actions';
import { GENRES__GET_LIST } from './genres.types';

function* getGenresListSaga() {
  try {
    const { data } = yield call(GenresApiService.getList);
    yield put(setGenresList(data.genres));
    
  } catch (e) {
    yield put(getGenresListError());
    console.error(e);
  }
}

export function* genresSaga() {
  yield all([takeLatest(GENRES__GET_LIST, getGenresListSaga)]);
}
