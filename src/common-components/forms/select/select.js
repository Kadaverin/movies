import React from 'react';
import clsx from 'clsx';
import {
  MenuItem,
  Select as MaterialSelect,
  OutlinedInput,
} from '@material-ui/core';
import {
  node,
  func,
  bool,
  oneOfType,
  string,
  array,
  number,
  elementType,
  shape,
} from 'prop-types';

import { useSelectStyles } from './select.styles';
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
  placeholder,
  inputProps,
  InputComponent,
  value: selectValue,
  multiple,
  customClasses,
  ...rest
}) => {
  const classes = useSelectStyles();

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
      classes={classes}
      {...rest}
    >
      {placeholder && (
        <MenuItem value="" disabled className={customClasses.placeholder}>
          {placeholder}
        </MenuItem>
      )}

      {withNone && (
        <MenuItem
          value={emptySelectVal}
          className={clsx(customClasses.option, customClasses.noneOption)}
        >
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
  value: oneOfType([string, number, array]),
  customClasses: customSelectClassesShape,
  placeholder: node,

  inputProps: shape({
    name: string,
    id: string,
  }),
};

Select.defaultProps = {
  InputComponent: OutlinedInput,
  placeholder: null,
  noneValue: undefined,
  inputProps: {},
  value: undefined,
  withNone: false,
  multiple: false,
  noneText: 'None',
  options: [],
  customClasses: {},
};

export default Select;
