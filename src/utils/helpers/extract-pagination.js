export const extractPagination = resData => ({
  page: resData.page,
  totalPages: resData.total_pages,
  totalResults: resData.total_results,
});
