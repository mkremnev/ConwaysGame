import React, { FC } from 'react';
import { BtnCommonType } from '../../../Interfaces/BtnCommonType';

export const BtnCommon: FC<BtnCommonType> = ({ text, onClick }) => {
	return (
		<button className="btn btn-common" onClick={onClick}>
			{text}
		</button>
	);
};
