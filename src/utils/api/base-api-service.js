import { tmdbAxiosInstance } from './tmdb-axios-instance';

export class BaseApiService {
  constructor({ baseUrl, apiCaller = tmdbAxiosInstance }) {
    this.baseUrl = baseUrl;
    this.apiCaller = apiCaller;
  }

  async request({ method, url, params, body, formatResponse }) {
    const { data } = await this.apiCaller.request({
      method,
      url,
      params,
      body,
    });

    return formatResponse ? formatResponse(data) : data;
  }

  get(configs = {}) {
    const { url = this.baseUrl, params, formatResponse } = configs;

    return this.request({
      method: 'GET',
      url,
      params,
      formatResponse,
    });
  }

  getOne(id, formatResponse) {
    return this.get({ url: `${this.baseUrl}/${id}`, formatResponse });
  }
}
