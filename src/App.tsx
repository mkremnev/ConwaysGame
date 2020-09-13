import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from './AppContainer';

export const App: React.FC<{}> = () => {
	return (
		<Router>
			<AppContainer />
		</Router>
	);
};
