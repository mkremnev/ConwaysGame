import React from 'react';
import { Button, ButtonType } from '../../Interfaces/Button/Button';
import { Input, InputType, styledInput } from '../../Interfaces/Input/Input';
import styled from '@emotion/styled';

export type ListButton = {
	button1: ButtonType;
	button2: ButtonType;
	button3: ButtonType;
	input: InputType & styledInput;
};

const InterfaceLayoutWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export class InterfaceLayout extends React.Component<ListButton> {
	shouldComponentUpdate(nextProps: ListButton) {
		return (
			this.props.button1.text !== nextProps.button1.text ||
			this.props.input.value !== nextProps.input.value
		);
	}

	render() {
		return (
			<InterfaceLayoutWrapper>
				<Button
					text={this.props.button1.text}
					onClick={this.props.button1.onClick}
				/>
				<Button
					text={this.props.button2.text}
					onClick={this.props.button2.onClick}
				/>
				<Button
					text={this.props.button3.text}
					onClick={this.props.button3.onClick}
				/>
				<Input {...this.props.input} />
			</InterfaceLayoutWrapper>
		);
	}
}
