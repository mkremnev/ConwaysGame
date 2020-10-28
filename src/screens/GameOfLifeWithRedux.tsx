import React from 'react';
import { AuthorizedCheck } from '@/common/AuthorizedCheck';
import { GameOfLifeWithRedux } from '@/modules/GameOfLifeWithRedux/GameOfLifeWithRedux';

export const GameOfLifeWithReduxScreen: React.FC<{}> = AuthorizedCheck(() => {
	return <GameOfLifeWithRedux />;
});
