import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';

export const HomeView: React.FC<{}> = () => {
	return <div>Home</div>;
};

export const Home = authorizedCheck(HomeView);
