import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import MoviesListContainer from './containers/movies-list.container';
import { useWillUnmount } from '../../hooks/lifecircle';
import { clearSearchQuery } from '../../redux/movies/movies.actions';

const SearchMoviePage = ({ onClearSearchQuery }) => {
  useWillUnmount(() => {
    onClearSearchQuery();
  });

  return (
    <>
      <MoviesListContainer />
    </>
  );
};

SearchMoviePage.propTyps = {
  onClearSearchQuery: func.isRequired,
};

const mapDispatchToProps = {
  onClearSearchQuery: clearSearchQuery,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchMoviePage);
