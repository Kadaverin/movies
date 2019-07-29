import axios from 'axios';
import { TMDB_API_URL, TMDB_API_KEY } from './configs';

const tmdbAxiosInstance = axios.create({
  baseURL: TMDB_API_URL,
});

tmdbAxiosInstance.interceptors.request.use(config => {
  if(!config.params) {
    config.params = {}
  }

  config.params['api_key'] = TMDB_API_KEY;

  return config;
});

export { tmdbAxiosInstance };