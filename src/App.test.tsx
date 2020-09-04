import React from 'react';
import { mount } from 'enzyme';
import { Login } from '@/screens/Login';
import { NotFound } from '@/screens/NotFound';
import { App, LocationDisplay } from '@/App';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('Testing NotFound', async () => {
	const history = createMemoryHistory();
	history.push('/some');
	console.log(history);
	const { debug } = render(<App />);
	debug();
});

test('rendering a component that uses withRouter', () => {
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
