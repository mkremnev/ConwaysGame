import { parser } from './parser';

import { firstPrioritiesCalc, secondPrioritiesCalc, degreeСalc } from './logic';

export const calc = (extention: string): number => {
	const parserExtention = parser(extention);

	const firstPrioritiesRes = parserExtention.includes('**')
		? degreeСalc(parserExtention)
		: firstPrioritiesCalc(parserExtention);

	if (firstPrioritiesRes.length === 1) {
		return Number(firstPrioritiesRes[0]);
	}

	return secondPrioritiesCalc(firstPrioritiesRes);
};
