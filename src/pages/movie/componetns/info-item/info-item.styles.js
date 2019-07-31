import { makeStyles } from '@material-ui/core';

export const useInfoItemStyles = makeStyles(theme => ({
  item: {
    color: theme.palette.text.secondary,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  infoCaption: {
    minWidth: '185px',
    width: '185px',
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
}));
