import React from 'react';
import { InputSpeed } from './InputSpeed';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Interfaces / InputSpeedChange',
	decorators: [withKnobs],
};

export const InputSpeedChange = ({ ...props }) => [
	<InputSpeed
		speedValue={number('Value', props.speedValue)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
			e.preventDefault();
			const target = e.target.value;
			props.speedValue = +target;
			action('Input change')(props.speedValue);
		}}
		key="interfaces"
	/>,
];
