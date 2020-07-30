import { parser } from './parser';

test.each`
	input             | expected
	${'1 + + 33 - 2'} | ${'Unexpected string'}
	${'1 ! 33 - 2'}   | ${'Unexpected string'}
`(
	'receive $expected after parsing the string $input',
	({ input, expected }) => {
		expect(() => parser(input)).toThrow(TypeError(expected));
	},
);

test.each`
	input                 | expected
	${'2 + 2'}            | ${[2, '+', 2]}
	${'2 + 2 + 5 + 7'}    | ${[2, '+', 2, '+', 5, '+', 7]}
	${'11 + 3 * 22'}      | ${[11, '+', 3, '*', 22]}
	${'11** + 3 * 22'}    | ${[11, '**', '+', 3, '*', 22]}
	${'2** + 2 + 2'}      | ${[2, '**', '+', 2, '+', 2]}
	${'2** + 2 + 2 + 2!'} | ${[2, '**', '+', 2, '+', 2, '+', 2, '!']}
`(
	'receive $expected after parsing the string $input',
	({ input, expected }) => {
		expect(parser(input)).toEqual(expected);
	},
);
