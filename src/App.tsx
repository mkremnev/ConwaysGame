import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from './AppContainer';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: React.FC<{}> = () => {
	return (
		<Provider store={store}>
			<Router>
				<AppContainer />
			</Router>
		</Provider>
	);
};
