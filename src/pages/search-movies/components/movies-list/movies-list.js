import React from 'react';
import { Grid, CardActions } from '@material-ui/core';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { moviesListSelector } from '../../../../redux/movies/movies.selectors';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '1rem',
    // height: '90vh',
    // overflow: 'auto',
    width: '100%'
  },

  card: {
    maxWidth: 200,
    height: '100%',
  },

  cardActionContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  appBarSpacer: theme.mixins.toolbar,
}));

const MoviesList = ({ movies }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.container}
      >
        {movies.map(movie => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardActionContent}>
                <div>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    alt="poster"
                    height="300"
                    image={`https://image.tmdb.org/t/p/w500/${movie.get(
                      'poster_path',
                    )}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.get('title')}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {movie.get('release_date')}
                    </Typography>
                  </CardContent>
                </div>

                <CardActions disableSpacing>
                  <Typography variant="body2" color="secondary" component="p">
                    {movie.get('vote_average')}{' '}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      ({movie.get('vote_count')})
                    </Typography>
                  </Typography>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  movies: moviesListSelector(state),
});

export default connect(mapStateToProps)(MoviesList);
