export type FieldState = boolean[][];
export const cellGridFillRandom = (
	rows: number,
	columns: number,
	cellStatus: () => boolean = () => Math.random() < 0.3,
): FieldState => {
	const grid: FieldState = [];
	for (let y = 0; y < rows; y++) {
		grid[y] = [];
		for (let x = 0; x < columns; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

export const gameOflife = (
	state: FieldState,
	r: number,
	c: number,
): FieldState => {
	const nextStep = (prevState: FieldState) => {
		const prevBoard = prevState;
		const cloneBoard = state.map((row) => [...row]);

		const amountAliveNeighbors = (x: number, y: number) => {
			const eightNeighbors: number[][] = [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, 1],
				[1, 1],
				[1, 0],
				[1, -1],
				[0, -1],
			];

			return eightNeighbors.reduce((aliveNeighbors, neighbor) => {
				const xCell = x + neighbor[0];
				const yCell = y + neighbor[1];
				const endBoard =
					xCell >= 0 && xCell < r && yCell >= 0 && yCell < c;
				if (aliveNeighbors < 4 && endBoard && prevBoard[xCell][yCell]) {
					return aliveNeighbors + 1;
				} else {
					return aliveNeighbors;
				}
			}, 0);
		};

		for (let rows = 0; rows < r; rows++) {
			for (let columns = 0; columns < c; columns++) {
				const totalAliveNeighbors = amountAliveNeighbors(rows, columns);

				if (!prevBoard[rows][columns]) {
					if (totalAliveNeighbors === 3)
						cloneBoard[rows][columns] = true;
				} else {
					if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3)
						cloneBoard[rows][columns] = false;
				}
			}
		}

		return cloneBoard;
	};
	return nextStep(state);
};
