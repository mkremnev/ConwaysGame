/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { LinkProps } from './types';

const List = styled.li`
	list-style: none;
`;
const active = css`
	text-decoration: underline;
`;
const customA = css`
	color: #007bff;
	display: inline-block;
	padding: 0.5rem 1rem;
	text-decoration: none;
	&:hover {
		color: #0056b3;
		text-decoration: underline;
	}
`;

export const CustomLink: FC<LinkProps> = ({
	label,
	to,
	activeOnlyWhenExact,
}) => {
	const match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
	});

	return (
		<List css={match && active}>
			<Link css={customA} to={to}>
				{label}
			</Link>
		</List>
	);
};
