import React from 'react';
import { Navigation } from './Navigation';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { BrowserRouter as Router } from 'react-router-dom';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';

expect.addSnapshotSerializer(serializer);

describe('Testing Navigation', () => {
	it('Render correctly', () => {
		expect(
			renderer
				.create(
					<Provider store={store}>
						<Router>
							<Navigation />
						</Router>
					</Provider>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		.emotion-0 {
		  display: -webkit-box;
		  display: -webkit-flex;
		  display: -ms-flexbox;
		  display: flex;
		  -webkit-flex-wrap: wrap;
		  -ms-flex-wrap: wrap;
		  flex-wrap: wrap;
		  -webkit-flex-direction: row;
		  -ms-flex-direction: row;
		  flex-direction: row;
		  -webkit-box-pack: center;
		  -webkit-justify-content: center;
		  -ms-flex-pack: center;
		  justify-content: center;
		  padding-left: 0;
		  margin-bottom: 0;
		  list-style: none;
		}

		.emotion-0 > li a {
		  color: #007bff;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		  display: block;
		  padding: 0.5rem 1rem;
		}

		.emotion-0 > li h4 {
		  padding: 0.5rem 1rem;
		  margin: 0;
		}

		.emotion-0 button {
		  color: #007bff;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		  display: block;
		  padding: 0.5rem 1rem;
		  background-color: transparent;
		  border: none;
		  cursor: pointer;
		  outline: none;
		}

		.emotion-0 > li a:hover,
		.emotion-0 button:hover {
		  color: #0056b3;
		}

		<ul
		  className="emotion-0 emotion-1"
		>
		  <li>
		    <a
		      href="/"
		      onClick={[Function]}
		    >
		      Home
		    </a>
		  </li>
		  <li>
		    <a
		      href="/rules"
		      onClick={[Function]}
		    >
		      Rules
		    </a>
		  </li>
		  <li>
		    <a
		      href="/game"
		      onClick={[Function]}
		    >
		      Game
		    </a>
		  </li>
		  <li>
		    <a
		      href="/redux"
		      onClick={[Function]}
		    >
		      Gamewithredux
		    </a>
		  </li>
		  <li>
		    <a
		      href="/login"
		      onClick={[Function]}
		    >
		      login
		    </a>
		  </li>
		</ul>
	`);
	});
});
