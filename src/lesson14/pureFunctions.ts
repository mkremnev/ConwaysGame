// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
	const copyTeams = teams.map((value) => Object.assign({}, value));
	const sorted = copyTeams.sort((x, y) => (x.score > y.score ? 1 : -1));
	return sorted[sorted.length - 1].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
	const objectToArray = Object.entries(qsObj);
	const elementJoinEquals = objectToArray.map((val) => val.join('='));
	const stringJoinAmp = elementJoinEquals.join('&');
	const propsWithSymbol = stringJoinAmp.replace(/^/, '?');
	return propsWithSymbol;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
	const propsWithoutSymbol = qs.replace(/\?/y, '');
	const stringSplitAmp = propsWithoutSymbol.split('&');
	const elementSplitEquals = stringSplitAmp.map((v) => v.split('='));
	const desiredObject = Object.fromEntries(
		(elementSplitEquals as unknown) as string[],
	);
	return desiredObject;
};
