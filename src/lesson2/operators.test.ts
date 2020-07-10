import { division, multiplication, addition, subtraction } from './operators';

describe('Positive test case', () => {
	it('multiplication 2 * 2 = 4', () => {
		expect(multiplication(2, 2)).toBe(4);
	});

	it('division 8 / 2 = 4', () => {
		expect(division(8, 2)).toBe(4);
	});

	it('addition 5  + 2 = 7', () => {
		expect(addition(5, 2)).toBe(7);
	});

	it('subtraction 5  - 2 = 3', () => {
		expect(subtraction(5, 2)).toBe(3);
	});
});

describe('Negative test case', () => {
	it('multiplication 2 * 2 != 6', () => {
		expect(multiplication(2, 2)).not.toBe(6);
	});

	it('division 8 / 2 != 2', () => {
		expect(division(8, 2)).not.toBe(5);
	});

	it('addition 5  + 2 != 8', () => {
		expect(addition(5, 2)).not.toBe(8);
	});

	it('subtraction 5  - 8 != 3', () => {
		expect(subtraction(5, 8)).not.toBe(4);
	});
});
