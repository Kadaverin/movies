import { normalize } from '../../../utils/helpers/normalize';

const list = [
  { id: 1, data: 'str' },
  { id: 2, data: 'str2' },
  { id: 3, data: 1231 },
];

const normalizedByIdKey = {
  ids: [1, 2, 3],
  entities: {
    1: { id: 1, data: 'str' },
    2: { id: 2, data: 'str2' },
    3: { id: 3, data: 1231 },
  },
};

const normalizedByDataKey = {
  ids: ['str', 'str2', 1231],
  entities: {
    str: { id: 1, data: 'str' },
    str2: { id: 2, data: 'str2' },
    '1231': { id: 3, data: 1231 },
  },
};

describe('helpers', () => {
  describe('normalize()', () => {
    test("reduces list of objects to object contains 'ids' and 'entities' props", () => {
      expect(normalize(list)).toEqual(normalizedByIdKey);
    });

    test('supports custom key to normalize as a second argument', () => {
      expect(normalize(list, 'data')).toEqual(normalizedByDataKey);
    });
  });
});
