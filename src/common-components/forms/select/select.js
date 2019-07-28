import React from 'react';
import { string, node, arrayOf, shape, func, bool } from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';

const Select = ({
  options,
  withNone,
  noneValue,
  noneText,
  onChange,
  displayEmpty,
  ...rest
}) => {
  return (
    <MaterialSelect
      onChange={onChange}
      displayEmpty={withNone || displayEmpty}
      {...rest}
    >
      {withNone && <MenuItem value={noneValue}>{noneText}</MenuItem>}
      {options.map(({ label, value }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </MaterialSelect>
  );
};

Select.propTypes = {
  noneText: node,
  withNone: bool,
  displayEmpty: bool,
  noneValue: string,
  onChange: func.isRequired,
  options: arrayOf(
    shape({
      label: node,
      value: string,
    }),
  ),
};

Select.defaultProps = {
  withNone: false,
  displayEmpty: false,
  noneValue: null,
  noneText: 'None',
  options: [],
};

export default Select;
