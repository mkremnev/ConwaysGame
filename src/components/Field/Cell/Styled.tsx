import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { StyledProps } from './Cell';

const commonCell = css`
	background: #fff;
	border: 1px solid #999;
	font-size: 25px;
	font-weight: bold;
	line-height: 25px;
	height: 25px;
	text-align: center;
	width: 25px;
	display: inline-flex;
	outline: none;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	overflow: hidden;
`;

const emptyCell = css`
	border-color: gray;
`;

const filledCell = css`
	border-color: gray;
	background: black;
`;

export const CellWrapper = styled.button`
	${commonCell}
	${({ isFilled }: StyledProps) => (isFilled ? filledCell : emptyCell)}
`;
