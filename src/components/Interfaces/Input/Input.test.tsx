import React from 'react';
import { mount } from 'enzyme';
import { Input } from './Input';
import renderer from 'react-test-renderer';

describe('Testing interfaces onchange speed game', () => {
	it('Renders input type range', () => {
		expect(
			renderer
				.create(
					<Input
						type={'range'}
						name="speedValue"
						value={500}
						onChange={jest.fn()}
					/>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<input
		  className="css-15m9agn-Input"
		  name="speedValue"
		  onChange={[MockFunction]}
		  type="range"
		  value={500}
		/>
	`);
	});
	it('calls change callback on change input', () => {
		const onChange = jest.fn();
		const wrapper = mount(
			<Input
				type={'range'}
				name="speedValue"
				value={500}
				onChange={onChange}
			/>,
		);
		wrapper.simulate('change');
		expect(onChange).toHaveBeenCalled();
	});
});
