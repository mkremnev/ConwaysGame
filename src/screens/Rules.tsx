import React from 'react';
import { authorizedCheck } from '@/common/authorizedCheck';

export const RulesView: React.FC<{}> = () => {
	return <div>Rules</div>;
};

export const Rules = authorizedCheck(RulesView);
