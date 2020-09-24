import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { GameOfLifeWithRedux } from '@/modules/GameOfLifeWithRedux/GameOfLifeWithRedux';

export const GameOfLifeWithReduxScreen: React.FC<{}> = authorizedCheck(() => {
	return <GameOfLifeWithRedux />;
});
