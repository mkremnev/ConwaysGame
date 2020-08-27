import React from 'react';
import { Input, InputType, styledInput } from './Input';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 9 / Interfaces / Input',
	component: Input,
	parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const InputRange: Story<InputType & styledInput> = (
	args: InputType & styledInput,
) => (
	<Input
		type={args.type}
		name={args.name}
		value={args.value}
		min={args.min}
		max={args.max}
		step={args.step}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
			e.preventDefault();
			const target = e.target.value;
			args.value = target;
			action('Input change')(args.value);
		}}
	/>
);

export const InputText: Story<InputType & styledInput> = (
	args: InputType & styledInput,
) => (
	<>
		<label htmlFor={args.name}>{args.name}</label>
		<Input
			type={args.type}
			name={args.name}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				e.preventDefault();
				const target = e.target.value;
				args.value = target;
				action('Input change')(args.value);
			}}
		></Input>
	</>
);

InputRange.args = {
	type: 'range',
	min: '50',
	max: '1000',
	step: '50',
};

InputRange.argTypes = {
	value: {
		control: { type: null },
		description: 'Изменение ползунка',
	},
	type: {
		control: { type: 'inline-radio', options: ['range'] },
	},
};

InputText.args = {
	type: 'text',
	name: 'Text',
};

InputText.argTypes = {
	value: {
		control: { type: 'text' },
		description: 'Поле для ввода текста',
		action: {
			onChange: (e: React.ChangeEvent) => {
				e.preventDefault();
				return (e.target as HTMLInputElement).value;
			},
		},
	},
	type: {
		control: { type: 'inline-radio', options: ['text'] },
	},
};
