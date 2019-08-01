import { fromJS, Map, OrderedSet } from 'immutable';
import { DEFAULT_MOVIES_SORT_VALUE } from '../../utils/constants/movies-sort-options';
import {
  MOVIES_FILTER_NAMES,
  EMPTY_YEAR_FILTER_VAL,
} from '../../utils/constants/filters';
import * as types from './movies.types';

const INIT_VALUES = fromJS({
  ids: OrderedSet(),

  entities: {},

  filters: {
    [MOVIES_FILTER_NAMES.YEAR]: EMPTY_YEAR_FILTER_VAL,
    [MOVIES_FILTER_NAMES.GENRES]: [],
  },

  searchQuery: '',

  sortBy: DEFAULT_MOVIES_SORT_VALUE,

  pagination: {
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },

  UI: {
    isLoading: false,
  },
});

export function moviesReducer(state = INIT_VALUES, { type, payload }) {
  switch (type) {
    case types.MOVIES__CLEAR_ENTITIES: {
      return state.merge(
        Map({
          ids: OrderedSet(),
          entities: Map(),
        }),
      );
    }

    case types.MOVIES__MERGE_ENTITIES: {
      return state
        .mergeIn(['entities'], fromJS(payload.entities))
        .mergeIn(['ids'], fromJS(payload.ids));
    }

    case types.MOVIES__MERGE_UI: {
      return state.mergeIn(['UI'], fromJS(payload));
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

    case types.MOVIES__CLEAR_SEARCH_QUERY: {
      return state.set('searchQuery', '');
    }

    default:
      return state;
  }
}
