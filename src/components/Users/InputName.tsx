import React, { FC, useState, useEffect, FormEvent } from 'react';
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

export const InputName: FC = () => {
	const [name, setName] = useState('Jon Doe');

	const onSubmit = (ev: FormEvent) => {
		ev.preventDefault();
		const post = {
			name: name,
		};
	};

	const handleChangeName = (ev: React.ChangeEvent<HTMLInputElement>) =>
		setName(ev.target.value);

	return (
		<InputNameWrapper>
			<form onSubmit={onSubmit}>
				<fieldset>
					<legend>Введите свое имя</legend>
					<Input
						type={'text'}
						onChange={handleChangeName}
						name="UserName"
						value={name}
					/>
					<Button type="submit" text={'Отправить'} />
				</fieldset>
			</form>
			<h3>{name}</h3>
		</InputNameWrapper>
	);
};
