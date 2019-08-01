import React from 'react';
import { connect } from 'react-redux';
import { orderedSetOf } from 'react-immutable-proptypes';
import { bool, func } from 'prop-types';

import { MoviesList, Loader } from '../../../common/components';
import {
  moviesListSelector,
  canLoadMoreMoviesSelector,
  isFirstListLoadingSelector,
} from '../../../redux/movies/movies.selectors';
import { moviePreviewShape } from '../../../utils/constants/prop-types/movies';
import { useInfiniteScroll } from '../../../hooks/use-infinite-scroll';
import { loadNextSearchMoviesPage } from '../../../redux/movies/movies.actions';

const MoviesListContainer = ({
  movies,
  canLoadMore,
  onFetchItems,
  isFirstLoading,
}) => {
  const containerRef = useInfiniteScroll({
    canLoadMore,
    onFetchItems,
  });

  if (isFirstLoading) {
    return <Loader />;
  }

  return (
    <div ref={containerRef}>
      <MoviesList movies={movies} />
    </div>
  );
};

MoviesListContainer.propTypes = {
  movies: orderedSetOf(moviePreviewShape).isRequired,
  canLoadMore: bool.isRequired,
  isFirstLoading: bool.isRequired,
  onFetchItems: func.isRequired,
};

const mapStateToProps = state => ({
  movies: moviesListSelector(state),
  canLoadMore: canLoadMoreMoviesSelector(state),
  isFirstLoading: isFirstListLoadingSelector(state),
});

const mapDispatchToProps = { onFetchItems: loadNextSearchMoviesPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);
