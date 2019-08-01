import { oneOfType, node, arrayOf, shape, any } from 'prop-types';

export const childrenPropType = oneOfType([node, arrayOf(node)]);

export const optionShape = shape({
  value: any.isRequired,
  label: node,
});

export const optionsPropType = arrayOf(optionShape);
