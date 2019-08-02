import React from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';

import Header from '../components/header/header';
import { moviesSearchStringSelector } from '../../redux/movies/movies.selectors';
import { optionsPropType } from '../../utils/constants/prop-types/common';
import { genresJsOptionsSelector } from '../../redux/genres/genres.selectors';
import {
  setSearchString,
  discoverGenreClick,
} from '../../redux/movies/movies.actions';

const HeaderContainer = ({
  searchString,
  onSetSearchString,
  onGenreSelected,
  genresOptions,
}) => (
  <Header
    searchString={searchString}
    onSetSearchString={onSetSearchString}
    onGenreSelected={onGenreSelected}
    genresOptions={genresOptions}
  />
);

const mapStateToProps = state => ({
  searchString: moviesSearchStringSelector(state),
  genresOptions: genresJsOptionsSelector(state),
});

const mapDispatchToProps = {
  onSetSearchString: setSearchString,
  onGenreSelected: discoverGenreClick,
};

HeaderContainer.propTypes = {
  genresOptions: optionsPropType.isRequired,
  onSetSearchString: func.isRequired,
  onGenreSelected: func.isRequired,
  searchString: string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
