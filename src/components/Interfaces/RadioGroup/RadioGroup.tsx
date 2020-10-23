import React, { FC, useState } from 'react';
import { InputProps } from './types';
import styled from '@emotion/styled';

const GroupComponent = styled.div`
	position: relative;
`;
const BlockComponent = styled.div`
	margin: 10px 0;
	text-align: center;
`;
const InputComponent = styled.input`
	position: absolute;
	top: 5px;
	z-index: -1;
	opacity: 0;
	&:checked + span {
		color: #fff;
		background-color: #007bff;
		border-color: #20a0ff;
	}
`;
const SpanComponent = styled.span`
	white-space: nowrap;
	background: #fff;
	border: 1px solid #bfcbd9;
	border-left: 0;
	color: #1f2d3d;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: 0;
	margin: 0;
	cursor: pointer;
	padding: 10px 15px;
	font-size: 14px;
	border-radius: 0;
`;
const LabelComponent = styled.label`
	&:first-of-type span {
		border-left: 1px solid #bfcbd9;
	}
`;

export const RadioGroup: FC<React.HTMLProps<HTMLInputElement> & InputProps> = (
	props,
) => {
	const { label, options, ...InputProps } = props;
	const [checked, setChecked] = useState(options[1].value);
	return (
		<GroupComponent onChange={props.onChange}>
			<BlockComponent>{label}</BlockComponent>
			{options.map((el) => (
				<LabelComponent key={el.title}>
					<InputComponent
						type="radio"
						{...InputProps}
						value={el.value}
						onClick={(ev) =>
							setChecked((ev.target as HTMLInputElement).value)
						}
						checked={checked === el.value}
					/>
					<SpanComponent>{el.title}</SpanComponent>
				</LabelComponent>
			))}
		</GroupComponent>
	);
};
