export const ROUTES = {
  SEARCH_MOVIES: '/search-movies',
  MOVIE: '/movies/:movieId',
  DISCOVER_MOVIES: '/discover-movies',
};

export const ROUTES_CREATORS = {
  movieById: id => `/movies/${id}`,
};
