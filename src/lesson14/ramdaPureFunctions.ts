import { compose, last, sortBy, prop, map, join, replace, split } from 'ramda';

// Задание 1
export type Team = { name: string; score: number };

const copyTeams = (teams: Team[]) =>
	teams.map((value) => Object.assign({}, value));
const sortByObj = sortBy((t) => t.score);
const getName = prop<string, Team>('name');

export const getTopName = compose(getName, last, sortByObj, copyTeams);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;
export type CreateQs = (x: QsObj) => string;

const objectToArray = (qsObj: QsObj): string[][] =>
	Object.entries(qsObj as any);
const elementJoinEquals = map((val: string[]) => val.join('='));
const stringJoinAmp = join('&');
const propsWithSymbol = replace(/^/, '?');
export const createQs: CreateQs = compose(
	propsWithSymbol,
	stringJoinAmp,
	elementJoinEquals,
	objectToArray,
);

// Задание 3
const propsWithoutSymbol = replace(/\?/y, '');
const stringSplitAmp = split('&');
const elementSplitEquals = map((v: string) => v.split('='));
const desiredObject = (desiredObject: string[][]) =>
	Object.fromEntries(desiredObject as any);
export const parseQs = compose(
	desiredObject,
	elementSplitEquals,
	stringSplitAmp,
	propsWithoutSymbol,
);
