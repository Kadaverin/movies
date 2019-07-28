import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import { Select } from '../../../../common-components/forms';

const SearchPannel = () => (
  <Grid direction="column">
    <FormControl fullWidth>
      <Input
        placeholder="Type for search movie"
        name="search"
        // onChange={handleChange('amount')}
        endAdornment="search"
      />
    </FormControl>

    <div>
      <Select
        options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
      />
    </div>
  </Grid>
);

export default SearchPannel;
