export const ROUTES = {
  SEARCH_MOVIES: '/search-movies',
  MOVIE: '/movies/:movieId',
};

export const ROUTES_CREATORS = {
  movieById: id => `/movies/${id}`,
};
