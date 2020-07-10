import { degreeСalc, firstPrioritiesCalc, secondPrioritiesCalc } from './logic';

describe('Positive test case', () => {
	it('degree 11** + 3', () => {
		expect(degreeСalc([11, '**', '+', 3])).toEqual([121, '+', 3]);
	});

	it('firstPrioritiesCalc 4 * 5 + 6', () => {
		expect(firstPrioritiesCalc([4, '*', 5, '+', 6])).toEqual([20, '+', 6]);
	});

	it('secondPrioritiesCalc 4 + 5 + 6', () => {
		expect(secondPrioritiesCalc([4, '+', 5, '+', 6])).toEqual(15);
	});
});
