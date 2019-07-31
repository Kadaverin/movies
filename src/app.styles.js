import { makeStyles } from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
}));
