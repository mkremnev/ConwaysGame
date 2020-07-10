import { createInterface } from 'readline';

import { calc } from './calc';

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (): Promise<null> =>
	new Promise((resolve) => {
		rl.question('> ', (answer: string) => {
			const result = calc(answer);

			if (result) {
				// eslint-disable-next-line no-console
				console.log(`Result: ${result}`);
			}

			resolve();
		});
	});

async function app(): Promise<null> {
	while (true) {
		await question();
	}
}

app();
