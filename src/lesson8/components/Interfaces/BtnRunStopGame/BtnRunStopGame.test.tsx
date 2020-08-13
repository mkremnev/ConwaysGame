import React from 'react';
import { mount } from 'enzyme';
import { BtnRunStopGame } from './BtnRunStopGame';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer
				.create(<BtnRunStopGame isRunningGame onClick={jest.fn()} />)
				.toJSON(),
		).toMatchSnapshot();
	});
	it('renders button clear board', () => {
		expect(
			renderer
				.create(
					<BtnRunStopGame
						isRunningGame={false}
						onClick={jest.fn()}
					/>,
				)
				.toJSON(),
		).toMatchSnapshot();
	});
	it('calls onClick callback on click btn', () => {
		const onClick = jest.fn();
		const wrapper = mount(
			<BtnRunStopGame isRunningGame onClick={onClick} />,
		);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
