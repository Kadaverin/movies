import { bool, string, shape, object } from 'prop-types';

export const matchShape = shape({
  isExact: bool.isRequired,
  params: object,
  path: string.isRequired,
  url: string.isRequired,
});
