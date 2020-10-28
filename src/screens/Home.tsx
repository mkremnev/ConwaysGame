import React from 'react';
import { AuthorizedCheck } from '@/common/AuthorizedCheck';

export const HomeView: React.FC<{}> = () => {
	return <div>Home</div>;
};

export const Home = AuthorizedCheck(HomeView);
