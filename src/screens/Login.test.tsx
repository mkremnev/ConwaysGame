import React from 'react';
import { login } from '@/api/auth';
import { mount } from 'enzyme';
import { Login } from './Login';

const mockHistory = { push: jest.fn() };

jest.mock('react-router-dom', () => ({
	useHistory: () => mockHistory,
}));

jest.mock('@/api/auth', () => ({
	login: jest.fn(),
}));

it('redirects to home page', async () => {
	const name = 'Maxim';
	const wrapper = mount(<Login />);
	wrapper.find('input').simulate('change', { target: { value: name } });
	await wrapper
		.find('form')
		.simulate('submit', { preventDefault: () => null });
	expect(login).toHaveBeenCalledWith(name);
	expect(mockHistory.push).toHaveBeenCalledWith(`/`);
});
