import React from 'react';
import { BtnRunStopGame } from './BtnRunStopGame';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Interfaces / BtnRunStopGame',
	decorators: [withKnobs],
};

export const isRunningGameInterfaces = () => [
	<BtnRunStopGame
		isRunningGame
		onClick={action('Button clicked')}
		key="interfaces"
	/>,
];

export const notIsRunningGameInterfaces = () => [
	<BtnRunStopGame
		isRunningGame={false}
		onClick={action('Button clicked')}
		key="interfaces"
	/>,
];
