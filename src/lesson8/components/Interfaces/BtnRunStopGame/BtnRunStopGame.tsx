import React, { FC } from 'react';
import { BtnRunStopGameType } from '../../../types/Interfaces/BtnRunStopGameType';

export const BtnRunStopGame: FC<BtnRunStopGameType> = ({
	isRunningGame,
	onClick,
}) => {
	return isRunningGame ? (
		<button type="button" onClick={onClick}>
			{'Остановить'}
		</button>
	) : (
		<button type="button" onClick={onClick}>
			{'Начать'}
		</button>
	);
};
