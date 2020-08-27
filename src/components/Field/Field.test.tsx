import React from 'react';
import { mount } from 'enzyme';
import { Field } from './Field';
import serializer from 'jest-emotion';
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

expect.addSnapshotSerializer(serializer);

const inputDiedCell = Array.from<boolean[]>({ length: 10 }).fill(
	Array.from<boolean>({ length: 10 }).fill(false),
);

const inputAliveCell = Array.from<boolean[]>({ length: 10 }).fill(
	Array.from<boolean>({ length: 10 }).fill(true),
);

test('Cell renders status died correctly', () => {
	const onClick = jest.fn();
	expect(
		renderer
			.create(<Field field={inputDiedCell} onClick={onClick} />)
			.toJSON(),
	).toMatchInlineSnapshot(`
		.emotion-218 {
		  margin: 0;
		  padding: 0;
		  line-height: 0;
		}

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

		.emotion-20 {
		  margin: 0;
		  padding: 0;
		  line-height: 0;
		}

		<div
		  className="emotion-218 emotion-219"
		>
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		</div>
	`);
});

test('Cell renders status allive correctly', () => {
	const onClick = jest.fn();
	expect(
		renderer
			.create(<Field field={inputAliveCell} onClick={onClick} />)
			.toJSON(),
	).toMatchInlineSnapshot(`
		.emotion-218 {
		  margin: 0;
		  padding: 0;
		  line-height: 0;
		}

		.emotion-20 {
		  margin: 0;
		  padding: 0;
		  line-height: 0;
		}

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

		<div
		  className="emotion-218 emotion-219"
		>
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <p
		    className="emotion-20 emotion-21"
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		  <button
		    className="emotion-0 emotion-1"
		    onClick={[Function]}
		  />
		</div>
	`);
});

test('Calls event click on onClick Cell', () => {
	const onClick = jest.fn();
	const wrapper = mount(<Field field={inputDiedCell} onClick={onClick} />);
	wrapper.find('button').first().simulate('click');
	expect(onClick).toHaveBeenCalled();
});
