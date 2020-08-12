import React from 'react';
import { BtnNewBoard } from './BtnNewBoard';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Interfaces / BtnNewBoard',
	decorators: [withKnobs],
};

export const BtnNewBoardInterfaces = () => [
	<BtnNewBoard onClick={action('Button clicked')} key="interfaces" />,
];
