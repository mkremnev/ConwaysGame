type typeOperators = (first: number, second: number) => number;

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

export const power: typeOperators = (first: number): number => (first *= first);

export const operators: {
	[key: string]: typeOperators;
} = {
	'/': division,
	'*': multiplication,
	'+': addition,
	'-': subtraction,
	'**': power,
};

export const priorites = [1, 2];

const [FIRST, SECOND] = priorites;

export const operatorsPriorities: { [key: string]: number } = {
	'*': FIRST,
	'/': FIRST,
	'**': FIRST,
	'+': SECOND,
	'-': SECOND,
};
