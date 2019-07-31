import React from 'react';
import { Typography } from '@material-ui/core';
import { number, string } from 'prop-types';

const Raiting = ({ voteAverage, variant, voteCount }) => (
  <Typography variant={variant} color="secondary" component="span">
    {voteAverage}{' '}
    <Typography color="textSecondary" component="span">
      ({voteCount})
    </Typography>
  </Typography>
);

Raiting.propTypes = {
  variant: string,
  voteAverage: number.isRequired,
  voteCount: number.isRequired,
};

Raiting.defaultProps = {
  variant: 'body2',
};

export default Raiting;
