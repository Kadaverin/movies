import { makeStyles, fade } from '@material-ui/core/styles';

export const usePageLoaderStyles = makeStyles(theme => ({
  wrapper: {
    top: 0,
    position: 'fixed',
    zIndex: theme.zIndex.tooltip + 1,
    height: '100vh',
    backgroundColor: fade(theme.palette.common.black, 0.3),
  },

  loader: {},
}));
