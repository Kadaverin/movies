import { fromJS } from 'immutable';

const INIT_VALUES = fromJS({
  ids: [],

  entities: {},

  filters: {},

  pagination: {
    page: 1,
  },
});

export function moviesReducer(state = INIT_VALUES, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
