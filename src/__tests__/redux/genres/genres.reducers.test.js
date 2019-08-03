import { fromJS } from 'immutable';
import {
  INIT_STATE,
  genresReducer,
} from '../../../redux/genres/genres.reducer';

import * as types from '../../../redux/genres/genres.types';

describe('genres.reducers', () => {
  describe('data reducer', () => {
    test('returns correct initial state', () => {
      const expected = fromJS(INIT_STATE);
      const result = genresReducer(undefined, {});

      expect(result).toEqual(expected);
    });

    test('handles GENRES__SET_LIST', () => {
      const list = [{ id: 1, name: 'action' }, { id: 2, name: 'animation' }];

      const action = { type: types.GENRES__SET_LIST, payload: list };

      const newState = genresReducer(undefined, action);

      const expectedState = fromJS({ list });

      expect(newState).toEqual(expectedState);
    });
  });
});
