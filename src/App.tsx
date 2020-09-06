import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AppContainer } from './AppContainer';

export const App: React.FC<{}> = () => {
	const history = createMemoryHistory();
	return (
		<Router history={history}>
			<AppContainer />
		</Router>
	);
};
