export const formatCountries = countries =>
  (countries || []).map(country => country.get('name')).join(', ');
