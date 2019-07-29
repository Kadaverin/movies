import { fromJS } from 'immutable';
import * as types from './genres.types';

const INIT_STATE = fromJS({
  list: [],
});

export function genresReducer(state = INIT_STATE, { type, payload }) {
  switch (type) {
    case types.GENRES__SET_LIST: {
      return state.set('list', fromJS(payload));
    }

    default:
      return state;
  }
}
