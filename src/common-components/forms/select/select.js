import React from 'react';
import { node, func, bool } from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';
import { optionsPropType } from '../../../utils/constants/prop-types/common';

const Select = ({
  options,
  withNone,
  noneText,
  onChange,
  multiple,
  ...rest
}) => {
  const noneValue = multiple ? [] : '';

  return (
    <MaterialSelect onChange={onChange} multiple={multiple} {...rest}>
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
  multiple: bool,
  onChange: func.isRequired,
  options: optionsPropType,
};

Select.defaultProps = {
  withNone: false,
  multiple: false,
  noneText: 'None',
  options: [],
};

export default Select;
