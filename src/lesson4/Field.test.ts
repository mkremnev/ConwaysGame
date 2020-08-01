import { mount } from 'enzyme';
import { getField } from './Field';

test.each`
	inputfilled | expected_br | expected_div | expected_cell_empty | expected_cell_filled
	${[
	[true, false, true, true, false, true, true, true, false, true],
	[true, true, true, true, false, false, false, true, false, true],
]} | ${2} | ${20} | ${7} | ${13}
`(
	'testing rendering field',
	({
		inputfilled,
		expected_br,
		expected_div,
		expected_cell_empty,
		expected_cell_filled,
	}) => {
		const field = mount(getField({ field: inputfilled }));
		expect(field.find('p').length).toBe(expected_br);
		expect(field.find('.cell').length).toBe(expected_div);
		expect(field.find('.cell-empty').length).toBe(expected_cell_empty);
		expect(field.find('.cell-filled').length).toBe(expected_cell_filled);
	},
);
