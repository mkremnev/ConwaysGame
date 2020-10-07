import { CheckState, reducer, actions } from './reducer';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { checkUserSession, saveUserSession } from './saga';
import { getUserSession, login } from '@/api/auth';

describe('Saga Login Test', () => {
	it('Should login success', () => {
		const username = 'Maxim';
		return expectSaga(checkUserSession)
			.withReducer(reducer)
			.provide([[matchers.call.fn(getUserSession), username]])
			.put(actions.login(username))
			.hasFinalState({
				username: username,
				status: CheckState.succeed,
			})
			.run();
	});
	it('Should login failed', () => {
		const username = '';
		return expectSaga(checkUserSession)
			.withReducer(reducer)
			.provide([[matchers.call.fn(getUserSession), username]])
			.put(actions.logout())
			.hasFinalState({
				username: username,
				status: CheckState.failed,
			})
			.run();
	});
	it('Should login check', () => {
		const username = 'Maxim';
		return expectSaga(saveUserSession, {
			type: actions.login.type,
			payload: username,
		})
			.call(login, username)
			.run();
	});
});
