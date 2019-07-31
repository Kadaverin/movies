import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { func, string } from 'prop-types';
import { userHeaderStyles } from './header.styles';

const Header = ({ onSetSearchQuery, searchQuery }) => {
  const classes = userHeaderStyles();

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
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
                value={searchQuery}
                placeholder="Search movies…"
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
      {/* <div className={classes.appBarSpacer} /> */}
    </>
  );
};

Header.propTypes = {
  onSetSearchQuery: func.isRequired,
  searchQuery: string.isRequired,
};

export default Header;
