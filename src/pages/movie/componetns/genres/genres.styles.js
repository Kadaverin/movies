import { makeStyles } from '@material-ui/core';

export const useGenresStyles = makeStyles(theme => ({
  genre: {
    // color: '#00a0b0',
    color: theme.palette.primary.light,
    cursor: 'pointer',
    // textDecoration: 'underline',

    '&:not(:first-child)': {
      paddingLeft: '5px',
    },

    '&:hover': {
      // color: '#2e859e',
      color: theme.palette.primary.dark,
    },
  },
}));
