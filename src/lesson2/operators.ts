type typeOperators = (first: number, second: number) => number;
type oneParametrsType = (value: number) => number;

export const addition: typeOperators = (
	first: number,
	second: number,
): number => first + second;

export const subtraction: typeOperators = (
	first: number,
	second: number,
): number => first - second;

export const multiplication: typeOperators = (
	first: number,
	second: number,
): number => first * second;

export const division: typeOperators = (
	first: number,
	second: number,
): number => first / second;

export const power: oneParametrsType = (first: number): number =>
	(first *= first);

export const powerto: typeOperators = (
	first: number,
	second: number,
): number => {
	let result = first;
	for (let pow = 1; pow < second; pow++) {
		result *= first;
	}
	return result;
};

export const factorial: oneParametrsType = (value: number): number => {
	if (value === 1) {
		return 1;
	}
	return value * factorial(value - 1);
};

export const operators: {
	[key: string]: typeOperators;
} = {
	'/': division,
	'*': multiplication,
	'+': addition,
	'-': subtraction,
	'**': power,
	'^': powerto,
	'!': factorial,
};

export const priorites = [1, 2];

const [FIRST, SECOND] = priorites;

export const operatorsPriorities: { [key: string]: number } = {
	'!': FIRST,
	'*': FIRST,
	'/': FIRST,
	'**': FIRST,
	'^': FIRST,
	'+': SECOND,
	'-': SECOND,
};
