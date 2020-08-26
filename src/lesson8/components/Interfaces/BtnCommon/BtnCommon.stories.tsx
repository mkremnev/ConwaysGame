import React from 'react';
import { BtnCommon } from './BtnCommon';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 8 / Interfaces / BtnClearBoard',
	decorators: [withKnobs],
};

export const BtnClearBoardInterfaces = () => [
	<BtnCommon
		text={'Очистить'}
		onClick={action('Button clicked')}
		key="interfaces"
	/>,
];
