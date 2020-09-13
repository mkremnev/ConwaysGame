import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home } from '@/screens/Home';
import { Login } from '@/screens/Login';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';
import { NotFound } from '@/screens/NotFound';
import { Navigation } from '@/components/View/Navigation';

export const LocationDisplay = withRouter(({ location }) => (
	<div data-testid="location-display">{location.pathname}</div>
));

export const AppContainer: React.FC<{}> = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/rules" component={Rules} />
				<Route path="/game" component={GameOfLife} />
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
};
