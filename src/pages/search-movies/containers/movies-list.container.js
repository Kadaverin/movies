import React from 'react';
import { connect } from 'react-redux';
import { listOf } from 'immutable-prop-types';

import { bool, func } from 'prop-types';
import MoviesList from '../components/movies-list';
import {
  moviesListSelector,
  canLoadMoreMoviesSelector,
} from '../../../redux/movies/movies.selectors';
import { moviesPreviewShape } from '../../../utils/constants/prop-types/movies';
import { useInfiniteScroll } from '../../../hooks/use-infinite-scroll';
import { loadNextSearchMoviesPage } from '../../../redux/movies/movies.actions';

const MoviesListContainer = ({ movies, canLoadMore, onFetchItems }) => {
  const containerRef = useInfiniteScroll({
    canLoadMore,
    onFetchItems,
  });

  return (
    <div ref={containerRef}>
      <MoviesList movies={movies} />
    </div>
  );
};

MoviesListContainer.propTypes = {
  movies: listOf(moviesPreviewShape).isRequired,
  canLoadMore: bool.isRequired,
  onFetchItems: func.isRequired,
};

const mapStateToProps = state => ({
  movies: moviesListSelector(state),
  canLoadMore: canLoadMoreMoviesSelector(state),
});

const mapDispatchToProps = { onFetchItems: loadNextSearchMoviesPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);
