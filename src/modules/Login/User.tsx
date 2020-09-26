import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
		<Link to="/login">login</Link>
	) : (
		<WrapperUser>
			<button onClick={logout}>Logout</button>
			<h4>Hello, {username}!</h4>
		</WrapperUser>
	);
};

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
