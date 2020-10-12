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
		    className="css-am0pc4-customA-active-CustomLink"
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
		    className="css-12s5ckf-customA-CustomLink"
		    href="/route"
		    onClick={[Function]}
		  >
		    Route
		  </a>
		</li>
	`);
	});
});
