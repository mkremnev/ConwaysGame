import React from 'react';
import { Field } from './Field';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Board /Field',
	decorators: [withKnobs],
};

const cellGridFillRandom = (cellStatus = () => Math.random() < 0.3) => {
	const grid: boolean[][] = [];
	for (let y = 0; y < 10; y++) {
		grid[y] = [];
		for (let x = 0; x < 10; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

const cellGridNonFill = () =>
	Array.from<boolean[]>({ length: 10 }).fill(
		Array.from<boolean>({ length: 10 }).fill(false),
	);

export const emptyCell = () => [
	<Field
		field={object('field', cellGridNonFill())}
		key="stories"
		onClick={action('Clciked Cell')}
	/>,
];

export const notEmptyCell = () => [
	<Field
		field={object('field', cellGridFillRandom())}
		key="stories"
		onClick={action('Clciked Cell')}
	/>,
];
