import React from 'react';
import { Grid } from '@material-ui/core';
import { listOf } from 'immutable-prop-types';

import MovieCard from '../movie-card';
import { makePosterUrl } from '../../../../utils/make-poster-url';
import { useCardListStyles } from './movies-list.styles';
import { moviesPreviewShape } from '../../../../utils/constants/prop-types/movies';

function MoviesList({ movies }) {
  const classes = useCardListStyles();

  return (
    <Grid container justify="center" spacing={2} className={classes.container}>
      {movies.map(movie => (
        <Grid item key={movie.get('id')}>
          <MovieCard
            title={movie.get('title')}
            imgUrl={makePosterUrl(movie.get('poster_path'))}
            releaseDate={movie.get('release_date')}
            voteAverage={movie.get('vote_average')}
            voteCount={movie.get('vote_count')}
          />
        </Grid>
      ))}
    </Grid>
  );
}

MoviesList.propTypes = {
  movies: listOf(moviesPreviewShape).isRequired,
};

export default MoviesList;
