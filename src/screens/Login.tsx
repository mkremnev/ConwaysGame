import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '@/api/auth';
import { InputName } from '@/components/Users/InputName';

export const Login: React.FC<{}> = () => {
	const [name, setName] = useState('');

	const history = useHistory();

	const onSubmit = useCallback(
		async (ev) => {
			ev.preventDefault();
			await login(name);
			history.push(`/home`);
		},
		[name],
	);

	const onChange = (ev: HTMLInputElement) =>
		setName((ev.target as HTMLInputElement).value);

	return <InputName onSubmit={onSubmit} onChange={onChange} value={name} />;
};
