import React from 'react';
import { GameOfLifeProto } from '@/modules/Main/GameOfLifeProto';
import { Field } from '@/components/Field/Field';

export default class extends React.Component {
	render() {
		return (
			<GameOfLifeProto rows={20} columns={20} fieldComponent={Field} />
		);
	}
}
