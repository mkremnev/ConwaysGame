import { degreeСalc, firstPrioritiesCalc, secondPrioritiesCalc } from './logic';

test.each`
	input                 | expected
	${[11, '**', '+', 3]} | ${[121, '+', 3]}
	${[4, '!', '+', 3]}   | ${[24, '+', 3]}
`(
	'receive $expected submit functions degreeСalc($input)',
	({ input, expected }) => {
		expect(degreeСalc(input)).toEqual(expected);
	},
);

test.each`
	input                  | expected
	${[4, '^', 2, '+', 6]} | ${[16, '+', 6]}
	${[4, '*', 5, '+', 6]} | ${[20, '+', 6]}
`(
	'receive $expected submit functions firstPrioritiesCalc($input)',
	({ input, expected }) => {
		expect(firstPrioritiesCalc(input)).toEqual(expected);
	},
);

test.each`
	input                   | expected
	${[4, '+', 5, '+', 6]}  | ${15}
	${[9, '+', 1, '+', 10]} | ${20}
	${[9, '+', 1, '-', 5]}  | ${5}
`(
	'receive $expected submit functions secondPrioritiesCalc($input)',
	({ input, expected }) => {
		expect(secondPrioritiesCalc(input)).toBe(expected);
	},
);
