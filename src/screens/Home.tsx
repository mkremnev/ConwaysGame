import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { Navigation } from '@/components/View/Navigation';

export const HomeView: React.FC<{}> = () => {
	return (
		<>
			<Navigation />
			<div>Home</div>
		</>
	);
};

export const Home = authorizedCheck(HomeView);
