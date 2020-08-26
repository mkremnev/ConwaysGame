import React from 'react';
import { mount } from 'enzyme';
import { BtnCommon } from './BtnCommon';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer
				.create(<BtnCommon text={'Очистить'} onClick={jest.fn()} />)
				.toJSON(),
		).toMatchSnapshot();
	});
	it('calls onClick callback on click btn', () => {
		const onClick = jest.fn();
		const wrapper = mount(
			<BtnCommon text={'Очистить'} onClick={onClick} />,
		);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
