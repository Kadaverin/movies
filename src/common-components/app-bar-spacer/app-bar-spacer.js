import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export default withStyles(theme => ({
  root: theme.mixins.toolbar,
}))(Box);
