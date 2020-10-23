import React from 'react';
import { CustomLink } from '@/components/Interfaces/Link/Link';
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
`;

export const Navigation: React.FC<{}> = () => {
	return (
		<Nav>
			{routes.map((list, id) => {
				const { route, title } = list;
				return (
					<CustomLink
						key={id}
						to={route}
						label={title}
						activeOnlyWhenExact
					></CustomLink>
				);
			})}
			<li>
				<User />
			</li>
		</Nav>
	);
};
