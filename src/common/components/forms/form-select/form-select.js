import React from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import { string, node, shape, bool } from 'prop-types';
import clsx from 'clsx';
import Select from '../select';
import { customSelectClassesShape } from '../../../../utils/constants/prop-types/common';
import { useLabelStyles } from './form-select.styles';

function FormSelect({
  name,
  label,
  variant,
  className,
  selectClasses,
  formControlClasses,
  fullWidth,
  ...restSelectProps
}) {
  const labelClasses = useLabelStyles();
  return (
    <FormControl
      className={clsx(className, formControlClasses.wrapper)}
      variant={variant}
      fullWidth={fullWidth}
    >
      {label && (
        <InputLabel
          htmlFor={name}
          className={formControlClasses.label}
          classes={labelClasses}
        >
          {label}
        </InputLabel>
      )}

      <Select
        customClasses={selectClasses}
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
  variant: string,
  className: string,
  fullWidth: bool,
  label: node,
  formControlClasses: shape({
    wrapper: string,
    label: string,
  }),

  selectClasses: customSelectClassesShape,
};

FormSelect.defaultProps = {
  className: '',
  variant: 'outlined',
  formControlClasses: {},
  selectClasses: {},
  fullWidth: false,
  name: undefined,
  label: null,
};

export default FormSelect;
