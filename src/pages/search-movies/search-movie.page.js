import React from 'react';
import { connect } from 'react-redux';
import { listOf } from 'immutable-prop-types';

import MoviesList from './components/movies-list';
import { moviesListSelector } from '../../redux/movies/movies.selectors';
import { moviesPreviewShape } from '../../utils/constants/prop-types/movies';

const SearchMoviePage = ({ movies }) => (
  <>
    <MoviesList movies={movies} />
  </>
);

SearchMoviePage.propTypes = {
  movies: listOf(moviesPreviewShape).isRequired,
};

const mapStateToProps = state => ({
  movies: moviesListSelector(state),
});

export default connect(mapStateToProps)(SearchMoviePage);
