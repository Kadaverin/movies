import { extractPagination } from '../../../utils/helpers/extract-pagination';

describe('helpers', () => {
  describe('extractPagination()', () => {
    test('extracts pagination properties from arg object', () => {
      const arg = {
        page: 1,
        total_pages: 3,
        total_results: 20,
        ignoredProp: 'foo',
        bar: 'another one',
      };

      const expectedRes = {
        page: 1,
        totalPages: 3,
        totalResults: 20,
      };

      expect(extractPagination(arg)).toEqual(expectedRes);
    });
  });
});
