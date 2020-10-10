import styled from '@emotion/styled';
import { css } from '@emotion/core';

const commonCell = css`
	background: #fff;
	border: 1px solid #999;
	font-size: 34px;
	font-weight: bold;
	line-height: 34px;
	height: 34px;
	text-align: center;
	width: 34px;
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
