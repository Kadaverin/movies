import React from 'react';
import { Grid } from '@material-ui/core';
import { func } from 'prop-types';

import clsx from 'clsx';
import { FormSelect } from '../../../../common/components';
import {
  MOVIES_FILTER_NAMES,
  EMPTY_YEAR_FILTER_VAL,
} from '../../../../utils/constants/filters';
import { moviesFiltersShape } from '../../../../utils/constants/prop-types/movie-filters';
import { optionsPropType } from '../../../../utils/constants/prop-types/common';
import { MOVIES_YEARS_OPTIONS } from '../../../../utils/constants/movies-years-options';
import { MOVIES_SORT_OPTIONS } from '../../../../utils/constants/movies-sort-options';
import { useDiscoverPanelStyles } from './discover-panel.styles';

function DiscoverPanel({
  onFilterChange,
  filters,
  yearOptions,
  sortOptions,
  genresOptions,
}) {
  const classes = useDiscoverPanelStyles();

  return (
    <Grid container item spacing={4} className={classes.container}>
      <Grid item>
        <FormSelect
          label="Release year"
          name={MOVIES_FILTER_NAMES.YEAR}
          value={filters.get(MOVIES_FILTER_NAMES.YEAR)}
          options={yearOptions}
          className={classes.select}
          onChange={onFilterChange}
          noneValue={EMPTY_YEAR_FILTER_VAL}
          withNone
        />
      </Grid>

      <Grid item>
        <FormSelect
          label="Sort by"
          value={filters.get(MOVIES_FILTER_NAMES.SORT_BY)}
          name={MOVIES_FILTER_NAMES.SORT_BY}
          className={classes.select}
          options={sortOptions}
          onChange={onFilterChange}
        />
      </Grid>

      <Grid item className={classes.grow}>
        <FormSelect
          label="With genres"
          multiple
          fullWidth
          name={MOVIES_FILTER_NAMES.GENRES}
          value={filters.get(MOVIES_FILTER_NAMES.GENRES).toJS()}
          options={genresOptions}
          onChange={onFilterChange}
          className={clsx(classes.select, classes.genresSelect)}
        />
      </Grid>
    </Grid>
  );
}

DiscoverPanel.propTypes = {
  onFilterChange: func.isRequired,
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
