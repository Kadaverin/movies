import { tmdbAxiosInstance } from '../tmdb-axios-instance';

export class BaseApiService {
  constructor({ baseUrl, apiCaller = tmdbAxiosInstance }) {
    this.baseUrl = baseUrl;
    this.apiCaller = apiCaller;
  }

  async request({ method, url, params, body, responseFormatter }) {
    const { data } = await this.apiCaller.request({
      method,
      url,
      params,
      body,
    });

    return responseFormatter ? responseFormatter(data) : data;
  }

  get(configs = {}) {
    const { url = this.baseUrl, params, responseFormatter } = configs;

    return this.request({
      method: 'GET',
      url,
      params,
      responseFormatter,
    });
  }

  getOne(id, responseFormatter) {
    return this.get({ url: `${this.baseUrl}/${id}`, responseFormatter });
  }
}
