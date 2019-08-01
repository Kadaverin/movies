import { oneOfType, node, arrayOf, shape, any, string } from 'prop-types';

export const childrenPropType = oneOfType([node, arrayOf(node)]);

export const optionShape = shape({
  value: any.isRequired,
  label: node,
});

export const optionsPropType = arrayOf(optionShape);

export const customSelectClassesShape = shape({
  select: string,
  option: string,
});
