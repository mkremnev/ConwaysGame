import { gameOflife, cellGridFillRandom } from './field';

describe('Testing function gameOflife', () => {
	const comparedObject = {
		testing1: {
			In: [
				[false, true, false],
				[true, false, false],
				[true, false, false],
			],
			Out: [
				[false, false, false],
				[true, true, false],
				[false, false, false],
			],
		},
		testing2: {
			In: [
				[false, false, false],
				[true, true, false],
				[false, false, false],
			],
			Out: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
		},
		testing3: {
			In: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
			Out: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
		},
		testing4: {
			In: [
				[false, true, false],
				[false, true, false],
				[false, true, false],
			],
			Out: [
				[false, false, false],
				[true, true, true],
				[false, false, false],
			],
		},
		testing5: {
			In: [
				[false, false, false],
				[true, true, true],
				[false, false, false],
			],
			Out: [
				[false, true, false],
				[false, true, false],
				[false, true, false],
			],
		},
		testing6: {
			In: [
				[true, true, false],
				[true, false, false],
				[false, false, false],
			],
			Out: [
				[true, true, false],
				[true, true, false],
				[false, false, false],
			],
		},
		testing7: {
			In: [
				[true, true, false],
				[true, true, false],
				[false, false, false],
			],
			Out: [
				[true, true, false],
				[true, true, false],
				[false, false, false],
			],
		},
	};

	test.each([
		[comparedObject.testing1.In, comparedObject.testing1.Out],
		[comparedObject.testing2.In, comparedObject.testing2.Out],
		[comparedObject.testing3.In, comparedObject.testing3.Out],
		[comparedObject.testing4.In, comparedObject.testing4.Out],
		[comparedObject.testing5.In, comparedObject.testing5.Out],
		[comparedObject.testing6.In, comparedObject.testing6.Out],
		[comparedObject.testing7.In, comparedObject.testing7.Out],
	])('testin logic function gameoflife %#', (a, expected) => {
		expect(gameOflife(a, 3, 3)).toEqual(expected);
	});
});

describe('Testing function cellGridFillRandom generating random array', () => {
	it('Compared not equal', () => {
		const compared = cellGridFillRandom(20, 20);
		expect(compared).not.toEqual(cellGridFillRandom(20, 20));
		expect(compared).toHaveLength(20);
	});
});
