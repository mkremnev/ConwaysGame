import React, { FC } from 'react';
import { BtnClearBoardType } from '../../../types/Interfaces/BtnClearBoardType';

export const BtnClearBoard: FC<BtnClearBoardType> = ({ onClick }) => {
	return (
		<button className="btn btn-clear" onClick={onClick}>
			{'Очистить'}
		</button>
	);
};
