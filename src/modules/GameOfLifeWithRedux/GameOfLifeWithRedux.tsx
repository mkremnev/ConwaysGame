import React from 'react';
import styled from '@emotion/styled';
import { GameOfLifeState } from '@/store';
import { Field } from '@/components/Field/Field';
import { connect } from 'react-redux';
import { InterfaceLayout } from '@/components/Controls/Interfaces';
import { actions } from './reducer';

const GameOfLifeProtoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;

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
};

type GameOfLifeWithReduxProps = ReturnType<typeof mapStateToProps> &
	typeof mapDispatchToProps;

export class GameOfLife extends React.Component<GameOfLifeWithReduxProps, {}> {
	private timerID!: NodeJS.Timeout;

	onClick = (x: number, y: number) => {
		this.props.setCell({ x, y });
	};

	speedChange = (ev: React.ChangeEvent) => {
		this.props.changeSpeed((ev.target as HTMLInputElement).value);
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
			}, +speed);
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
			</GameOfLifeProtoWrapper>
		);
	}
}

export const GameOfLifeWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps,
)(GameOfLife);
