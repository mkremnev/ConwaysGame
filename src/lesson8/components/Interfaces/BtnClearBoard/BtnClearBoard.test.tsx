import React from 'react';
import { mount } from 'enzyme';
import { BtnClearBoard } from './BtnClearBoard';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer.create(<BtnClearBoard onClick={jest.fn()} />).toJSON(),
		).toMatchSnapshot();
	});
	it('calls onClick callback on click btn', () => {
		const onClick = jest.fn();
		const wrapper = mount(<BtnClearBoard onClick={onClick} />);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
