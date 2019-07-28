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
      return state
        .set('ids', fromJS(payload.ids))
        .set('entities', fromJS(payload.entities));
    }

    case types.MOVIES__SET_FILTER: {
      return state.update('filters', filters =>
        filters.set(payload.name, fromJS(payload.value)),
      );
    }

    case types.MOVIES__SET_SEARCH_QUERY: {
      return state.set('searchQuery', payload);
    }

    case types.MOVIES__SET_SORTER: {
      return state.set('sortBy', payload);
    }

    case types.MOVIES__MERGE_PAGINATION: {
      return state.update('pagination', pagination =>
        pagination.merge(fromJS(payload)),
      );
    }

    default:
      return state;
  }
}
