import React from 'react';
import { RadioGroup } from './RadioGroup';
import { Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { InputProps } from './RadioGroup';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component / RadioGroup',
	component: RadioGroup,
};

const option = [
	{
		title: '10X10',
		value: '{"rows": "10", "columns": "10"}',
	},
	{
		title: '20X20',
		value: '{"rows": "20", "columns": "20"}',
	},
	{
		title: '30X30',
		value: '{"rows": "30", "columns": "30"}',
	},
];

export const RadioGroupStories: Story<InputProps> = () => (
	<RadioGroup
		options={option}
		label="Размер поля"
		onChange={action('Change size')}
		checked={true}
	/>
);
