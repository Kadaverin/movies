import { fromJS, OrderedSet } from 'immutable';
import {
  INIT_PAGINATION,
  INIT_UI,
  INIT_FILTERS,
  INIT_DATA,
  dataReducer,
  paginationReducer,
  searchStringReducer,
  discoverFiltersReducer,
  uiReducer,
} from '../../../redux/movies/movies.reducer';

import * as types from '../../../redux/movies/movies.types';

describe('movies.reducer', () => {
  describe('data reducer', () => {
    test('returns correct initial state', () => {
      const expected = fromJS(INIT_DATA);
      const result = dataReducer(undefined, {});

      expect(result).toEqual(expected);
    });

    test('handles MOVIES__CLEAR_DATA', () => {
      const state = fromJS({
        ids: [1],
        entities: { 1: {} },
      });

      const action = { type: types.MOVIES__CLEAR_DATA };

      const newState = dataReducer(state, action);

      expect(newState).toEqual(fromJS(INIT_DATA));
    });

    test('handles MOVIES__MERGE_DATA', () => {
      const firstAction = {
        type: types.MOVIES__MERGE_DATA,
        payload: {
          ids: [1],
          entities: { 1: {} },
        },
      };

      const firstResult = dataReducer(undefined, firstAction);

      const firstExpectedState = fromJS({
        ids: OrderedSet([1]),
        entities: { 1: {} },
      });

      const secondAction = {
        type: types.MOVIES__MERGE_DATA,
        payload: {
          ids: [2, 3],
          entities: { 2: {}, 3: {} },
        },
      };

      const secondResult = dataReducer(firstExpectedState, secondAction);

      const secondExpectedState = fromJS({
        ids: OrderedSet([1, 2, 3]),
        entities: { 1: {}, 2: {}, 3: {} },
      });

      expect(firstResult).toEqual(firstExpectedState);
      expect(secondResult).toEqual(secondExpectedState);
    });
  });

  describe('search string reducer', () => {
    test('returns correct initial state', () => {
      expect(searchStringReducer(undefined, {})).toEqual('');
    });

    test('handles MOVIES__SET_SEARCH_STRING', () => {
      const value = 'str';

      const action = {
        type: types.MOVIES__SET_SEARCH_STRING,
        payload: value,
      };

      const result = searchStringReducer(undefined, action);

      expect(result).toEqual(value);
    });

    test('handles MOVIES__CLEAR_SEARCH_STRING', () => {
      const value = 'str';

      const action = { type: types.MOVIES__CLEAR_SEARCH_STRING };

      const result = searchStringReducer(value, action);

      expect(result).toEqual('');
    });
  });

  describe('pagination reducer', () => {
    test('returns correct initial state', () => {
      expect(paginationReducer(undefined, {})).toEqual(fromJS(INIT_PAGINATION));
    });

    test('handles MOVIES__CLEAR_DATA', () => {
      const state = {
        page: 4,
        totalPages: 5,
        totalResults: 100,
      };

      const action = { type: types.MOVIES__CLEAR_DATA };

      const result = paginationReducer(state, action);

      const expectedState = fromJS(INIT_PAGINATION);

      expect(result).toEqual(expectedState);
    });

    test('handles MOVIES__MERGE_PAGINATION', () => {
      const OLD_TOTAL_RESULTS = 100;
      const NEW_PAGE = 6;
      const NEW_TOTAL_PAGES = 3;

      const state = fromJS({
        page: 4,
        totalPages: 5,
        totalResults: OLD_TOTAL_RESULTS,
      });

      const action = {
        type: types.MOVIES__MERGE_PAGINATION,
        payload: {
          page: NEW_PAGE,
          totalPages: NEW_TOTAL_PAGES,
        },
      };

      const result = paginationReducer(state, action);

      const expectedState = fromJS({
        page: NEW_PAGE,
        totalPages: NEW_TOTAL_PAGES,
        totalResults: OLD_TOTAL_RESULTS,
      });

      expect(result).toEqual(expectedState);
    });
  });

  describe('discover filters reducer', () => {
    test('returns correct initial state', () => {
      expect(discoverFiltersReducer(undefined, {})).toEqual(
        fromJS(INIT_FILTERS),
      );
    });

    test('handles MOVIES__SET_DISCOVER_FILTER', () => {
      const name = 'sortBy';
      const value = 'vote_cout.desc';

      const action = {
        type: types.MOVIES__SET_DISCOVER_FILTER,
        payload: { name, value },
      };

      const result = discoverFiltersReducer(undefined, action);

      const expectedState = fromJS({ ...INIT_FILTERS, [name]: value });

      expect(result).toEqual(expectedState);
    });
  });

  describe('ui reducer', () => {
    test('returns correct initial state', () => {
      expect(uiReducer(undefined, {})).toEqual(fromJS(INIT_UI));
    });

    test('handles MOVIES__MERGE_UI', () => {
      const state = fromJS({
        isListLoading: false,
        isNextPageLoading: false,
        isMovieLoading: true,
      });

      const action = {
        type: types.MOVIES__MERGE_UI,
        payload: {
          isMovieLoading: false,
        },
      };

      const result = uiReducer(state, action);

      const expectedState = fromJS(INIT_UI);

      expect(result).toEqual(expectedState);
    });
  });
});
