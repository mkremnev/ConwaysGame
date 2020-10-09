import React from 'react';
import { AppContainer } from '@/AppContainer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from './store';

describe('Testing App component', () => {
	test('Testing rendering 404 not found at request non-existent page', () => {
		const history = createMemoryHistory();
		history.push('/some');
		const component = render(
			<Provider store={store}>
				<Router history={history}>
					<AppContainer />
				</Router>
			</Provider>,
		);
		expect(
			component.getByRole('heading', { name: '404' }),
		).toHaveTextContent('404');
	});
});
