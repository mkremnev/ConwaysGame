import React from 'react';
import { Cell } from './Cell';
import { withKnobs, number } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 4 / Cell',
	decorators: [withKnobs],
};

export const nonFilled = () => [
	<Cell x={number('x', 1)} y={number('y', 23)} key="stroies" />,
];

export const Filled = () => [
	<Cell filled={true} x={number('x', 1)} y={number('y', 23)} key="stroies" />,
];
