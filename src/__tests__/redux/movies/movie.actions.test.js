import * as actions from '../../../redux/movies/movies.actions';
import * as types from '../../../redux/movies/movies.types';

describe('movies.actions', () => {
  describe('action creators creates correct action objects', () => {
    test('-- mergeMoviesData', () => {
      const arg = {
        ids: [1],
        entities: { 1: {} },
        someIgnoredField: 'bla-bla',
      };

      const expectedAction = {
        type: types.MOVIES__MERGE_DATA,
        payload: {
          ids: arg.ids,
          entities: arg.entities,
        },
      };

      expect(actions.mergeMoviesData(arg)).toEqual(expectedAction);
    });
  });
});
