import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC<{}> = () => {
	return (
		<>
			<Link to="/">Main</Link>
			<h1>404</h1>
		</>
	);
};
