import { extractPagination } from './extract-pagination';
import { normalize } from './normalize';

export function formatNormalizedListData(res) {
  const pagination = extractPagination(res);
  const data = normalize(res.results);

  return { pagination, data };
}
