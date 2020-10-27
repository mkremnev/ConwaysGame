import { reducer, actions } from './reducer';
import { cellGridFillRandom, gameOflife } from './helpers';

describe('Testing GameOfLifeWithRedux redusers and actions', () => {
	const initialState = {
		board: cellGridFillRandom(20, 20),
		gameStatus: false,
		value: '500',
		rows: 20,
		columns: 20,
	};

	const initialStateSetCell = {
		board: cellGridFillRandom(3, 3, () => false),
		gameStatus: false,
		value: '500',
		rows: 3,
		columns: 3,
	};

	const coordinates = { x: 0, y: 0 };

	it('Should create setCell action', () => {
		expect(actions.hasOwnProperty('setCell')).toBe(true);
	});

	it('Should create clearBoard action', () => {
		expect(actions.hasOwnProperty('clearBoard')).toBe(true);
	});

	it('Should create updateBoard action', () => {
		expect(actions.hasOwnProperty('updateBoard')).toBe(true);
	});

	it('Should create gameRun action', () => {
		expect(actions.hasOwnProperty('gameRun')).toBe(true);
	});

	it('Should create isGame action', () => {
		expect(actions.hasOwnProperty('isGame')).toBe(true);
	});

	it('Should create changeSpeed action', () => {
		expect(actions.hasOwnProperty('changeSpeed')).toBe(true);
	});

	it('Should have the correct action for setCell', () => {
		expect(actions.setCell(coordinates)).toEqual({
			type: 'field/setCell',
			payload: coordinates,
		});
	});

	it('Should have the correct action for clearBoard', () => {
		expect(actions.clearBoard()).toEqual({
			type: 'field/clearBoard',
			payload: undefined,
		});
	});

	it('Should have the correct action for updateBoard', () => {
		expect(actions.updateBoard()).toEqual({
			type: 'field/updateBoard',
			payload: undefined,
		});
	});

	it('Should have the correct action for gameRun', () => {
		expect(actions.gameRun()).toEqual({
			type: 'field/gameRun',
			payload: undefined,
		});
	});

	it('Should have the correct action for isGame', () => {
		expect(actions.isGame()).toEqual({
			type: 'field/isGame',
			payload: undefined,
		});
	});

	it('Should have the correct action for changeSpeed', () => {
		expect(actions.changeSpeed('500')).toEqual({
			type: 'field/changeSpeed',
			payload: '500',
		});
	});

	it('Should have the correct action for changeSpeed if uncorrectly payload', () => {
		expect(actions.changeSpeed('500')).not.toEqual({
			type: 'field/changeSpeed',
			payload: 500,
		});
	});

	it('Should return the correct value from reducer setCell', () => {
		expect(
			reducer(initialStateSetCell, actions.setCell(coordinates)),
		).toEqual({
			board: [
				[true, false, false],
				[false, false, false],
				[false, false, false],
			],
			gameStatus: false,
			value: '500',

			rows: 3,
			columns: 3,
		});
	});

	it('Should return the correct value from reducer clearBoard', () => {
		expect(reducer(initialState, actions.clearBoard())).toEqual({
			board: cellGridFillRandom(20, 20, () => false),
			gameStatus: false,
			value: '500',
			rows: 20,
			columns: 20,
		});
	});

	it('Should return the correct value from reducer updateBoard', () => {
		expect(reducer(initialState, actions.updateBoard())).not.toEqual({
			board: cellGridFillRandom(20, 20),
			gameStatus: false,
			value: '500',
			rows: 20,
			columns: 20,
		});
	});

	it('Should return the correct value from reducer isGame', () => {
		expect(reducer(initialState, actions.isGame())).toEqual({
			board: gameOflife(initialState.board, 20, 20),
			gameStatus: false,
			value: '500',
			rows: 20,
			columns: 20,
		});
	});

	it('Should return the correct value from reducer changeSpeed', () => {
		expect(reducer(initialState, actions.changeSpeed('300'))).toEqual({
			board: initialState.board,
			gameStatus: false,
			value: '300',
			rows: 20,
			columns: 20,
		});
	});
	it('Should return the correct value from reducer addCell', () => {
		expect(
			reducer(initialState, actions.addCell({ rows: 35, columns: 35 })),
		).toEqual({
			board: initialState.board,
			gameStatus: false,
			value: '500',
			rows: 35,
			columns: 35,
		});
	});
});
