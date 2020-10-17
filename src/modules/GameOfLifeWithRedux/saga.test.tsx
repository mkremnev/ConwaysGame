import { reducer, actions } from './reducer';
import { expectSaga } from 'redux-saga-test-plan';
import { fieldSaga } from './saga';
import { cellGridFillRandom } from './helpers';

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

	it('Should update State on called actions addCell', async () => {
		const equalSaga = expectSaga(fieldSaga).withReducer(
			reducer,
			initialState,
		);

		const result = await equalSaga.dispatch(actions.addCell(size)).run();

		expect(result.storeState.rows).toBe(10);
		expect(result.storeState.columns).toBe(10);
	});
});
