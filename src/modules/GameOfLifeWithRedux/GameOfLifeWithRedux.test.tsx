import React from 'react';
import { GameOfLifeWithRedux } from '@/modules/GameOfLifeWithRedux/GameOfLifeWithRedux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { reducer } from '@/store';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import { cellGridFillRandom } from '@/rdx/reducer/field';

describe('GameOfLifeWithRedux with mocked store', () => {
	const mockStore = configureStore([]);
	let store: any;

	beforeEach(() => {
		store = mockStore({
			field: cellGridFillRandom(20, 20, () => false),
			speed: { value: '500' },
			game: { gameRun: false },
			flow: {
				data: [],
				loading: false,
				error: null,
			},
		});
	});

	it('Should generate action on click', () => {
		const wrapper = mount(
			<Provider store={store}>
				<GameOfLifeWithRedux />
			</Provider>,
		);
		(wrapper.find('Field').props() as any).onClick(100, 999);
		expect(store.getActions()).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "payload": Object {
		      "x": 100,
		      "y": 999,
		    },
		    "type": "field/setCell",
		  },
		]
	`);
	});
});

describe('ReduxScreen with real store', () => {
	let store: any;

	beforeEach(() => {
		store = createStore(reducer, {
			field: cellGridFillRandom(5, 5, () => false),
			speed: {
				value: '500',
			},
			game: {
				gameRun: false,
			},
			flow: {
				data: [],
				loading: false,
				error: null,
			},
		});
		jest.spyOn(store, 'dispatch');
	});

	it('should generate action on click', () => {
		const wrapper = mount(
			<Provider store={store}>
				<GameOfLifeWithRedux />
			</Provider>,
		);

		(wrapper.find('Field').props() as any).onClick(0, 1);
		wrapper.update();
		(wrapper.find('Field').props() as any).onClick(1, 1);

		expect(store.getState()).toMatchInlineSnapshot(`
		Object {
		  "field": Array [
		    Array [
		      false,
		      true,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      true,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		  ],
		  "flow": Object {
		    "data": Array [],
		    "error": null,
		    "loading": false,
		  },
		  "game": Object {
		    "gameRun": false,
		  },
		  "speed": Object {
		    "value": "500",
		  },
		}
	`);
		expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
		Array [
		  Array [
		    Object {
		      "payload": Object {
		        "x": 0,
		        "y": 1,
		      },
		      "type": "field/setCell",
		    },
		  ],
		  Array [
		    Object {
		      "payload": Object {
		        "x": 1,
		        "y": 1,
		      },
		      "type": "field/setCell",
		    },
		  ],
		]
	`);
	});

	test('Expected actions updateBoard', () => {
		const wrapper = mount(
			<Provider store={store}>
				<GameOfLifeWithRedux />
			</Provider>,
		);

		(wrapper.find('button[children="Обновить"]').props() as any).onClick();
		expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
		Array [
		  Array [
		    Object {
		      "payload": undefined,
		      "type": "field/updateBoard",
		    },
		  ],
		]
	`);
	});

	test('Expected actions clearBoard', () => {
		const wrapper = mount(
			<Provider store={store}>
				<GameOfLifeWithRedux />
			</Provider>,
		);

		(wrapper.find('button[children="Очистить"]').props() as any).onClick();
		expect(store.getState()).toMatchInlineSnapshot(`
		Object {
		  "field": Array [
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		    Array [
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		      false,
		    ],
		  ],
		  "flow": Object {
		    "data": Array [],
		    "error": null,
		    "loading": false,
		  },
		  "game": Object {
		    "gameRun": false,
		  },
		  "speed": Object {
		    "value": "500",
		  },
		}
	`);
		expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
		Array [
		  Array [
		    Object {
		      "payload": undefined,
		      "type": "field/clearBoard",
		    },
		  ],
		]
	`);
	});
	test('Expected actions changeSpeed', () => {
		const wrapper = mount(
			<Provider store={store}>
				<GameOfLifeWithRedux />
			</Provider>,
		);

		(wrapper.find('input').props() as any).onChange({
			target: { value: 250 },
		});
		expect(store.dispatch as jest.Mock).toHaveBeenCalledTimes(1);
		expect((store.dispatch as jest.Mock).mock.calls).toMatchInlineSnapshot(`
		Array [
		  Array [
		    Object {
		      "payload": 250,
		      "type": "changeSpeed",
		    },
		  ],
		]
	`);
	});
});
