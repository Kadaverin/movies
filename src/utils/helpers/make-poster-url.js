import { IMAGE_URLS } from '../constants/img-urls';
import { TMDB_BASE_POSTERS_PATH } from '../configs';

export const makePosterUrl = tmdbPosterPath =>
  tmdbPosterPath && typeof tmdbPosterPath === 'string'
    ? `${TMDB_BASE_POSTERS_PATH}/${tmdbPosterPath}`
    : IMAGE_URLS.DEFAULT_POSTER;
