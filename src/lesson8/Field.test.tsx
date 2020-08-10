import React from 'react';
import { mount } from 'enzyme';
import { Field } from './Field';

// TODO дописать тест для клика

test.each`
	inputFilled | expectedBr | expectedDiv | expectedCellEmpty | expectedCellFilled
	${[
	[true, false, true, true, false, true, true, true, false, true],
	[true, true, true, true, false, false, false, true, false, true],
]} | ${2} | ${20} | ${7} | ${13}
`(
	'testing rendering field',
	({
		inputFilled,
		expectedBr,
		expectedDiv,
		expectedCellEmpty,
		expectedCellFilled,
	}) => {
		const field = mount(<Field field={inputFilled} />);
		expect(field.find('p').length).toBe(expectedBr);
		expect(field.find('.cell').length).toBe(expectedDiv);
		expect(field.find('.cell-empty').length).toBe(expectedCellEmpty);
		expect(field.find('.cell-filled').length).toBe(expectedCellFilled);
	},
);
