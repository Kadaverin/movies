import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Map } from 'immutable';
import { connect } from 'react-redux';
import { func, string, instanceOf, arrayOf, shape } from 'prop-types';

import { Select } from '../../../../common-components/forms';

import {
  setMoviesSorter,
  setMoviesFilter,
  setSearchQuery,
} from '../../../../redux/movies/movies.actions';
import {
  moviesSorterSelector,
  moviesFiltersSelector,
} from '../../../../redux/movies/movies.selectors';
import { MOVIES_SORT_OPTIONS } from '../../../../utils/constants/movies-sort-options';
import { MOVIES_YEARS_OPTIONS } from '../../../../utils/constants/movies-years-options';
import { MOVIES_FILTER_NAMES } from '../../../../utils/constants/filter-names';
import { genresJsOptionsSelector } from '../../../../redux/genres/genres.selectors';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  appBarSpacer: theme.mixins.toolbar,
}));

const SearchPannel = ({
  // onSetSorter,
  // onSetFilter,
  // sorter,
  // filters,
  // genresOptions,
  onSetSearchQuery,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie db
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={({ target }) => onSetSearchQuery(target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );

  // return (
  //   <AppBar>
  //     <Toolbar>
  //       <FormControl fullWidth>
  //         <Input
  //           placeholder="Type for search movie"
  //           name="search"
  //           onChange={({ target }) => onSetSearchQuery(target.value)}
  //           // onChange={handleChange('amount')}
  //           // endAdornment="search"
  //         />
  //       </FormControl>
  //     </Toolbar>
  //   </AppBar>
  // );
};

SearchPannel.propTypes = {
  onSetSorter: func.isRequired,
  onSetSearchQuery: func.isRequired,
  filters: instanceOf(Map).isRequired,
  onSetFilter: func.isRequired,
  sorter: string.isRequired,
  genresOptions: arrayOf(shape({})).isRequired,
};

const mapStateToProps = state => ({
  sorter: moviesSorterSelector(state),
  filters: moviesFiltersSelector(state),
  genresOptions: genresJsOptionsSelector(state),
});

const mapDispatchToProps = {
  onSetSearchQuery: setSearchQuery,
  onSetSorter: setMoviesSorter,
  onSetFilter: setMoviesFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPannel);
