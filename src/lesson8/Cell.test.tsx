import React from 'react';
import { mount, shallow } from 'enzyme';
import Cell from './Cell';

test.each`
	inputfilled | expected
	${true}     | ${'<div class="cell cell-filled"></div>'}
	${false}    | ${'<div class="cell cell-empty"></div>'}
`('renders cell for empty or filled', ({ inputfilled, expected }) => {
	const cellItem = mount(<Cell filled={inputfilled} x={1} y={2} />);

	expect(cellItem.html()).toBe(expected);
});
