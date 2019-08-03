import { MOVIES_FILTER_NAMES } from '../../utils/constants/filters';
import { BaseApiService } from '../../utils/api/base-api-service';
import { formatNormalizedListData } from '../../utils/helpers/format-normalized-res-data';

const SEARCH_MOVIE_URL = '/search/movie';
const MOVIE_BASE_URL = '/movie';
const DISCOVER_MOVIES_URL = '/discover/movie';

class MoviesApiService extends BaseApiService {
  search(query, page) {
    return this.get({
      url: SEARCH_MOVIE_URL,
      params: { query, page },
      responseFormatter: formatNormalizedListData,
    });
  }

  discover(filters, page) {
    return this.get({
      url: DISCOVER_MOVIES_URL,
      params: {
        year: filters[MOVIES_FILTER_NAMES.YEAR],
        with_genres: filters[MOVIES_FILTER_NAMES.GENRES].join(','),
        sort_by: filters[MOVIES_FILTER_NAMES.SORT_BY],
        page,
      },
      responseFormatter: formatNormalizedListData,
    });
  }
}

export default new MoviesApiService({
  baseUrl: MOVIE_BASE_URL,
});
