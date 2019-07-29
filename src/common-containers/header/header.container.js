import React from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';

import { setSearchQuery } from '../../redux/movies/movies.actions';
import { moviesSearchQuerySelector } from '../../redux/movies/movies.selectors';

import Header from '../../common-components/header/header';

const HeaderContainer = ({ searchQuery, onSetSearchQuery }) => (
  <Header searchQuery={searchQuery} onSetSearchQuery={onSetSearchQuery} />
);

const mapStateToProps = state => ({
  searchQuery: moviesSearchQuerySelector(state),
});

const mapDispatchToProps = {
  onSetSearchQuery: setSearchQuery,
};

HeaderContainer.propTypes = {
  onSetSearchQuery: func.isRequired,
  searchQuery: string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
