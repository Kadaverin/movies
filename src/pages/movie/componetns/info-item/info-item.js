import React from 'react';
import { Grid } from '@material-ui/core';
import { node } from 'prop-types';

import { childrenPropType } from '../../../../utils/constants/prop-types/common';
import { useInfoItemStyles } from './info-item.styles';

const InfoItem = ({ caption, content, children }) => {
  const classes = useInfoItemStyles();

  return (
    <Grid item container className={classes.item} wrap="nowrap">
      <span className={classes.infoCaption}>{caption}: </span>

      {content || children}
    </Grid>
  );
};

InfoItem.propTypes = {
  caption: node.isRequired,
  content: childrenPropType,
  children: childrenPropType,
};

InfoItem.defaultProps = {
  content: null,
  children: null,
};

export default InfoItem;
