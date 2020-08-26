import React from 'react';
import { mount } from 'enzyme';
import { InputSpeed } from './InputSpeed';
import renderer from 'react-test-renderer';

describe('Testing interfaces onchange speed game', () => {
	it('Renders input type range', () => {
		expect(
			renderer
				.create(<InputSpeed speedValue={500} onChange={jest.fn()} />)
				.toJSON(),
		).toMatchInlineSnapshot(`
		Array [
		  <input
		    max="1000"
		    min="50"
		    name="speedValue"
		    onChange={[MockFunction]}
		    step="50"
		    type="range"
		    value={500}
		  />,
		  <label
		    htmlFor="speedValue"
		  >
		    Изменить скорость
		  </label>,
		]
	`);
	});
	it('calls change callback on change input', () => {
		const onChange = jest.fn();
		const wrapper = mount(
			<InputSpeed speedValue={500} onChange={onChange} />,
		);
		wrapper.simulate('change');
		expect(onChange).toHaveBeenCalled();
	});
});
