import { makeStyles } from '@material-ui/core/styles';

export const useMovieInfoStyles = makeStyles(theme => ({
  container: {
    padding: '2.5rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      padding: '1rem',
    },
  },

  info: {
    width: 'auto',
  },

  infoCaption: {
    width: '100px',
    display: 'inline-block',
    fontWeight: 'bold',
  },
}));
