import React from 'react';
import { listOf } from 'react-immutable-proptypes';
import { func } from 'prop-types';

import { useGenresStyles } from './genres.styles';
import { genreShape } from '../../../../utils/constants/prop-types/movies';

function Genres({ items, onGenreClick }) {
  const classes = useGenresStyles();

  const content = items
    .map(genre => (
      <span
        className={classes.genre}
        onClick={() => onGenreClick(genre.get('id'))}
        role="button"
        tabIndex={0}
      >
        {genre.get('name')}
      </span>
    ))
    .interpose(',  ')
    .toJS();

  return <div>{content}</div>;
}

Genres.propTypes = {
  onGenreClick: func.isRequired,
  items: listOf(genreShape),
};

Genres.defaultProps = {
  items: [],
};

export default Genres;
