import React, { FC } from 'react';
import { Button } from '@/components/Interfaces/Button/Button';
import { Input } from '@/components/Interfaces/Input';
import styled from '@emotion/styled';
import { inputAttributes } from '@/components/Interfaces/Input';
import { ButtonType } from '@/components/Interfaces/Button/Button';

export type ListButton = {
	button1: ButtonType;
	button2: ButtonType;
	button3: ButtonType;
	input?: inputAttributes;
};

const StyledComponent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

const renderCondition = (prevProps: ListButton, nextProps: ListButton) => {
	return (
		prevProps.button1.text === nextProps.button1.text &&
		prevProps.input!.value === nextProps.input!.value
	);
};

const Layout: FC<ListButton> = (props) => {
	return (
		<StyledComponent>
			<Button text={props.button1.text} onClick={props.button1.onClick} />
			<Button text={props.button2.text} onClick={props.button2.onClick} />
			<Button text={props.button3.text} onClick={props.button3.onClick} />
			<Input {...props.input} />
		</StyledComponent>
	);
};
export const InterfaceLayout = React.memo(Layout, renderCondition);
