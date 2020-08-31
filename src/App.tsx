import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from '@/screens/Login';
import { Home } from '@/screens/Home';
import { Rules } from '@/screens/Rules';
import { GameOfLife } from '@/screens/GameOfLife';

export const App: React.FC<{}> = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>

				<li>
					<Link to="/home">Home</Link>
				</li>

				<li>
					<Link to="/rules">Rules</Link>
				</li>

				<li>
					<Link to="/game">GameOfLife</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/login" component={Login}></Route>
			<Route path="/home" component={Home}></Route>
			<Route path="/rules" component={Rules}></Route>
			<Route path="/game" component={GameOfLife}></Route>
		</Switch>
	</Router>
);
