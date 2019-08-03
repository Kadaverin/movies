import { BaseApiService } from '../../utils/api/base-api-service';

const GANRES_URL = '/genre/movie/list';

class GenresApiService extends BaseApiService {}

export default new GenresApiService({ baseUrl: GANRES_URL });
