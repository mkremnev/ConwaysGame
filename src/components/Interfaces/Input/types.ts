export type inputAttributes = {
	type: string;
	name: string;
	placeholder?: string;
	min?: string;
	max?: string;
	step?: string;
	value?: number | string;
	border?: string;
	size?: number;
	onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
};
