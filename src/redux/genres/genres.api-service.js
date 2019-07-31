import { tmdbAxiosInstance } from '../../utils/tmdb-axios-instance';

const GANRES_URL = '/genre/movie/list';

export class GenresApiService {
  static getList() {
    return tmdbAxiosInstance.get(GANRES_URL);
  }
}
