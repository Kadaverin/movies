import React from 'react';
import { Grid, Portal } from '@material-ui/core';
import { bool } from 'prop-types';

import { Loader } from '..';
import { usePageLoaderStyles } from './page-loader.styles';

function PageLoader({ isVisible }) {
  const classes = usePageLoaderStyles();

  if (!isVisible) {
    return null;
  }

  return (
    <Portal container={document.body}>
      <Grid
        container
        className={classes.wrapper}
        justify="center"
        alignItems="center"
      >
        <Loader className={classes.loader} size={80} />
      </Grid>
    </Portal>
  );
}

PageLoader.propTypes = {
  isVisible: bool.isRequired,
};

export default PageLoader;
