import React from 'react';
import { mount } from 'enzyme';
import { LoginComponent } from './Login';
import { LoginSlice } from './reducer';

describe('Testing component Login', () => {
	it('calls submit component with username', async () => {
		jest.spyOn(LoginSlice.actions, 'login');
		const username = 'User';

		const wrapper = mount(
			<LoginComponent username="" login={LoginSlice.actions.login} />,
		);
		wrapper.find('input').simulate('change', {
			target: {
				value: username,
			},
		});
		await wrapper.find('form').simulate('submit', {
			preventDefault: () => null,
		});
		expect(LoginSlice.actions.login).toHaveBeenCalledWith(username);
	});
});
