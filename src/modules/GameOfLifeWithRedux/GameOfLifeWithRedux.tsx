import React from 'react';
import styled from '@emotion/styled';
import { GameOfLifeState } from '@/store';
import { Field } from '@/components/Field/Field';
import { connect } from 'react-redux';
import { InterfaceLayout } from '@/components/Controls/Interfaces';
import { actions } from './reducer';
import { RadioGroup } from '@/components/Interfaces/RadioGroup/RadioGroup';

const GameOfLifeProtoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;
const sizeList = [
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

function mapStateToProps(state: GameOfLifeState) {
	const { game, login } = state;
	return {
		gameField: game.board,
		speed: game.value,
		gameStatus: game.gameStatus,
		login: login,
	};
}

const mapDispatchToProps = {
	setCell: actions.setCell,
	clearBoard: actions.clearBoard,
	updateBoard: actions.updateBoard,
	changeSpeed: actions.changeSpeed,
	gameRun: actions.gameRun,
	isGame: actions.isGame,
	addCell: actions.addCell,
};

type GameOfLifeWithReduxProps = ReturnType<typeof mapStateToProps> &
	typeof mapDispatchToProps;

export class GameOfLife extends React.Component<GameOfLifeWithReduxProps, {}> {
	private timerID!: NodeJS.Timeout;

	onClick = (x: number, y: number) => {
		this.props.setCell({ x, y });
	};

	speedChange = (ev: React.FormEvent<HTMLInputElement>) => {
		this.props.changeSpeed((ev.target as HTMLInputElement).value);
	};

	sizeFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		this.props.addCell(JSON.parse((ev.target as HTMLInputElement).value));
	};

	componentDidUpdate(prevProps: ReturnType<typeof mapStateToProps>) {
		const isRunningGame = this.props.gameStatus;
		const speed = this.props.speed;
		const gameStarted = !prevProps.gameStatus && isRunningGame;
		const gameStopped = prevProps.gameStatus && !isRunningGame;
		if (isRunningGame || gameStopped) {
			clearInterval(this.timerID);
		}

		if (isRunningGame || gameStarted) {
			this.timerID = setInterval(() => {
				this.props.isGame();
			}, Number(speed));
		}
	}

	render() {
		return (
			<GameOfLifeProtoWrapper>
				<Field field={this.props.gameField} onClick={this.onClick} />
				<InterfaceLayout
					button1={{
						text: this.props.gameStatus ? 'Остановить' : 'Начать',
						onClick: this.props.gameRun,
					}}
					button2={{
						text: 'Очистить',
						onClick: this.props.clearBoard,
					}}
					button3={{
						text: 'Обновить',
						onClick: this.props.updateBoard,
					}}
					input={{
						onChange: this.speedChange,
						value: this.props.speed,
						name: 'speed',
						type: 'range',
						min: '50',
						max: '1000',
						step: '50',
					}}
				/>
				<RadioGroup
					options={sizeList}
					label="Размер поля"
					onChange={this.sizeFieldChange}
					checked={true}
				/>
			</GameOfLifeProtoWrapper>
		);
	}
}

export const GameOfLifeWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps,
)(GameOfLife);
