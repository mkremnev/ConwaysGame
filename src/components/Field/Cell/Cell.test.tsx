import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';
import serializer from 'jest-emotion';
import renderer from 'react-test-renderer';

expect.addSnapshotSerializer(serializer);

test('Cell renders status allive correctly', () => {
	const onClick = jest.fn();
	expect(
		renderer
			.create(<Cell filled={true} x={1} y={2} onClick={onClick} />)
			.toJSON(),
	).toMatchInlineSnapshot(`
		.emotion-0 {
		  background: #fff;
		  border: 1px solid #999;
		  font-size: 34px;
		  font-weight: bold;
		  line-height: 34px;
		  height: 34px;
		  text-align: center;
		  width: 34px;
		  display: -webkit-inline-box;
		  display: -webkit-inline-flex;
		  display: -ms-inline-flexbox;
		  display: inline-flex;
		  outline: none;
		  margin-right: -1px;
		  margin-top: -1px;
		  padding: 0;
		  overflow: hidden;
		  border-color: gray;
		  background: black;
		}

		<button
		  className="emotion-0 emotion-1"
		  onClick={[Function]}
		/>
	`);
});

test('Cell renders status died correctly', () => {
	const onClick = jest.fn();
	expect(
		renderer
			.create(<Cell filled={false} x={1} y={2} onClick={onClick} />)
			.toJSON(),
	).toMatchInlineSnapshot(`
		.emotion-0 {
		  background: #fff;
		  border: 1px solid #999;
		  font-size: 34px;
		  font-weight: bold;
		  line-height: 34px;
		  height: 34px;
		  text-align: center;
		  width: 34px;
		  display: -webkit-inline-box;
		  display: -webkit-inline-flex;
		  display: -ms-inline-flexbox;
		  display: inline-flex;
		  outline: none;
		  margin-right: -1px;
		  margin-top: -1px;
		  padding: 0;
		  overflow: hidden;
		  border-color: gray;
		}

		<button
		  className="emotion-0 emotion-1"
		  onClick={[Function]}
		/>
	`);
});

test('Cell simulate clicked correctly', () => {
	const onClick = jest.fn();

	const wrapper = mount(
		<Cell filled={false} x={1} y={3} onClick={onClick} />,
	);
	wrapper.find('button').simulate('click');
	expect(onClick).toHaveBeenCalled();
});

test('Cell simulate clicked with x and y correctly', () => {
	const onClick = jest.fn();
	const x = 12,
		y = 10;

	const wrapper = mount(
		<Cell filled={false} x={x} y={y} onClick={onClick} />,
	);
	wrapper.find('button').simulate('click');
	expect(onClick).toHaveBeenCalledWith(x, y);
});
