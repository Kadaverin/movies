import React from 'react';
import { connect } from 'react-redux';
import { orderedSetOf } from 'react-immutable-proptypes';
import { bool, func } from 'prop-types';

import { MoviesList } from '../../../common-components';
import {
  moviesListSelector,
  canLoadMoreMoviesSelector,
} from '../../../redux/movies/movies.selectors';
import { moviePreviewShape } from '../../../utils/constants/prop-types/movies';
import { useInfiniteScroll } from '../../../hooks/use-infinite-scroll';
import { loadNextMoviesDiscoveringPage } from '../../../redux/movies/movies.actions';

const DiscoverMoviesListContainer = ({ movies, canLoadMore, onFetchItems }) => {
  const containerRef = useInfiniteScroll({
    canLoadMore,
    onFetchItems,
  });

  return (
    <div
      ref={containerRef}
      // style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
    >
      <MoviesList movies={movies} />
    </div>
  );
};

DiscoverMoviesListContainer.propTypes = {
  movies: orderedSetOf(moviePreviewShape).isRequired,
  canLoadMore: bool.isRequired,
  onFetchItems: func.isRequired,
};

const mapStateToProps = state => ({
  movies: moviesListSelector(state),
  canLoadMore: canLoadMoreMoviesSelector(state),
});

const mapDispatchToProps = { onFetchItems: loadNextMoviesDiscoveringPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverMoviesListContainer);
