import { operators, operatorsPriorities, priorites } from './operators';
import { parserType } from './common';

const [FIRST, SECOND] = priorites;

export const degreeСalc = (extention: parserType): parserType =>
	extention.reduce<parserType>((result, item, key, arr) => {
		const operandLeft = result[result.length - 1];

		if (item === '**' || item === '!') {
			result = [
				...result.slice(0, -1),
				operators[item](Number(operandLeft), Number(operandLeft)),
			];
		} else {
			result.push(item);
		}
		return result;
	}, []);

export const firstPrioritiesCalc = (extention: parserType): parserType =>
	extention.reduce<parserType>((arr, operandRight) => {
		const operandLeft = arr[arr.length - 2];
		const operand = arr[arr.length - 1];

		if (operatorsPriorities[operand] === FIRST) {
			arr = [
				...arr.slice(0, -2),
				operators[operand](Number(operandLeft), Number(operandRight)),
			];
		} else {
			arr.push(operandRight);
		}
		return arr;
	}, []);

export const secondPrioritiesCalc = (extention: parserType): number =>
	extention.reduce<number>((result, nextItem, key) => {
		const operand = extention[key - 1];

		if (operatorsPriorities[operand] === SECOND) {
			result = operators[operand](Number(result), Number(nextItem));
		}
		return result;
	}, Number(extention[0]));
