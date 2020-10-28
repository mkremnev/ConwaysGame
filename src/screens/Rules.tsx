import React from 'react';
import { AuthorizedCheck } from '@/common/AuthorizedCheck';

export const RulesView: React.FC<{}> = () => {
	return <div>Rules</div>;
};

export const Rules = AuthorizedCheck(RulesView);
