import React, { FC } from 'react';
import { css } from '@emotion/core';
import type { ModalTypes } from '../../types/Modal';

const modalWindow = css`
	position: absolute;
	top: 10;
	right: 10;
`;

export const Modal: FC<ModalTypes> = ({ show }) => {
	if (show) {
		return (
			<div css={modalWindow} className="modal">
				<p>Нажата кнопка!</p>
			</div>
		);
	}
	return null;
};
