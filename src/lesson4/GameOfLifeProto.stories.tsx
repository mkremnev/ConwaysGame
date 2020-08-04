import React from 'react';
import { withKnobs, number, array } from '@storybook/addon-knobs';
import Field from './Field';
import GameOfLifeProto from './GameOfLifeProto';
export default {
	title: 'Lesson 4 / GameOfLifeProto',
	decorators: [withKnobs],
};

const players = ['x', 'y'];
export const GameOfLifePrototip = () => (
	<GameOfLifeProto
		columns={number('columns', 20)}
		rows={number('rows', 20)}
		fieldComponent={Field}
	/>
);
