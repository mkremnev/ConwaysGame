import { reducer, actions } from './reducer';

describe('Reducer and actions Login', () => {
	const initialState = {
		username: '',
		status: 0,
	};

	it('Should create login action', () => {
		expect(actions.hasOwnProperty('login')).toBe(true);
	});

	it('Should have the correct action for login', () => {
		expect(actions.login('')).toEqual({
			type: 'user/login',
			payload: '',
		});
	});

	it('Should create logout action', () => {
		expect(actions.hasOwnProperty('logout')).toBe(true);
	});

	it('Should have the correct action for logout', () => {
		expect(actions.logout()).toEqual({
			type: 'user/logout',
			payload: undefined,
		});
	});

	it('Should return the correct value from reducer login', () => {
		expect(reducer(initialState, actions.login('maxim'))).toEqual({
			status: 1,
			username: 'maxim',
		});
	});

	it('Should return the correct value from reducer logout', () => {
		expect(reducer(initialState, actions.logout())).toEqual({
			status: 2,
			username: '',
		});
	});
});
