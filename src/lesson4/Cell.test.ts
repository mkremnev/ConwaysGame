import { mount } from 'enzyme';
import { getCell } from './Cell';

test.each`
	inputfilled | expected
	${true}     | ${'<div class="cell cell-filled"></div>'}
	${false}    | ${'<div class="cell cell-empty"></div>'}
`('renders cell for empty or filled', ({ inputfilled, expected }) => {
	expect(
		mount(
			getCell({
				filled: inputfilled,
			}),
		).html(),
	).toBe(expected);
});
