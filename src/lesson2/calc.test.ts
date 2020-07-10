import { calc } from './calc';

describe('Positve test case', () => {
	it('Extentions 2 + 2 + 2 = 6', () => {
		expect(calc('2 + 2 + 2')).toBe(6);
	});

	it('Extentions 2** + 2 + 2 = 8', () => {
		expect(calc('2** + 2 + 2')).toBe(8);
	});
});
