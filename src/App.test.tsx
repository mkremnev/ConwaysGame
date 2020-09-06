import React from 'react';
import { AppContainer, LocationDisplay } from '@/AppContainer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing App component', () => {
	test('Rendering a component that uses withRouter at home', () => {
		const history = createMemoryHistory();
		const route = '/home';
		history.push(route);
		const { getByTestId } = render(
			<Router history={history}>
				<LocationDisplay />
			</Router>,
		);
		expect(getByTestId('location-display')).toHaveTextContent(route);
	});

	test('Rendering a component that uses withRouter at rules', () => {
		const history = createMemoryHistory();
		const route = '/rules';
		history.push(route);
		const { getByTestId } = render(
			<Router history={history}>
				<LocationDisplay />
			</Router>,
		);
		expect(getByTestId('location-display')).toHaveTextContent(route);
	});

	test('Testing rendering 404 not found at request non-existent page', () => {
		const history = createMemoryHistory();
		history.push('/some');
		const component = render(
			<Router history={history}>
				<AppContainer />
			</Router>,
		);
		expect(component.getByRole('heading')).toHaveTextContent('404');
	});
});
