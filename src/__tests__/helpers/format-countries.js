import { Map } from 'immutable';

import { formatCountries } from '../../utils/helpers/format-countries';

describe('helpers', () => {
  describe('formatCountries', () => {
    describe('argument is correct', () => {
      test("formats array with countries maps to string with it's names", () => {
        const countries = [
          Map({ name: 'Ukraine' }),
          Map({ name: 'Japan', ignored: 'foo' }),
        ];

        const expectedRes = 'Ukraine, Japan';

        expect(formatCountries(countries)).toEqual(expectedRes);
      });
    });

    describe('argument is incorrect', () => {
      test('throws error', () => {
        expect(() => formatCountries({})).toThrow();
        expect(() => formatCountries('str')).toThrow();
        expect(() => formatCountries(true)).toThrow();
      });
    });

    describe('argument is falsy', () => {
      test('returns empty string', () => {
        expect(formatCountries()).toEqual('');
        expect(formatCountries(false)).toEqual('');
        expect(formatCountries(null)).toEqual('');
        expect(formatCountries('')).toEqual('');
      });
    });
  });
});
