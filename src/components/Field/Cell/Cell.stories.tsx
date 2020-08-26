import React from 'react';
import { Cell } from './Cell';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Board / Cell',
	decorators: [withKnobs],
};

export const nonFilled = () => [
	<Cell
		x={number('x', 1)}
		y={number('y', 23)}
		key={'stories'}
		onClick={action('Cell clicked')}
	/>,
];

export const Filled = () => [
	<Cell
		filled={true}
		x={number('x', 1)}
		y={number('y', 23)}
		key={'stories'}
		onClick={action('Cell clicked')}
	/>,
];
