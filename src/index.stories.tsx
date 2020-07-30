import React from 'react';
import { Button } from '@storybook/react/demo';
import { withKnobs, number } from'@storybook/addon-knobs'

export default {
	title: 'Button',
	decorators: [withKnobs]
};

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
	<Button>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
);
