import React from 'react';
import { Grid } from '@material-ui/core';
import DiscoverPanelContainer from './containers/discover-panel.container';
import DiscoverMoviesListContainer from './containers/discover-movies-list.container';

function DiscoverMoviesPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <DiscoverPanelContainer />
      </Grid>
      <Grid item>
        <DiscoverMoviesListContainer />
      </Grid>
    </Grid>
  );
}

export default DiscoverMoviesPage;
