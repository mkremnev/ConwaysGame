import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Field } from './Field';
import { GameOfLifeProto } from './GameOfLifeProto';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Lesson 4 / GameOfLifeProto',
	decorators: [withKnobs],
};

export const GameOfLifePrototip = () => (
	<GameOfLifeProto
		columns={number('columns', 20)}
		rows={number('rows', 20)}
		fieldComponent={Field}
	/>
);
