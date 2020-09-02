import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { GameOfLifeProto } from '@/components/Main/GameOfLifeProto';
import { Field } from '@/components/Field/Field';
import { Navigation } from '@/components/View/Navigation';

export const GameOfLife: React.FC<{}> = authorizedCheck(() => {
	return (
		<>
			<Navigation />
			<GameOfLifeProto rows={20} columns={20} fieldComponent={Field} />
		</>
	);
});
