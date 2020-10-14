import React from 'react';
import { Navigation } from './Navigation';
import { Story } from '@storybook/react/types-6-0';
import { store } from '@/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component / Navigation',
	component: Navigation,
	argTypes: {},
	args: {},
};

export const NavigationStories: Story<{}> = (args: {}) => (
	<Provider store={store}>
		<Router>
			<Navigation />
		</Router>
	</Provider>
);
