import React from 'react';
import { string, number } from 'prop-types';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import Raiting from '../raiting';
import { useCardStyles } from './movie-card.styles';
import { DEFAULT_IMG_HEIGHT } from '../../../utils/constants/movie-card';

function MovieCard({
  imgUrl,
  imgHeight,
  title,
  releaseDate,
  voteCount,
  voteAverage,
}) {
  const classes = useCardStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionContent}>
        <div>
          <CardMedia
            className={classes.media}
            component="img"
            alt="poster"
            height={imgHeight}
            image={imgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {releaseDate}
            </Typography>
          </CardContent>
        </div>

        <CardActions disableSpacing>
          <Raiting voteAverage={voteAverage} voteCount={voteCount} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

MovieCard.propTypes = {
  imgUrl: string.isRequired,
  title: string.isRequired,
  releaseDate: string.isRequired,
  voteCount: number.isRequired,
  voteAverage: number.isRequired,
  imgHeight: number,
};

MovieCard.defaultProps = {
  imgHeight: DEFAULT_IMG_HEIGHT,
};

export default MovieCard;
