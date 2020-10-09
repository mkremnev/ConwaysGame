import { login, logout, getUserSession } from '@/api/auth';
import { actions } from './reducer';
import { take, call, put, fork } from 'redux-saga/effects';
import { isEmpty } from 'ramda';

export function* clearUserSession() {
	yield call(logout);
}

export function* checkUserSession() {
	const userSession: string = yield call(getUserSession);
	if (userSession?.length > 3 && !isEmpty(userSession)) {
		yield put(actions.login(userSession));
	} else {
		yield put(actions.logout());
	}
}

export function* saveUserSession({
	payload,
}: ReturnType<typeof actions.login>) {
	const username = String(payload);
	if (username?.length > 3 && !isEmpty(username)) {
		yield call(login, username);
	}
}

export function* loginSaga() {
	yield fork(checkUserSession);
	while (true) {
		const action = yield take(actions.login.type);
		yield* saveUserSession(action);
		yield take(actions.logout.type);
		yield* clearUserSession();
	}
}
