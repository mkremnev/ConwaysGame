import React, { FC } from 'react';
import { Input } from '@/components/Interfaces/Input/Input';
import { Button } from '@/components/Interfaces/Button/Button';
import styled from '@emotion/styled';

const InputNameWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export type InputNameType = {
	onSubmit: any;
	onChange: any;
	value?: string;
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

InputName.displayName = 'InputName';
