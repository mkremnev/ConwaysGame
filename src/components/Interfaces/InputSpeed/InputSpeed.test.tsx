import React from 'react';
import { mount } from 'enzyme';
import { InputSpeed } from './InputSpeed';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer
				.create(<InputSpeed speedValue={500} onChange={jest.fn()} />)
				.toJSON(),
		).toMatchSnapshot();
	});
	it('renders button clear board', () => {
		expect(
			renderer
				.create(<InputSpeed speedValue={500} onChange={jest.fn()} />)
				.toJSON(),
		).toMatchSnapshot();
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
