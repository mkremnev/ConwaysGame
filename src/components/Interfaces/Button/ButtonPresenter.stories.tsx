import React from 'react';
import { Button, ButtonType } from './Button';
import { Story } from '@storybook/react/types-6-0';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component / Button',
	component: Button,
	argTypes: {
		text: {
			control: { type: 'text' },
			description:
				'Текст для кнопки, динамический параметр, обязательный',
			name: 'Текст для кнопки',
		},
		color: {
			control: { type: 'color' },
			description:
				'Цвет текста для кнопки, динамический параметр, опциональный, по умолчанию белый цвет',
			name: 'Цвет текста',
		},
		radius: {
			control: { type: 'text' },
			description:
				'Радиус скруглений у бордера кнопки, опциональный, пишется в формате 20px 20px 20px 20px',
			name: 'Радиус',
		},
		backgroundColor: {
			control: { type: 'color' },
			description:
				'Цвет фона для кнопки, динамический параметр, опциональный, по умолчанию черный цвет',
			name: 'Цвет фона',
		},
		onClick: {
			action: 'clicked',
			description: 'Событие нажатия кнопки, обязательный параметр',
			name: 'Нажатие на кнопку',
		},
	},
	args: {
		text: 'Введите сюда текст',
		color: '#fff',
		radius: '20px 20px',
		backgroundColor: '#007bff',
	},
};

export const ButtonStories: Story<ButtonType> = (args: ButtonType) => (
	<Button {...args} />
);
