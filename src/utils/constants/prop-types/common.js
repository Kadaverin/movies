import { oneOfType, node, arrayOf } from 'prop-types';

export const childrenPropType = oneOfType([node, arrayOf(node)]);
