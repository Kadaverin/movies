import { INIT_STATE } from './movie.actions.test';
import { moviesReducer } from '../../../src/redux/movies/movies.reducer';
import * as types from '../../../src/redux/movies/movies.types'

describe('movies.reducer', () => {
  test('returns correct initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(INIT_STATE);
  });

  test('handles MOVIES__MERGE_ENTITIES', () => {
    expect(moviesReducer(undefined, {
      type: types.MOVIES__MERGE_ENTITIES,
      payload: {
        ids: [1],
        entities: { 1: { }}
      }
    })).toEqual({
      fromJS({
        
      })
    })
  })
});
