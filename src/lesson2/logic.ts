import { operators, operatorsPriorities, priorites } from './operators';

type outValue = (string | number)[];

const [FIRST, SECOND] = priorites;

export const degreeСalc = (extention: outValue): outValue =>
	extention.reduce<outValue>((result, item) => {
		const operandLeft = result[result.length - 1];

		if (item === '**') {
			result = [
				...result.slice(0, -1),
				operators[item](Number(operandLeft), Number(operandLeft)),
			];
		} else {
			result.push(item);
		}
		return result;
	}, []);

export const firstPrioritiesCalc = (extention: outValue): outValue =>
	extention.reduce<outValue>((arr, operandRight) => {
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

export const secondPrioritiesCalc = (extention: outValue): number =>
	extention.reduce<number>((result, nextItem, key) => {
		const operand = extention[key - 1];

		if (operatorsPriorities[operand] === SECOND) {
			result = operators[operand](Number(result), Number(nextItem));
		}
		return result;
	}, Number(extention[0]));
