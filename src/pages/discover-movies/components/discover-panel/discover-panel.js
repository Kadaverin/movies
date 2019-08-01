import React from 'react';
import { Grid } from '@material-ui/core';
import { func } from 'prop-types';

import { FormSelect } from '../../../../common-components';
import { MOVIES_FILTER_NAMES } from '../../../../utils/constants/filter-names';
import {
  moviesSorterPropType,
  moviesFiltersShape,
} from '../../../../utils/constants/prop-types/movie-filters';
import { optionsPropType } from '../../../../utils/constants/prop-types/common';
import { MOVIES_YEARS_OPTIONS } from '../../../../utils/constants/movies-years-options';
import { MOVIES_SORT_OPTIONS } from '../../../../utils/constants/movies-sort-options';

function DiscoverPanel({
  onFilterChange,
  onSorterChange,
  filters,
  sorter,
  yearOptions,
  sortOptions,
  genresOptions,
}) {
  return (
    <Grid container item spacing={8}>
      <Grid item>
        <FormSelect
          options={yearOptions}
          value={filters.get(MOVIES_FILTER_NAMES.YEAR)}
          displayEmpty={false}
          name={MOVIES_FILTER_NAMES.YEAR}
          label="year"
          onChange={onFilterChange}
          withNone
        />
      </Grid>

      <Grid item>
        <FormSelect
          label="Sort by"
          options={sortOptions}
          placeholder="sort by"
          onChange={onSorterChange}
          value={sorter}
        />
      </Grid>

      <Grid item>
        <FormSelect
          muliple
          value={filters.get(MOVIES_FILTER_NAMES.GENRES)}
          name={MOVIES_FILTER_NAMES.GENRES}
          options={genresOptions}
          label="genres"
          onChange={onFilterChange}
        />
      </Grid>
    </Grid>
  );
}

DiscoverPanel.propTypes = {
  onSorterChange: func.isRequired,
  onFilterChange: func.isRequired,
  sorter: moviesSorterPropType.isRequired,
  filters: moviesFiltersShape.isRequired,

  yearOptions: optionsPropType,
  sortOptions: optionsPropType,
  genresOptions: optionsPropType,
};

DiscoverPanel.defaultProps = {
  yearOptions: MOVIES_YEARS_OPTIONS,
  sortOptions: MOVIES_SORT_OPTIONS,
  genresOptions: [],
};

export default DiscoverPanel;
