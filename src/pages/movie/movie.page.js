import React from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import MovieInfo from './componetns/movie-info';
import { getMovie, clearSearchQuery } from '../../redux/movies/movies.actions';
import { matchShape } from '../../utils/constants/prop-types/router';
import { useDidMount } from '../../hooks/lifecircle';
import { Loader } from '../../common-components';
import { movieShape } from '../../utils/constants/prop-types/movies';
import {
  isMoviesLoadingSelector,
  movieByIdSelector,
} from '../../redux/movies/movies.selectors';

const MoviePage = ({ match, onClearSearch, onGetMovie, isLoading, movie }) => {
  useDidMount(() => {
    onGetMovie(match.params.movieId);
    onClearSearch();
  });

  if (isLoading || !movie) {
    return <Loader />;
  }

  return <MovieInfo movie={movie} />;
};

MoviePage.propTypes = {
  isLoading: bool.isRequired,
  match: matchShape.isRequired,
  onClearSearch: func.isRequired,
  onGetMovie: func.isRequired,
  movie: movieShape,
};

MoviePage.defaultProps = {
  movie: null,
};

const mapStateToProps = (state, { match }) => ({
  isLoading: isMoviesLoadingSelector(state),
  movie: movieByIdSelector(state, { id: match.params.movieId }),
});

const mapDispatchToProps = {
  onGetMovie: getMovie,
  onClearSearch: clearSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
