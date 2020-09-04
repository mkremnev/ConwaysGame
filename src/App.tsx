import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import { Home } from '@/screens/Home';
import { Login } from '@/screens/Login';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';
import { NotFound } from '@/screens/NotFound';
import { createMemoryHistory } from 'history';

export const LocationDisplay = withRouter(({ location }) => (
	<div data-testid="location-display">{location.pathname}</div>
));

export const App: React.FC<{}> = () => {
	const history = createMemoryHistory();
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/rules" component={Rules}></Route>
				<Route path="/game" component={GameOfLife}></Route>
				<Route path="*" component={NotFound}></Route>
			</Switch>
			<LocationDisplay />
		</Router>
	);
};
