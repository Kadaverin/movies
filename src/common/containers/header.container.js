import React from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';

import Header from '../components/header/header';
import { moviesSearchQuerySelector } from '../../redux/movies/movies.selectors';
import { optionsPropType } from '../../utils/constants/prop-types/common';
import { genresJsOptionsSelector } from '../../redux/genres/genres.selectors';
import {
  setSearchQuery,
  discoverGenreClick,
} from '../../redux/movies/movies.actions';

const HeaderContainer = ({
  searchQuery,
  onSetSearchQuery,
  onGenreSelected,
  genresOptions,
}) => (
  <Header
    searchQuery={searchQuery}
    onSetSearchQuery={onSetSearchQuery}
    onGenreSelected={onGenreSelected}
    genresOptions={genresOptions}
  />
);

const mapStateToProps = state => ({
  searchQuery: moviesSearchQuerySelector(state),
  genresOptions: genresJsOptionsSelector(state),
});

const mapDispatchToProps = {
  onSetSearchQuery: setSearchQuery,
  onGenreSelected: discoverGenreClick,
};

HeaderContainer.propTypes = {
  genresOptions: optionsPropType.isRequired,
  onSetSearchQuery: func.isRequired,
  onGenreSelected: func.isRequired,
  searchQuery: string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
