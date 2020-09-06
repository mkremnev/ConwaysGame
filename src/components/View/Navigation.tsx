import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { logout } from '@/api/auth';

const Nav = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	& > li a {
		color: #007bff;
		text-decoration: none;
		display: block;
		padding: 0.5rem 1rem;
	}
	& button {
		color: #007bff;
		text-decoration: none;
		display: block;
		padding: 0.5rem 1rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
	}
	& > li a:hover,
	button:hover {
		color: #0056b3;
	}
`;

export const Navigation: React.FC<{}> = () => {
	const history = useHistory();

	const logOut = useCallback(async () => {
		await logout();
		history.push('/login');
	}, []);

	return (
		<Nav>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/rules">Rules</Link>
			</li>
			<li>
				<Link to="/game">Game</Link>
			</li>
			<button onClick={logOut}>Logout</button>
		</Nav>
	);
};
