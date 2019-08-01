import { tmdbAxiosInstance } from '../../utils/tmdb-axios-instance';

const GANRES_URL = '/genre/movie/list';

export class GenresApiService {
  static async getList() {
    const { data } = await tmdbAxiosInstance.get(GANRES_URL);

    return data.genres;
  }
}
