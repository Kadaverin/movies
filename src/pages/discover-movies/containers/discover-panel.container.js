import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import DiscoverPanel from '../components/discover-panel';
import { moviesFiltersShape } from '../../../utils/constants/prop-types/movie-filters';
import { moviesFiltersSelector } from '../../../redux/movies/movies.selectors';
import { setMoviesFilter } from '../../../redux/movies/movies.actions';
import { genresJsOptionsSelector } from '../../../redux/genres/genres.selectors';
import { optionsPropType } from '../../../utils/constants/prop-types/common';

const DiscoverPanelContainer = ({
  filters,
  onSetMoviesFilter,
  genresOptions,
}) => {
  return (
    <DiscoverPanel
      filters={filters}
      genresOptions={genresOptions}
      onFilterChange={({ target }) =>
        onSetMoviesFilter(target.name, target.value)
      }
    />
  );
};

DiscoverPanelContainer.propTypes = {
  onSetMoviesFilter: func.isRequired,
  filters: moviesFiltersShape.isRequired,
  genresOptions: optionsPropType.isRequired,
};

const mapStateToProps = state => ({
  filters: moviesFiltersSelector(state),
  genresOptions: genresJsOptionsSelector(state),
});

const mapDispatchToProps = {
  onSetMoviesFilter: setMoviesFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverPanelContainer);
