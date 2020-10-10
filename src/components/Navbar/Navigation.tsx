import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { User } from '@/modules/Login/User';
import { routes } from './routes';

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
	& > li h4 {
		padding: 0.5rem 1rem;
		margin: 0;
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
	return (
		<Nav>
			{routes.map((list, id) => {
				const { route, title } = list;
				return (
					<li key={id}>
						<Link to={route}>{title}</Link>
					</li>
				);
			})}
			<li>
				<User />
			</li>
		</Nav>
	);
};
