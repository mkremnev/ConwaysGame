import React from 'react';
import ReactDOM from 'react-dom';
import { GameOfLifeProto } from './components/Main/GameOfLifeProto';
import { Field } from './components/Field/Field';

ReactDOM.render(
	<GameOfLifeProto rows={20} columns={20} fieldComponent={Field} />,
	document.getElementById('app'),
);
