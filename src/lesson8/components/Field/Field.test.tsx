import React from 'react';
import { mount } from 'enzyme';
import { Field } from './Field';

const inputFilled = [
	[true, false, true, true, false, true, true, true, false, true],
	[true, true, true, true, false, false, false, true, false, true],
];

test.each`
	inputFilled    | expectedBr | expectedDiv | expectedCellEmpty | expectedCellFilled
	${inputFilled} | ${2}       | ${20}       | ${7}              | ${13}
`(
	'testing rendering field',
	({
		inputFilled,
		expectedBr,
		expectedDiv,
		expectedCellEmpty,
		expectedCellFilled,
	}) => {
		const onClick = jest.fn();
		const field = mount(<Field field={inputFilled} onClick={onClick} />);
		expect(field.find('p').length).toBe(expectedBr);
		expect(field.find('.cell').length).toBe(expectedDiv);
		expect(field.find('.cell-empty').length).toBe(expectedCellEmpty);
		expect(field.find('.cell-filled').length).toBe(expectedCellFilled);
	},
);

describe('testing simulate field', () => {
	it('calls onClick callback on onClick Cell', () => {
		const onClick = jest.fn();
		const wrapper = mount(<Field field={inputFilled} onClick={onClick} />);
		wrapper.find('button').first().simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
