import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { GameOfLifeProto } from '@/modules/Main/GameOfLifeProto';
import { Field } from '@/components/Field/Field';

export const GameOfLife: React.FC<{}> = authorizedCheck(() => {
	return <GameOfLifeProto rows={20} columns={20} fieldComponent={Field} />;
});
