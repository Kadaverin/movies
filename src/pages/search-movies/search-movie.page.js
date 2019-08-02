import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import MoviesListContainer from './containers/movies-list.container';
import { useWillUnmount } from '../../hooks/lifecircle';
import { clearSearchString } from '../../redux/movies/movies.actions';

const SearchMoviePage = ({ onClearSearchString }) => {
  useWillUnmount(() => {
    onClearSearchString();
  });

  return (
    <>
      <MoviesListContainer />
    </>
  );
};

SearchMoviePage.propTypes = {
  onClearSearchString: func.isRequired,
};

const mapDispatchToProps = {
  onClearSearchString: clearSearchString,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchMoviePage);
