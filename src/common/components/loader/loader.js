import React from 'react';
import clsx from 'clsx';
import { number, string } from 'prop-types';
import { CircularProgress, Grid } from '@material-ui/core';

import { useLoaderStyles } from './loader.styles';

const Loader = ({ size, align, justify, className, ...restProps }) => {
  const classes = useLoaderStyles();

  return (
    <Grid
      container
      alignItems={align}
      justify={justify}
      className={clsx(classes.wrapper, className)}
    >
      <CircularProgress size={size} {...restProps} />
    </Grid>
  );
};

Loader.propTypes = {
  size: number,
  align: string,
  justify: string,
  className: string,
};

Loader.defaultProps = {
  className: '',
  align: 'center',
  justify: 'center',
  size: 60,
};

export default Loader;
