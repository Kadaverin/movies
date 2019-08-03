import React from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';

import DiscoverPanelContainer from './containers/discover-panel.container';
import DiscoverMoviesListContainer from './containers/discover-movies-list.container';
import { useDiscoverMoviesStyles } from './discover-movies.styles';

function DiscoverMoviesPage() {
  const classes = useDiscoverMoviesStyles();

  return (
    <Grid container className={clsx(classes.container, classes.grow)}>
      <Grid item className={classes.grow}>
        <DiscoverPanelContainer />
      </Grid>
      <Grid item container className={classes.grow}>
        <DiscoverMoviesListContainer />
      </Grid>
    </Grid>
  );
}

export default DiscoverMoviesPage;
