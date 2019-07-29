import { IMAGE_URLS } from './constants/img-urls';

export const makePosterUrl = tmdbPosterPath =>
  tmdbPosterPath
    ? `https://image.tmdb.org/t/p/w500/${tmdbPosterPath}`
    : IMAGE_URLS.DEFAULT_POSTER;
