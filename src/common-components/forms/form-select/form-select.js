import React from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import { string, node } from 'prop-types';
import Select from '../select';

function FormSelect({ name, label, ...restSelectProps }) {
  return (
    <FormControl>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Select
        inputProps={{
          name,
          id: name,
        }}
        {...restSelectProps}
      />
    </FormControl>
  );
}

FormSelect.propTypes = {
  name: string,
  label: node,
};

FormSelect.defaultProps = {
  name: undefined,
  label: null,
};

export default FormSelect;
