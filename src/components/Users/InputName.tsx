import React, { FC } from 'react';

export type formType = {
	onSubmit: (ev: React.FormEvent) => void;
};

export const InputName: FC<formType> = ({ onSubmit, children }) => {
	return (
		<form onSubmit={onSubmit}>
			<fieldset>
				<legend>Введите свое имя</legend>
				{children}
				<button>Start</button>
			</fieldset>
		</form>
	);
};
