export const parser = (extention: string): (string | number)[] => {
	const parserExtention = extention.split(' ');

	return parserExtention.reduce<(number | string)[]>((arr, item, key) => {
		if (item.match(/\d*\*\*$/)) {
			arr.push(Number(item.replace(/\*\*/, '')));
			arr.push(String(item.replace(/\d*/, '')));
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
