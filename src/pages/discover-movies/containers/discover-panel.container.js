import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import DiscoverPanel from '../components/discover-panel';
import {
  moviesSorterPropType,
  moviesFiltersShape,
} from '../../../utils/constants/prop-types/movie-filters';
import {
  moviesSorterSelector,
  moviesFiltersSelector,
} from '../../../redux/movies/movies.selectors';
import {
  setMoviesFilter,
  setMoviesSorter,
} from '../../../redux/movies/movies.actions';
import { genresJsOptionsSelector } from '../../../redux/genres/genres.selectors';
import { optionsPropType } from '../../../utils/constants/prop-types/common';

const DiscoverPanelContainer = ({
  sorter,
  filters,
  onSetMoviesFilter,
  onSetMoviesSorter,
  genresOptions,
}) => {
  console.log({
    genresOptions,
    sorter,
    filters,
    onSetMoviesFilter,
    onSetMoviesSorter,
  });

  // return null;

  return (
    <DiscoverPanel
      sorter={sorter}
      filters={filters}
      genresOptions={genresOptions}
      onFilterChange={({ target }) =>
        onSetMoviesFilter(target.name, target.value)
      }
      onSorterChange={({ target }) => onSetMoviesSorter(target.value)}
    />
  );
};

DiscoverPanelContainer.propTypes = {
  onSetMoviesFilter: func.isRequired,
  onSetMoviesSorter: func.isRequired,
  sorter: moviesSorterPropType.isRequired,
  filters: moviesFiltersShape.isRequired,
  genresOptions: optionsPropType.isRequired,
};

const mapStateToProps = state => ({
  filters: moviesFiltersSelector(state),
  sorter: moviesSorterSelector(state),
  genresOptions: genresJsOptionsSelector(state),
});

const mapDispatchToProps = {
  onSetMoviesFilter: setMoviesFilter,
  onSetMoviesSorter: setMoviesSorter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverPanelContainer);
