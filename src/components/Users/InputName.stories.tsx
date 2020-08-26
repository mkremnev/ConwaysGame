import React from 'react';
import { InputName, formType } from './InputName';
import { Story } from '@storybook/react/types-6-0';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / User / InputName',
	component: InputName,
	argTypes: {
		handleSubmit: {
			action: 'onSubmit',
			description: 'Событие измения скорости',
			name: 'Изменение скорости',
		},
		value: {
			control: { type: 'text' },
			description: 'Изменение скорости обновления поколений',
			name: 'Скорость игры',
		},
	},
	args: {},
};

export const Basic: Story<formType> = (args: formType) => (
	<InputName {...args} />
);
