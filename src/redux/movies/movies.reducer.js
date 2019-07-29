import { fromJS } from 'immutable';
import { DEFAULT_MOVIES_SORT_VALUE } from '../../utils/constants/movies-sort-options';
import * as types from './movies.types';
import { MOVIES_FILTER_NAMES } from '../../utils/constants/filter-names';

const INIT_VALUES = fromJS({
  ids: [],

  entities: {},

  filters: {
    [MOVIES_FILTER_NAMES.YEAR]: null,
    [MOVIES_FILTER_NAMES.GENRES]: [],
  },

  searchQuery: '',

  sortBy: DEFAULT_MOVIES_SORT_VALUE,

  pagination: {
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
});

export function moviesReducer(state = INIT_VALUES, { type, payload }) {
  switch (type) {
    case types.MOVIES__SET: {
      return state.merge(fromJS(payload));
    }

    case types.MOVIES__SET_FILTER: {
      return state.setIn(['filters', payload.name], fromJS(payload.value));
    }

    case types.MOVIES__SET_SEARCH_QUERY: {
      return state.set('searchQuery', payload);
    }

    case types.MOVIES__SET_SORTER: {
      return state.set('sortBy', payload);
    }

    case types.MOVIES__MERGE_PAGINATION: {
      return state.mergeIn(['pagination'], fromJS(payload));
    }

    default:
      return state;
  }
}
