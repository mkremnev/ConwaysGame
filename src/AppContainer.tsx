import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home } from '@/screens/Home';
import { Login } from '@/screens/Login';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';
import { GameOfLifeWithReduxScreen } from '@/screens/GameOfLifeWithRedux';
import { NotFound } from '@/screens/NotFound';

export const LocationDisplay = withRouter(({ location }) => (
	<div data-testid="location-display">{location.pathname}</div>
));

export const AppContainer: React.FC<{}> = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/rules" component={Rules}></Route>
			<Route path="/game" component={GameOfLife}></Route>
			<Route path="/redux" component={GameOfLifeWithReduxScreen}></Route>
			<Route path="*" component={NotFound}></Route>
		</Switch>
	);
};
