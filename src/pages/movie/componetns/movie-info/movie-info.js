import React from 'react';
import { Grid } from '@material-ui/core';

import InfoItem from '../info-item';
import { Raiting } from '../../../../common-components';
import { movieShape } from '../../../../utils/constants/prop-types/movies';
import { makePosterUrl } from '../../../../utils/helpers/make-poster-url';
import {
  formatCountries,
  formatGenres,
} from '../../../../utils/helpers/formatters';
import { useMovieInfoStyles } from './movie-info.styles';

function MovieInfo({ movie }) {
  const classes = useMovieInfoStyles();

  return (
    <Grid container spacing={2} className={classes.container} wrap="nowrap">
      <Grid item>
        <img
          src={makePosterUrl(movie.get('poster_path'))}
          height="300"
          alt="poster"
        />
      </Grid>

      <Grid
        item
        container
        spacing={2}
        direction="column"
        zeroMinWidth
        className={classes.info}
      >
        <InfoItem caption="Ratings">
          <Raiting
            voteAverage={movie.get('vote_average')}
            voteCount={movie.get('vote_count')}
          />
        </InfoItem>

        <InfoItem caption="Tagline" content={movie.get('tagline')} />

        <InfoItem caption="Release date" content={movie.get('release_date')} />

        <InfoItem
          caption="Production country(es)"
          content={formatCountries(movie.get('production_countries'))}
        />

        <InfoItem
          caption="Genres"
          content={formatGenres(movie.get('genres'))}
        />

        <InfoItem caption="Overview" content={movie.get('overview')} />
      </Grid>
    </Grid>
  );
}

MovieInfo.propTypes = {
  movie: movieShape.isRequired,
};

export default MovieInfo;
