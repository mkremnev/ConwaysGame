import React from 'react';
import { mount } from 'enzyme';
import { Button } from './Button';
import renderer from 'react-test-renderer';

describe('BtnClearBoard', () => {
	it('renders button clear board', () => {
		expect(
			renderer
				.create(
					<Button
						text={'Начать'}
						color={'#fff'}
						radius={'20px 20px'}
						backgroundColor={'#000'}
						onClick={jest.fn()}
					/>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<button
		  className="css-isa4x8-Btn e1tse95j0"
		  color="#fff"
		  onClick={[MockFunction]}
		  radius="20px 20px"
		>
		  Начать
		</button>
	`);
	});
	it('renders button clear board', () => {
		expect(
			renderer
				.create(<Button text={'Остановить'} onClick={jest.fn()} />)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<button
		  className="css-1hq9pdq-Btn e1tse95j0"
		  onClick={[MockFunction]}
		>
		  Остановить
		</button>
	`);
	});
	it('calls change callback on change input', () => {
		const onClick = jest.fn();
		const wrapper = mount(<Button text={'Обновить'} onClick={onClick} />);
		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});
