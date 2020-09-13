import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { GameOfLifeWithRedux } from '@/components/Main/GameOfLifeWithRedux';
import { Navigation } from '@/components/View/Navigation';

export const GameOfLifeWithReduxScreen: React.FC<{}> = authorizedCheck(() => {
	return (
		<>
			<Navigation />
			<GameOfLifeWithRedux />
		</>
	);
});
