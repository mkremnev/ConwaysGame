import React from 'react';
import { CustomLink } from './Link';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Testing Link', () => {
	it('Renders Link active correctly', () => {
		expect(
			renderer
				.create(
					<Router>
						<CustomLink to="/" label="Home" activeOnlyWhenExact />
					</Router>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<li
		  className="css-xsfomn-List e1086ard0"
		>
		  <a
		    className="css-1g5179v-customA-active-CustomLink"
		    href="/"
		    onClick={[Function]}
		  >
		    Home
		  </a>
		</li>
	`);
	});
	it('Renders Link non-active correctly', () => {
		expect(
			renderer
				.create(
					<Router>
						<CustomLink
							to="/route"
							label="Route"
							activeOnlyWhenExact
						/>
					</Router>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<li
		  className="css-xsfomn-List e1086ard0"
		>
		  <a
		    className="css-o997fh-customA-CustomLink"
		    href="/route"
		    onClick={[Function]}
		  >
		    Route
		  </a>
		</li>
	`);
	});
});
