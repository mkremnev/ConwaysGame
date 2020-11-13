import React from 'react';
import { Cell } from './Cell';
import type { CellProps } from './Cell';
import { Story } from '@storybook/react/types-6-0';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component /  Board / Cell',
	component: Cell,
	argTypes: {
		filled: {
			control: { type: 'boolean' },
			description:
				'Статус ячейки, обязательный параметр, живая ячейка - статус true, мертвая ячейка - статус false',
			name: 'Статус ячейки',
		},
		onClick: {
			action: 'clicked',
			description: 'Событие нажатия на ячейку, обязательный параметр',
			name: 'Нажатие на ячейку',
		},
		x: {
			control: { type: 'number' },
			description: 'Координата X на игровом поле, обязательный параметр',
			name: 'Координата Х',
		},
		y: {
			control: { type: 'number' },
			description: 'Координата Y на игровом поле, обязательный параметр',
			name: 'Координата Y',
		},
	},
	args: {
		x: 0,
		y: 0,
		filled: false,
	},
};

export const Basic: Story<CellProps> = (args: CellProps) => <Cell {...args} />;
