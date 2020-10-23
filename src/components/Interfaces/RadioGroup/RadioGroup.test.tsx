import React from 'react';
import { mount } from 'enzyme';
import { RadioGroup } from './RadioGroup';
import renderer from 'react-test-renderer';

describe('Testing interfaces RadioGroup', () => {
	const option = [
		{
			title: '10X10',
			value: '{"rows": "10", "columns": "10"}',
		},
		{
			title: '20X20',
			value: '{"rows": "20", "columns": "20"}',
		},
		{
			title: '30X30',
			value: '{"rows": "30", "columns": "30"}',
		},
	];

	const fn = jest.fn();
	it('Renders RadioGroup correctly', () => {
		expect(
			renderer
				.create(
					<RadioGroup
						options={option}
						label="Размер поля"
						onChange={fn}
					/>,
				)
				.toJSON(),
		).toMatchInlineSnapshot(`
		<div
		  className="css-5zd4bl-GroupComponent ev64cv60"
		  onChange={[MockFunction]}
		>
		  <div
		    className="css-1ywf0k4-BlockComponent ev64cv61"
		  >
		    Размер поля
		  </div>
		  <label
		    className="css-o6wahk-LabelComponent ev64cv64"
		  >
		    <input
		      checked={false}
		      className="css-nogf0e-InputComponent ev64cv62"
		      onChange={[MockFunction]}
		      onClick={[Function]}
		      type="radio"
		      value="{\\"rows\\": \\"10\\", \\"columns\\": \\"10\\"}"
		    />
		    <span
		      className="css-1od4l5p-SpanComponent ev64cv63"
		    >
		      10X10
		    </span>
		  </label>
		  <label
		    className="css-o6wahk-LabelComponent ev64cv64"
		  >
		    <input
		      checked={true}
		      className="css-nogf0e-InputComponent ev64cv62"
		      onChange={[MockFunction]}
		      onClick={[Function]}
		      type="radio"
		      value="{\\"rows\\": \\"20\\", \\"columns\\": \\"20\\"}"
		    />
		    <span
		      className="css-1od4l5p-SpanComponent ev64cv63"
		    >
		      20X20
		    </span>
		  </label>
		  <label
		    className="css-o6wahk-LabelComponent ev64cv64"
		  >
		    <input
		      checked={false}
		      className="css-nogf0e-InputComponent ev64cv62"
		      onChange={[MockFunction]}
		      onClick={[Function]}
		      type="radio"
		      value="{\\"rows\\": \\"30\\", \\"columns\\": \\"30\\"}"
		    />
		    <span
		      className="css-1od4l5p-SpanComponent ev64cv63"
		    >
		      30X30
		    </span>
		  </label>
		</div>
	`);
	});

	it('Should have been checked on click', () => {
		const wrapper = mount(
			<RadioGroup
				options={option}
				label="Размер поля"
				onChange={fn}
				onClick={fn}
			/>,
		);
		wrapper.find('input').at(0).simulate('click');
		expect(wrapper.find('input').at(0).prop('checked')).toBe(true);
	});
});
