import React, { FC, useState, FormEvent, FormEventHandler } from 'react';
import { Input } from '../Interfaces/Input/Input';
import { Button } from '../Interfaces/Button/Button';
import styled from '@emotion/styled';

const InputNameWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

type InputNameType = {
	onSubmit: any;
	onChange: any;
	value: string;
};

export const InputName: FC<InputNameType> = ({ onSubmit, onChange, value }) => {
	return (
		<InputNameWrapper>
			<form onSubmit={onSubmit}>
				<fieldset>
					<legend>Введите свое имя</legend>
					<Input
						type={'text'}
						onChange={onChange}
						name="UserName"
						value={value}
					/>
					<Button type="submit" text={'Отправить'} />
				</fieldset>
			</form>
		</InputNameWrapper>
	);
};
