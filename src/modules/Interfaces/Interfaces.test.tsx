import React from 'react';
import { mount } from 'enzyme';
import { InterfaceLayout } from './Interfaces';
import renderer from 'react-test-renderer';

describe('Testin interfaces', () => {
	const fn = jest.fn();
	it('Render correctly', () => {
		expect(
			renderer
				.create(
					<InterfaceLayout
						button1={{
							text: 'Начать',
							onClick: fn,
						}}
						button2={{
							text: 'Начать',
							onClick: fn,
						}}
						button3={{
							text: 'Начать',
							onClick: fn,
						}}
						input={{
							type: 'range',
							name: 'Name',
							onChange: (
								e: React.ChangeEvent<HTMLInputElement>,
							) => {
								e.preventDefault();
							},
							min: '50',
							max: '1000',
							step: '50',
						}}
					/>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<div
		  className="css-8a9a6o-InterfaceLayoutWrapper emz3rbl0"
		>
		  <button
		    className="css-s63jpt-Btn e1tse95j0"
		    onClick={[MockFunction]}
		  >
		    Начать
		  </button>
		  <button
		    className="css-s63jpt-Btn e1tse95j0"
		    onClick={[MockFunction]}
		  >
		    Начать
		  </button>
		  <button
		    className="css-s63jpt-Btn e1tse95j0"
		    onClick={[MockFunction]}
		  >
		    Начать
		  </button>
		  <input
		    className="css-899qxt"
		    max="1000"
		    min="50"
		    name="Name"
		    onChange={[Function]}
		    step="50"
		    type="range"
		    value=""
		  />
		</div>
	`);
	});

	it('Calls button click', () => {
		const wrapper = mount(
			<InterfaceLayout
				button1={{
					text: 'Начать',
					onClick: fn,
				}}
				button2={{
					text: 'Начать',
					onClick: fn,
				}}
				button3={{
					text: 'Начать',
					onClick: fn,
				}}
				input={{
					type: 'text',
					name: 'Value',
					onChange: fn,
				}}
			/>,
		);
		wrapper.find('button').at(0).simulate('click');
		expect(fn).toHaveBeenCalled();
		wrapper.find('button').at(1).simulate('click');
		expect(fn).toHaveBeenCalled();
		wrapper.find('button').at(2).simulate('click');
		expect(fn).toHaveBeenCalled();
	});

	it('ChangeEvent input', () => {
		const wrapper = mount(
			<InterfaceLayout
				button1={{
					text: 'Начать',
					onClick: fn,
				}}
				button2={{
					text: 'Начать',
					onClick: fn,
				}}
				button3={{
					text: 'Начать',
					onClick: fn,
				}}
			/>,
		);
		wrapper
			.find('input')
			.simulate('change', { target: { value: 'maxim' } });
		wrapper.update();
		expect(wrapper.find('input').prop('value')).toEqual('maxim');
	});
});
