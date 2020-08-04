import React from 'react';
import Field from './Field';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	text,
	number,
	object,
	boolean,
} from '@storybook/addon-knobs';
import type { FieldProps } from './Interfaces';

export default {
	title: 'Lesson 4 / Field',
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
	<Field field={object('field', cellGridNonFill())} />,
];

export const notEmptyCell = () => [
	<Field field={object('field', cellGridFillRandom())} />,
];
