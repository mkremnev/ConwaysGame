import React, { FC } from 'react';
import { BtnNewBoardType } from '../../../types/Interfaces/BtnNewBoardType';

export const BtnNewBoard: FC<BtnNewBoardType> = ({ onClick }) => {
	return (
		<button className="btn btn-new" onClick={onClick}>
			{'Обновить'}
		</button>
	);
};
