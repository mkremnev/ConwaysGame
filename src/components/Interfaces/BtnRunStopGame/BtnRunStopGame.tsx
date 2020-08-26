import React, { FC } from 'react';
import { BtnRunStopGameType } from '../../../Interfaces/BtnRunStopGameType';

export const BtnRunStopGame: FC<BtnRunStopGameType> = ({
	isRunningGame,
	onClick,
}) => {
	return isRunningGame ? (
		<button className="btn btn-stop" type="button" onClick={onClick}>
			{'Остановить'}
		</button>
	) : (
		<button className="btn btn-run" type="button" onClick={onClick}>
			{'Начать'}
		</button>
	);
};
