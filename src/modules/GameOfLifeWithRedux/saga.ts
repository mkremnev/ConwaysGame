import { actions } from './reducer';
import { take, call, put, fork } from 'redux-saga/effects';
import { isEmpty } from 'ramda';

export function* fieldSaga() {
	while (true) {
		yield take(actions.addCell.type);
		yield put(actions.updateBoard());
	}
}
