import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';

test.each`
	inputFilled | expected
	${true}     | ${'<div class="cell cell-filled"></div>'}
	${false}    | ${'<div class="cell cell-empty"></div>'}
`('renders cell for empty or filled', ({ inputFilled, expected }) => {
	const cellItem = mount(<Cell filled={inputFilled} x={1} y={2} />);

	expect(cellItem.html()).toBe(expected);
});
