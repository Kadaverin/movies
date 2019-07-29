import { makeStyles } from '@material-ui/core/styles';

export const useCardStyles = makeStyles({
  card: {
    maxWidth: 200,
    height: '100%',
  },

  cardActionContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
