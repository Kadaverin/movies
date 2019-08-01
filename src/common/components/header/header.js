import React from 'react';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { func, string, node } from 'prop-types';

import { userHeaderStyles } from './header.styles';
import { Select } from '../forms';
import { optionsPropType } from '../../../utils/constants/prop-types/common';

const Header = ({
  title,
  onSetSearchQuery,
  searchQuery,
  genresOptions,
  onGenreSelected,
}) => {
  const classes = userHeaderStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
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
          <Select
            InputComponent={InputBase}
            className={clsx(classes.genresSelect)}
            placeholder="Genre"
            onChange={({ target }) => onGenreSelected(target.value)}
            options={genresOptions}
            displayEmpty
          />
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  title: node,
  onSetSearchQuery: func.isRequired,
  onGenreSelected: func.isRequired,
  searchQuery: string.isRequired,
  genresOptions: optionsPropType.isRequired,
};

Header.defaultProps = {
  title: 'Movie db',
};

export default Header;
