export const formatCountries = (countries = []) =>
  countries.map(country => country.get('name')).join(', ');

export const formatGenres = (genres = []) =>
  genres.map(genre => genre.get('name')).join(', ');
