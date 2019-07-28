import React from 'react';
import { string, element, arrayOf, shape, func } from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';

const Select = ({ options, onChange, ...rest }) => {
  return (
    <MaterialSelect onChange={onChange} {...rest}>
      {options.map(({ label, value }) => (
        <MenuItem value={value}>{label}</MenuItem>
      ))}
    </MaterialSelect>
  );
};

Select.propTypes = {
  onChange: func.isRequired,
  options: arrayOf(
    shape({
      label: element,
      value: string,
    }),
  ),
};

Select.defaultProps = {
  options: [],
};

export default Select;
