import { calc } from './calc';

test.each`
	input            | expected
	${'2 + 2 + 2'}   | ${6}
	${'2** + 2 + 2'} | ${8}
	${'4! + 2 + 2'}  | ${28}
	${'4^2 + 2 + 2'} | ${20}
`('receive $expected submit functions calc($input)', ({ input, expected }) => {
	expect(calc(input)).toEqual(expected);
});
