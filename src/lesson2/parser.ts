import { parserType, isNumeric } from './common';
export const parser = (extention: string): parserType => {
	const parserExtention = extention.split(' ');

	return parserExtention.reduce<parserType>((arr, item) => {
		if (
			item.match(/((\d+)(\*\*))?((\d+)(\!))?((\d+)(\^)(\d*))?$/)![0]
				.length > 1
		) {
			item.match(/((\d+)(\*\*))?((\d+)(\!))?((\d+)(\^)(\d+))?$/)!
				.filter((value) => {
					return (
						value != undefined &&
						!value.match(/\d+(\!|\^|\*\*)(\d*)?$/)
					);
				})
				.forEach((value) => {
					const typeValue = isNumeric(value)
						? Number(value)
						: String(value);
					arr.push(typeValue);
				});
		} else if (item.match(/^-{0,1}\d+$/)) {
			arr.push(Number(item));
		} else if (
			['-', '+', '/', '*'].includes(item) &&
			arr.indexOf(item, arr.length - 1) == -1
		) {
			arr.push(item);
		} else {
			throw new TypeError('Unexpected string');
		}

		return arr;
	}, []);
};
