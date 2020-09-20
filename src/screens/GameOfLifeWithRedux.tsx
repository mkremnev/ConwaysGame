import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { GameOfLifeWithRedux } from '@/components/Main/GameOfLifeWithRedux';

export const GameOfLifeWithReduxScreen: React.FC<{}> = authorizedCheck(() => {
	return <GameOfLifeWithRedux />;
});
