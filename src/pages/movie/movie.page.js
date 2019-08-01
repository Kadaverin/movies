import React from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import MovieInfo from './componetns/movie-info';
import {
  getMovie,
  discoverGenreClick,
} from '../../redux/movies/movies.actions';
import { matchShape } from '../../utils/constants/prop-types/router';
import { useDidMount } from '../../hooks/lifecircle';
import { Loader } from '../../common/components';
import { movieShape } from '../../utils/constants/prop-types/movies';
import {
  isSingleMovieLoadingSelector,
  movieByIdSelector,
} from '../../redux/movies/movies.selectors';

const MoviePage = ({ match, onGetMovie, isLoading, movie, onGenreClick }) => {
  useDidMount(() => {
    onGetMovie(match.params.movieId);
  });

  if (isLoading || !movie) {
    return <Loader />;
  }

  return <MovieInfo movie={movie} onGenreClick={onGenreClick} />;
};

MoviePage.propTypes = {
  isLoading: bool.isRequired,
  match: matchShape.isRequired,
  onGetMovie: func.isRequired,
  onGenreClick: func.isRequired,
  movie: movieShape,
};

MoviePage.defaultProps = {
  movie: null,
};

const mapStateToProps = (state, { match }) => ({
  isLoading: isSingleMovieLoadingSelector(state),
  movie: movieByIdSelector(state, { id: match.params.movieId }),
});

const mapDispatchToProps = {
  onGetMovie: getMovie,
  onGenreClick: discoverGenreClick,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
