import { parser } from './parser';

describe('Parser correct cases', () => {
	it('2 + 2', () => {
		expect(parser('2 + 2')).toEqual([2, '+', 2]);
	});

	it('2 + 2 + 5 + 7', () => {
		expect(parser('2 + 2 + 5 + 7')).toEqual([2, '+', 2, '+', 5, '+', 7]);
	});

	it('11 + 3 * 22', () => {
		expect(parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22]);
	});

	it('11** + 3 * 22', () => {
		expect(parser('11** + 3 * 22')).toEqual([11, '**', '+', 3, '*', 22]);
	});

	it('2** + 2 + 2', () => {
		expect(parser('2** + 2 + 2')).toEqual([2, '**', '+', 2, '+', 2]);
	});
});

describe('Parser invalid cases', () => {
	it('1 + + 33 - 2', () => {
		expect(() => parser('1 + + 33 - 2')).toThrow(
			TypeError('Unexpected string'),
		);
	});

	it('1 ! 33 - 2', () => {
		expect(() => parser('1 ! 33 - 2')).toThrow(
			TypeError('Unexpected string'),
		);
	});
});
