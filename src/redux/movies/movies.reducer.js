import { fromJS, OrderedSet } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { DEFAULT_MOVIES_SORT_VALUE } from '../../utils/constants/movies-sort-options';
import {
  MOVIES_FILTER_NAMES,
  EMPTY_YEAR_FILTER_VAL,
} from '../../utils/constants/filters';
import * as types from './movies.types';

export const INIT_PAGINATION = {
  page: 1,
  totalPages: 1,
  totalResults: 0,
};

export const INIT_UI = {
  isListLoading: false,
  isNextPageLoading: false,
  isMovieLoading: false,
};

export const INIT_DATA = {
  ids: OrderedSet(),
  entities: {},
};

export const INIT_FILTERS = {
  [MOVIES_FILTER_NAMES.GENRES]: [],
  [MOVIES_FILTER_NAMES.YEAR]: EMPTY_YEAR_FILTER_VAL,
  [MOVIES_FILTER_NAMES.SORT_BY]: DEFAULT_MOVIES_SORT_VALUE,
};

export function searchStringReducer(state = '', { type, payload }) {
  switch (type) {
    case types.MOVIES__SET_SEARCH_STRING: {
      return payload;
    }

    case types.MOVIES__CLEAR_SEARCH_STRING: {
      return '';
    }

    default:
      return state;
  }
}

export function paginationReducer(
  state = fromJS(INIT_PAGINATION),
  { type, payload },
) {
  switch (type) {
    case types.MOVIES__CLEAR_DATA: {
      return fromJS(INIT_PAGINATION);
    }

    case types.MOVIES__MERGE_PAGINATION: {
      return state.merge(fromJS(payload));
    }

    default:
      return state;
  }
}

export function discoverFiltersReducer(
  state = fromJS(INIT_FILTERS),
  { type, payload },
) {
  switch (type) {
    case types.MOVIES__SET_DISCOVER_FILTER: {
      return state.set(payload.name, fromJS(payload.value));
    }

    default:
      return state;
  }
}

export function uiReducer(state = fromJS(INIT_UI), { type, payload }) {
  switch (type) {
    case types.MOVIES__MERGE_UI: {
      return state.merge(fromJS(payload));
    }

    default:
      return state;
  }
}

export function dataReducer(state = fromJS(INIT_DATA), { type, payload }) {
  switch (type) {
    case types.MOVIES__MERGE_DATA: {
      return state
        .mergeIn(['entities'], fromJS(payload.entities))
        .mergeIn(['ids'], OrderedSet(payload.ids));
    }

    case types.MOVIES__CLEAR_DATA: {
      return fromJS(INIT_DATA);
    }

    default:
      return state;
  }
}

export const moviesReducer = combineReducers({
  data: dataReducer,
  searchString: searchStringReducer,
  pagination: paginationReducer,
  discoverFilters: discoverFiltersReducer,
  UI: uiReducer,
});
