import { tmdbAxiosInstance } from '../../utils/tmdb-axios-instance';
import { normalize } from '../../utils/helpers/normalize';
import { extractPagination } from '../../utils/helpers/extract-pagination';

const SEARCH_MOVIE_URL = '/search/movie';
const MOVIE_BASE_URL = '/movie';
const DISCOVER_MOVIES_URL = '/discover/movie';

export class MoviesApiService {
  static async search(query, page) {
    const { data } = await tmdbAxiosInstance.get(SEARCH_MOVIE_URL, {
      params: { query, page },
    });

    const movies = normalize(data.results);
    const pagination = extractPagination(data);

    return { movies, pagination };
  }

  static async getOne(id) {
    const { data } = await tmdbAxiosInstance.get(`${MOVIE_BASE_URL}/${id}`);

    return data;
  }

  static async discover(filters, sorter, page) {
    const { data } = await tmdbAxiosInstance.get(DISCOVER_MOVIES_URL, {
      params: { ...filters, sort_by: sorter, page },
    });

    const movies = normalize(data.results);
    const pagination = extractPagination(data);

    return { movies, pagination };
  }
}
