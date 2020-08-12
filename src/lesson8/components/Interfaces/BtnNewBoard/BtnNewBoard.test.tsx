import React from 'react';
import { mount } from 'enzyme';
import { BtnNewBoard } from './BtnNewBoard';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer.create(<BtnNewBoard onClick={jest.fn()} />).toJSON(),
		).toMatchSnapshot();
	});
	it('calls onClick callback on click btn', () => {
		const onClick = jest.fn();
		const wrapper = mount(<BtnNewBoard onClick={onClick} />);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
