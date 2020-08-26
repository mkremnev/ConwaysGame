import React, { FC } from 'react';

export type formType = {
	onSubmit: (ev: React.FormEvent) => void;
};

export const InputName: FC<formType> = ({ onSubmit, ...props }) => {
	return (
		<form onSubmit={onSubmit}>
			<fieldset>
				<legend>Введите свое имя</legend>
				{props.children}
				<button>Start</button>
			</fieldset>
		</form>
	);
};
