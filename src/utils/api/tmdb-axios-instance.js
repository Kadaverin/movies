import axios from 'axios';
import { TMDB_API_URL, TMDB_API_KEY } from '../configs';

const tmdbAxiosInstance = axios.create({
  baseURL: TMDB_API_URL,
});

tmdbAxiosInstance.interceptors.request.use(config => {
  const newConfig = { ...config };

  if (!newConfig.params) {
    newConfig.params = {};
  }

  newConfig.params.api_key = TMDB_API_KEY;

  return newConfig;
});

export { tmdbAxiosInstance };
