import React from 'react';
import { mount } from 'enzyme';
import { InputName } from './InputName';
import renderer from 'react-test-renderer';

describe('Testing component Input name', () => {
	const wrapper = mount(<InputName />);
	it('calls onSubmit prop function when form is submitted', () => {
		const fakeEvent = { preventDefault: jest.fn() };
		wrapper.find('form').simulate('submit', fakeEvent);
		expect(fakeEvent.preventDefault).toHaveBeenCalled();
	});

	it('Render component is correctly', () => {
		expect(renderer.create(<InputName />).toJSON()).toMatchInlineSnapshot(`
		<div
		  className="css-z7m6r5-InputNameWrapper emhrg4r0"
		>
		  <form
		    onSubmit={[Function]}
		  >
		    <fieldset>
		      <legend>
		        Введите свое имя
		      </legend>
		      <input
		        className="css-899qxt"
		        name="UserName"
		        onChange={[Function]}
		        type="text"
		        value="Jon Doe"
		      />
		      <button
		        className="css-s63jpt-Btn e1tse95j0"
		      >
		        Отправить
		      </button>
		    </fieldset>
		  </form>
		  <h3>
		    Jon Doe
		  </h3>
		</div>
	`);
	});

	it('Chenge input', () => {
		wrapper.find('input').simulate('change', {
			target: { value: 'maxim' },
		});
		expect(wrapper.find('input').prop('value')).toEqual('maxim');
	});

	it('Button click', () => {
		const fakeEvent = { preventDefault: jest.fn() };
		wrapper.find('button').simulate('submit', fakeEvent);
		expect(fakeEvent.preventDefault).toHaveBeenCalled();
	});
});
