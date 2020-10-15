import { reducer, actions } from './reducer';
import { expectSaga } from 'redux-saga-test-plan';
import { fieldSaga } from './saga';
import { cellGridFillRandom, gameOflife } from './helpers';

describe('Test saga GameOfLifeWithRedux', () => {
	const size = { rows: 10, columns: 10 };
	const initialState = {
		board: cellGridFillRandom(20, 20, () => false),
		gameStatus: false,
		value: '300',
		rows: 20,
		columns: 20,
	};
	it('Should calls actions addCell call actions updateBoard success', () => {
		return expectSaga(fieldSaga)
			.withReducer(reducer)
			.dispatch(actions.addCell(size))
			.put(actions.updateBoard())
			.run();
	});

	it('Should update State on called actions addCell', () => {
		return expectSaga(fieldSaga)
			.withReducer(reducer, initialState)
			.dispatch(actions.addCell(size))
			.hasFinalState({
				board: cellGridFillRandom(10, 10, () => false),
				gameStatus: false,
				value: '300',
				rows: 10,
				columns: 10,
			})
			.run();
	});
});
