import React from 'react';
import {
  node,
  func,
  bool,
  oneOfType,
  string,
  array,
  number,
  elementType,
} from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';
import { OutlinedInput } from '@material-ui/core';
import {
  optionsPropType,
  customSelectClassesShape,
} from '../../../utils/constants/prop-types/common';

const Select = ({
  options,
  withNone,
  noneText,
  onChange,
  noneValue,
  inputProps,
  InputComponent,
  value: selectValue,
  multiple,
  customClasses,
  ...rest
}) => {
  let emptySelectVal = noneValue;

  if (typeof noneValue === 'undefined') {
    emptySelectVal = multiple ? [] : '';
  }

  const input = <InputComponent {...inputProps} margin="none" />;

  return (
    <MaterialSelect
      className={customClasses.select}
      onChange={onChange}
      multiple={multiple}
      input={input}
      value={selectValue || emptySelectVal}
      {...rest}
    >
      {withNone && (
        <MenuItem value={emptySelectVal} className={customClasses.option}>
          {noneText}
        </MenuItem>
      )}

      {options.map(({ label, value }) => (
        <MenuItem value={value} key={value} className={customClasses.option}>
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
  InputComponent: elementType,
  noneValue: oneOfType([number, string, array]),
  onChange: func.isRequired,
  options: optionsPropType,
  value: oneOfType([string, number, array]).isRequired,
  customClasses: customSelectClassesShape,
};

Select.defaultProps = {
  InputComponent: OutlinedInput,
  noneValue: undefined,
  withNone: false,
  multiple: false,
  noneText: 'None',
  options: [],
  customClasses: {},
};

export default Select;
