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
		.emotion-15 {
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

		.emotion-1 {
		  list-style: none;
		}

		.emotion-0 {
		  color: #007bff;
		  display: inline-block;
		  padding: 0.5rem 1rem;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		  -webkit-text-decoration: underline;
		  text-decoration: underline;
		}

		.emotion-0:hover {
		  color: #0056b3;
		  -webkit-text-decoration: underline;
		  text-decoration: underline;
		}

		.emotion-3 {
		  color: #007bff;
		  display: inline-block;
		  padding: 0.5rem 1rem;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		}

		.emotion-3:hover {
		  color: #0056b3;
		  -webkit-text-decoration: underline;
		  text-decoration: underline;
		}

		<ul
		  className="emotion-15 emotion-16"
		>
		  <li
		    className="emotion-1 emotion-2"
		  >
		    <a
		      className="emotion-0"
		      href="/"
		      onClick={[Function]}
		    >
		      Home
		    </a>
		  </li>
		  <li
		    className="emotion-1 emotion-2"
		  >
		    <a
		      className="emotion-3"
		      href="/rules"
		      onClick={[Function]}
		    >
		      Rules
		    </a>
		  </li>
		  <li
		    className="emotion-1 emotion-2"
		  >
		    <a
		      className="emotion-3"
		      href="/game"
		      onClick={[Function]}
		    >
		      Game
		    </a>
		  </li>
		  <li
		    className="emotion-1 emotion-2"
		  >
		    <a
		      className="emotion-3"
		      href="/redux"
		      onClick={[Function]}
		    >
		      Gamewithredux
		    </a>
		  </li>
		  <li>
		    <li
		      className="emotion-1 emotion-2"
		    >
		      <a
		        className="emotion-3"
		        href="/login"
		        onClick={[Function]}
		      >
		        Login
		      </a>
		    </li>
		  </li>
		</ul>
	`);
	});
});
