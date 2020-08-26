import React from 'react';
import { mount } from 'enzyme';
import { GameOfLifeProto } from './GameOfLifeProto';
import { Cell } from '../../components/Field/Cell/Cell';
import { Field } from '../Field/Field';

describe('GameOfLifeProto testing', () => {
	const wrapper = mount(
		<GameOfLifeProto rows={5} columns={5} fieldComponent={Field} />,
	);
	const cellNode = wrapper.find(Cell);
	it('should be create field to 5X5 elements', () => {
		expect(cellNode).toHaveLength(25);
	});

	it('should be toEqual props', () => {
		expect(wrapper.find(Field).props()).toEqual({
			field: expect.any(Array),
			onClick: expect.any(Function),
		});
	});
});
