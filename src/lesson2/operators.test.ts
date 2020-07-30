import {
	division,
	multiplication,
	addition,
	subtraction,
	power,
	powerto,
	factorial,
} from './operators';

test.each`
	input                   | expected | textinput
	${multiplication(2, 2)} | ${4}     | ${'multiplication(2, 2)'}
	${division(8, 2)}       | ${4}     | ${'division(8, 2)'}
	${addition(5, 2)}       | ${7}     | ${'addition(5, 2)'}
	${subtraction(5, 2)}    | ${3}     | ${'subtraction(5, 2)'}
	${power(5)}             | ${25}    | ${'power(5)'}
	${powerto(5, 3)}        | ${125}   | ${'powerto(5, 3)'}
	${factorial(5)}         | ${120}   | ${'factorial(5)'}
	${factorial(1)}         | ${1}     | ${'factorial(1)'}
`('receive $expected submit functions $textinput', ({ input, expected }) => {
	expect(input).toBe(expected);
});

test.each`
	input                   | expected | textinput
	${multiplication(2, 2)} | ${6}     | ${'multiplication(2, 2)'}
	${division(8, 2)}       | ${5}     | ${'division(8, 2)'}
	${addition(5, 2)}       | ${8}     | ${'addition(5, 2)'}
	${subtraction(5, 2)}    | ${4}     | ${'subtraction(5, 2)'}
	${power(5)}             | ${24}    | ${'power(5)'}
	${powerto(5, 3)}        | ${123}   | ${'powerto(5, 3)'}
	${factorial(5)}         | ${121}   | ${'factorial(5)'}
	${factorial(1)}         | ${2}     | ${'factorial(1)'}
`(
	'receive shouldn`t be $expected submit functions $textinput',
	({ input, expected }) => {
		expect(input).not.toBe(expected);
	},
);
