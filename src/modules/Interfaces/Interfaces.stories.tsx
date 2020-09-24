import React from 'react';
import { InterfaceLayout, ListButton } from './Interfaces';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / Interfaces / InterfaceLayout',
	component: InterfaceLayout,
};

export const Layout: Story<ListButton> = (args: ListButton) => (
	<InterfaceLayout {...args} />
);

Layout.args = {
	button1: {
		text: 'Начать',
		onClick: action('clicked'),
	},
	button2: {
		text: 'Начать',
		onClick: action('clicked'),
	},
	button3: {
		text: 'Начать',
		onClick: action('clicked'),
	},
	input: {
		type: 'range',
		name: 'Name',
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			e.preventDefault();
			action('Input change')(e.target.value);
		},
		min: '50',
		max: '1000',
		step: '50',
	},
};
