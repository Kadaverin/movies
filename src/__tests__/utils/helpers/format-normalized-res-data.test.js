import { extractPagination } from '../../../utils/helpers/extract-pagination';
import { formatNormalizedListData } from '../../../utils/helpers/format-normalized-res-data';
import { normalize } from '../../../utils/helpers/normalize';

const mockedPagination = { page: 2 };
const mockedData = { retults: [{ id: 1 }] };
const mockedNormalizedData = { ids: [1], entities: { 1: { id: 1 } } };

jest.mock('../../../utils/helpers/extract-pagination', () => {
  return {
    __esModule: true,
    extractPagination: jest.fn(() => mockedPagination),
  };
});

jest.mock('../../../utils/helpers/normalize', () => {
  return {
    __esModule: true,
    normalize: jest.fn(() => mockedNormalizedData),
  };
});

const mockedArg = {
  results: mockedData,
};

describe('helpers', () => {
  describe('formatNormalizedListData()', () => {
    test('calls extractPagination() and normalize()', () => {
      formatNormalizedListData(mockedArg);

      expect(extractPagination).toHaveBeenCalledTimes(1);
      expect(extractPagination).toHaveBeenCalledWith(mockedArg);

      expect(normalize).toHaveBeenCalledTimes(1);
      expect(normalize).toHaveBeenCalledWith(mockedData);
    });

    test('returns object contains pagination and data', () => {
      expect(formatNormalizedListData(mockedArg)).toEqual({
        data: mockedNormalizedData,
        pagination: mockedPagination,
      });
    });
  });
});
