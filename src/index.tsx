import React from 'react';
import ReactDOM from 'react-dom';
import { GameOfLifeProto } from './lesson8/components/Main/GameOfLifeProto';
import { Field } from './lesson8/components/Field/Field';

ReactDOM.render(
	<GameOfLifeProto rows={5} columns={5} fieldComponent={Field} />,
	document.getElementById('app'),
);
