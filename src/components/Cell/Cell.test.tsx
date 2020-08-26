import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';

test.each`
	inputfilled | expected
	${true}     | ${'<button class="cell cell-filled"></button>'}
	${false}    | ${'<button class="cell cell-empty"></button>'}
`('renders cell for empty or filled', ({ inputfilled, expected }) => {
	const onClick = jest.fn();
	const cellItem = mount(
		<Cell filled={inputfilled} x={1} y={2} onClick={onClick} />,
	);

	expect(cellItem.html()).toBe(expected);
});

describe('testing simulate field', () => {
	it('calls onclick callback on onclick Cell', () => {
		const onClick = jest.fn();
		const wrapper = mount(
			<Cell filled={true} x={1} y={2} onClick={onClick} />,
		);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
