import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@/screens/Home';
import { Login } from '@/screens/Login';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';

export const App: React.FC<{}> = () => {
	return (
		<Router>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/rules" component={Rules}></Route>
				<Route path="/game" component={GameOfLife}></Route>
			</Switch>
		</Router>
	);
};
