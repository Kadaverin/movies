import { makeStyles } from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
}));
