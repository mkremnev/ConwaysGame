import React from 'react';
import Cell from './Cell';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
	title: 'Lesson 4 / Cell',
	decorators: [withKnobs],
};

export const nonFilled = () => [
	<Cell x={number('x', 1)} y={number('y', 23)} key="nonFilled" />,
];

export const Filled = () => [
	<Cell filled={true} x={number('x', 1)} y={number('y', 23)} key="Filled" />,
];
