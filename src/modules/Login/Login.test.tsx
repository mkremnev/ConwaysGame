import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Testing component Input name', () => {
	it('calls onSubmit prop function when form is submitted', () => {
		const onsubmit = jest.fn();
		const wrapper = mount(
			<InputName onSubmit={onsubmit} onChange={onsubmit} />,
		);
		wrapper.find('form').simulate('submit');
		expect(onsubmit).toHaveBeenCalled();
	});

	it('Render component is correctly', () => {
		const fn = jest.fn();
		expect(
			renderer
				.create(<InputName onSubmit={fn} onChange={fn} value="" />)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<div
		  className="css-z7m6r5-InputNameWrapper emhrg4r0"
		>
		  <form
		    onSubmit={[MockFunction]}
		  >
		    <fieldset>
		      <legend>
		        Введите свое имя
		      </legend>
		      <input
		        className="css-899qxt"
		        name="UserName"
		        onChange={[MockFunction]}
		        type="text"
		        value=""
		      />
		      <button
		        className="css-s63jpt-Btn e1tse95j0"
		      >
		        Отправить
		      </button>
		    </fieldset>
		  </form>
		</div>
	`);
	});

	it('Chenge input', () => {
		const fn = jest.fn();
		const username = 'maxim';
		const wrapper = mount(
			<InputName onSubmit={fn} onChange={(e) => e.target.value} />,
		);

		wrapper.find('input').simulate('change', {
			target: {
				value: username,
			},
		});
		// expect(wrapper.find('input').prop('value')).toEqual('maxim');
	});

	it('Button click', () => {
		const fn = jest.fn();
		const wrapper = mount(
			<InputName onSubmit={fn} onChange={fn} value="" />,
		);
		wrapper.find('button').simulate('submit');
		expect(fn).toHaveBeenCalled();
	});
});
