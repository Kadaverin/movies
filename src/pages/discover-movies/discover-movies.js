import React from 'react';
import { Grid } from '@material-ui/core';
import DiscoverPanelContainer from './containers/discover-panel.container';

function DiscoverMoviesPage() {
  return (
    <Grid direction="column">
      <DiscoverPanelContainer />
    </Grid>
  );
}

export default DiscoverMoviesPage;
