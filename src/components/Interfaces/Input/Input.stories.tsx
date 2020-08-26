import React from 'react';
import { Input, InputType, styledInput } from './Input';
import { Story } from '@storybook/react/types-6-0';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / Interfaces / Input',
	component: Input,
};

export const InputRange: Story<InputType & styledInput> = (
	args: InputType & styledInput,
) => <Input {...args} />;

export const InputText: Story<InputType & styledInput> = (
	args: InputType & styledInput,
) => <Input {...args} />;

InputRange.args = {
	type: 'range',
	value: 500,
	min: '50',
	max: '1000',
	step: '50',
};

InputRange.argTypes = {
	onChange: {
		action: 'onChange',
		description: 'Событие изменения ползунка',
	},
	value: {
		control: { type: 'range', min: 50, max: 1000, step: 50 },
		description: 'Изменение ползунка',
	},
	type: {
		control: { type: 'inline-radio', options: ['range'] },
	},
};

InputText.args = {
	type: 'text',
};

InputText.argTypes = {
	onChange: {
		action: 'onChange',
		description: 'Измения на ввод с клавиатуры',
	},
	value: {
		control: { type: 'text' },
		description: 'Поле для ввода текста',
		action: 'onChange',
	},
	type: {
		control: { type: 'inline-radio', options: ['text'] },
	},
};
