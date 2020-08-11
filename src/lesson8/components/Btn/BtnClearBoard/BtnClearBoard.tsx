import React, { FC } from 'react';
import { BtnClearBoard } from '../../../types/Btn/BtnClearBoard';

export const BtnClearBord: FC<BtnClearBoard> = ({ onClick }) => {
	return (
		<button className="btn btn-clear" onClick={() => onClick()}></button>
	);
};
