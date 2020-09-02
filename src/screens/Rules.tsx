import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';
import { Navigation } from '@/components/View/Navigation';

export const RulesView: React.FC<{}> = () => {
	return (
		<>
			<Navigation />
			<div>Rules</div>
		</>
	);
};

export const Rules = authorizedCheck(RulesView);
