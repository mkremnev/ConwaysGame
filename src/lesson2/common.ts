export type parserType = (string | number)[];

export function isNumeric(params: string | number): boolean {
	if (!isNaN(Number(params))) {
		return true;
	} else {
		return false;
	}
}
