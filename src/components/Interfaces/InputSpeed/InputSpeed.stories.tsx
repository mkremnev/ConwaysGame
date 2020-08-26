import React from 'react';
import { InputSpeed } from './InputSpeed';
import { InputSpeedType } from '../../../types/Interfaces/InputSpeedType';
import { Story } from '@storybook/react/types-6-0';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / Interfaces / InputSpeedChange',
	component: InputSpeed,
	argTypes: {
		onChange: {
			action: 'onChange',
			description: 'Событие измения скорости',
			name: 'Изменение скорости',
		},
		speedValue: {
			control: { type: 'range', min: 50, max: 1000 },
			description: 'Изменение скорости обновления поколений',
			name: 'Скорость игры',
		},
	},
	args: {
		speedValue: 500,
	},
};

export const InputSpeedChange: Story<InputSpeedType> = (
	args: InputSpeedType,
) => <InputSpeed {...args} />;
