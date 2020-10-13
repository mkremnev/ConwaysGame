import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CustomLink } from '@/components/Interfaces/Link/Link';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { GameOfLifeState } from '@/store';
import { actions } from './reducer';
import styled from '@emotion/styled';

const WrapperUser = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const UserHead = styled.h4`
	padding: 0.5rem 1rem;
	margin: 0;
`;

const Button = styled.button`
	color: #007bff;
	text-decoration: none;
	display: block;
	padding: 0.5rem 1rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	& :hover {
		color: #0056b3;
		text-decoration: underline;
	}
`;

const mapStateToProps = ({ login }: GameOfLifeState) => ({
	...login,
});

const mapDispatchToProps = {
	logout: actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
	typeof mapDispatchToProps;

const UserComponent: FC<Props> = (props) => {
	const history = useHistory();

	const logout = useCallback(async () => {
		const { logout } = props;
		await logout();
		history.push('/login');
	}, []);
	const { username } = props;

	return isEmpty(username) ? (
		<CustomLink to="/login" label={'Login'} activeOnlyWhenExact />
	) : (
		<WrapperUser>
			<Button onClick={logout}>Logout</Button>
			<UserHead>Hello, {username}!</UserHead>
		</WrapperUser>
	);
};

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
