import React from 'react';
import { InterfaceLayout, ListButton } from './Interfaces';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / Interfaces / InterfaceLayout',
	component: InterfaceLayout,
	argTypes: {
		value: {
			control: { type: null },
			description: 'Изменение ползунка',
		},
		type: {
			control: { type: 'inline-radio', options: ['range'] },
		},
	},
	parameters: { actions: { argTypesRegex: '^on.*' } },
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
};
