// Задание 1
export type OriginalTeam = {
	size: number;
	name: string;
	league: string;
};

export type ExpectedTeam = {
	name: string;
	league: string;
	roster: number;
};

export const originalTeamToExpectedTeamObject = (
	originalTeam: OriginalTeam,
): ExpectedTeam => {
	const withoutSize = Object.entries(originalTeam).filter(
		(value) => value[0] !== 'size',
	);
	const newValueKeyOfName = withoutSize.map((value) => {
		if (value[0] === 'name' && value[1] !== 'New York Badgers')
			value[1] = 'New York Badgers';
		return value;
	});
	const teamNew = Object.fromEntries(
		(newValueKeyOfName as unknown) as string[],
	);

	return { ...teamNew, roster: 25 };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
	originalArray: SomeArray,
): SomeArray => {
	const cloneArrayWithoutFirstElement = originalArray.slice(2);
	return ['two', ...cloneArrayWithoutFirstElement, 5];
};

// Задание 3

export type Team = {
	name: string;
	captain: {
		name: string;
		age: number;
	};
};

export const originalTeamToExpectedTeam = (originalTeam: Team): Team => {
	const cloneOriginalTeam = Object.assign({}, originalTeam);
	const newCaptain = {
		name: 'Bryan Downey',
		age: 28,
	};
	return { ...cloneOriginalTeam, captain: newCaptain };
};
