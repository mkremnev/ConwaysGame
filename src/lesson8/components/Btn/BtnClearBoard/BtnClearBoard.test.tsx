import React from 'react';
import { mount } from 'enzyme';
import { BtnClearBord } from './BtnClearBoard';
import renderer from 'react-test-renderer';

describe('Cell', () => {
	it('renders button for ', () => {
		expect(
			renderer.create(<BtnClearBord onClick={jest.fn()} />).toJSON(),
		).toMatchSnapshot();
	});
	it('calls onClick callback on click btn', () => {
		const onClick = jest.fn();
		const wrapper = mount(<BtnClearBord onClick={onClick} />);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
	it('calls onClick callback with passed x, y params', () => {
		const onClick = jest.fn();
		const wrapper = mount(<BtnClearBord onClick={onClick} />);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalledWith(false);
	});
});
