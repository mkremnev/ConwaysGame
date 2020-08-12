import React from 'react';
import { BtnClearBoard } from './BtnClearBoard';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Interfaces / BtnClearBoard',
	decorators: [withKnobs],
};

export const BtnClearBoardInterfaces = () => [
	<BtnClearBoard onClick={action('Button clicked')} key="interfaces" />,
];
