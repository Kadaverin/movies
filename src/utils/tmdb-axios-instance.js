import axios from 'axios';
import { TMDB_API_URL, TMDB_API_ACCESS_JWT_TOKEN } from './configs';

export const tmdbAxiosInstance = axios.create({
  baseURL: TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_ACCESS_JWT_TOKEN}`,
  },
});
