export const genresListSelector = state => state.getIn(['Genres', 'list']);

export const genresJsOptionsSelector = state => {
  const list = genresListSelector(state);

  return list
    .map(genre => ({
      label: genre.get('name'),
      value: genre.get('id'),
    }))
    .toJS();
};
