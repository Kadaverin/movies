import { TMDB_BASE_POSTERS_PATH } from '../../../utils/configs';
import { makePosterUrl } from '../../../utils/helpers/make-poster-url';
import { IMAGE_URLS } from '../../../utils/constants/img-urls';

describe('helpers', () => {
  describe('makePosterUrl()', () => {
    describe('argument is string', () => {
      test('interpolates arhument to string with base posters path', () => {
        const posterpath = 'posrt-uuid';

        const expectedResult = `${TMDB_BASE_POSTERS_PATH}/${posterpath}`;

        expect(makePosterUrl(posterpath)).toEqual(expectedResult);
      });
    });

    describe('argument is not string or falsy', () => {
      test('returns default poster url', () => {
        expect(makePosterUrl()).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl('')).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl(null)).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl(false)).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl(true)).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl({})).toEqual(IMAGE_URLS.DEFAULT_POSTER);
        expect(makePosterUrl([])).toEqual(IMAGE_URLS.DEFAULT_POSTER);
      });
    });
  });
});
