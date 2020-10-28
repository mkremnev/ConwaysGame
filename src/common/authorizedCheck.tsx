import React, { useState, useEffect } from 'react';
import { isLoggedIn } from '@/api/auth';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from '@emotion/styled';

const WrapperSpiner = styled.div`
	display: flex;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

enum CheckState {
	initiated,
	succeed,
	failed,
}

export const AuthorizedCheck = <Props extends object>(
	Component: React.ComponentType<Props>,
	redirectPath = '/login',
) => (props: Props) => {
	const [isAuthorized, setIsAuthorized] = useState(CheckState.initiated);

	useEffect(() => {
		(async () => {
			const isAuthorized = await isLoggedIn();
			setIsAuthorized(
				isAuthorized ? CheckState.succeed : CheckState.failed,
			);
		})();
	}, []);

	if (isAuthorized === CheckState.initiated) {
		return (
			<WrapperSpiner>
				<Loader type="Circles" color="#00BFFF" height={80} width={80} />
			</WrapperSpiner>
		);
	}

	if (isAuthorized === CheckState.failed) {
		return <Redirect to={redirectPath} />;
	}

	return <Component {...props} />;
};

AuthorizedCheck.displayName = 'AuthorizedCheck';
