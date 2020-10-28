import React from 'react';
import { AuthorizedCheck } from '@/common/AuthorizedCheck';
import { GameOfLifeProto } from '@/modules/Main/GameOfLifeProto';
import { Field } from '@/components/Field/Field';

export const GameOfLife: React.FC<{}> = AuthorizedCheck(() => {
	return <GameOfLifeProto rows={20} columns={20} fieldComponent={Field} />;
});
