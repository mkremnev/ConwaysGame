import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '@/screens/Home';
import { Signin } from '@/screens/Login';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';
import { GameOfLifeWithReduxScreen } from '@/screens/GameOfLifeWithRedux';
import { NotFound } from '@/screens/NotFound';
import { Navigation } from '@/screens/Navbar/Navigation';

export const AppContainer: React.FC<{}> = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Signin} />
				<Route path="/rules" component={Rules} />
				<Route path="/game" component={GameOfLife} />
				<Route path="/redux" component={GameOfLifeWithReduxScreen} />
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
};
