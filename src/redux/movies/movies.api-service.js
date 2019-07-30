import { tmdbAxiosInstance } from '../../utils/tmdb-axios-instance';
import { normalize } from '../../utils/helpers/normalize';
import { extractPagination } from '../../utils/helpers/extract-pagination';

const SEARCH_MOVIE_URL = '/search/movie';

export class MoviesApiService {
  static async search(query, page) {
    const { data } = await tmdbAxiosInstance.get(SEARCH_MOVIE_URL, {
      params: { query, page },
    });

    const movies = normalize(data.results);
    const pagination = extractPagination(data);

    return { movies, pagination };
  }
}