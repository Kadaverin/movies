import React from 'react';
import { number, string } from 'prop-types';
import { CircularProgress, Grid } from '@material-ui/core';
import { useLoaderStyles } from './loader.styles';

const Loader = ({ size, align, justify, ...restProps }) => {
  const classes = useLoaderStyles();

  return (
    <Grid
      container
      alignItems={align}
      justify={justify}
      className={classes.wrapper}
    >
      <CircularProgress size={size} {...restProps} />
    </Grid>
  );
};

Loader.propTypes = {
  size: number,
  align: string,
  justify: string,
};

Loader.defaultProps = {
  align: 'center',
  justify: 'center',
  size: 50,
};

export default Loader;
