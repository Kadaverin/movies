import React from 'react';
import { Grid } from '@material-ui/core';
import { orderedSetOf } from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import MovieCard from '../movie-card';
import { makePosterUrl } from '../../utils/helpers/make-poster-url';
import { useCardListStyles } from './movies-list.styles';
import { moviePreviewShape } from '../../utils/constants/prop-types/movies';
import { ROUTES_CREATORS } from '../../utils/constants/routes.constants';

function MoviesList({ movies }) {
  const classes = useCardListStyles();

  return (
    <Grid
      container
      justify="space-evenly"
      spacing={2}
      className={classes.container}
    >
      {movies.map(movie => (
        <Grid item key={movie.get('id')}>
          <Link to={ROUTES_CREATORS.movieById(movie.get('id'))}>
            <MovieCard
              title={movie.get('title')}
              imgUrl={makePosterUrl(movie.get('poster_path'))}
              releaseDate={movie.get('release_date')}
              voteAverage={movie.get('vote_average')}
              voteCount={movie.get('vote_count')}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

MoviesList.propTypes = {
  movies: orderedSetOf(moviePreviewShape).isRequired,
};

export default MoviesList;
