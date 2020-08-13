import React, { FC } from 'react';
import { BtnCommonType } from '../../../types/Interfaces/BtnCommonType';

export const BtnCommon: FC<BtnCommonType> = ({ text, onClick }) => {
	return (
		<button className="btn btn-clear" onClick={onClick}>
			{text}
		</button>
	);
};
