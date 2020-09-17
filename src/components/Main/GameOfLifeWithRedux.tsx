import React from 'react';
import styled from '@emotion/styled';
import { GameOfLifeState } from '@/rdx/reducer';
import { changeSpeed, gameRun } from '@/rdx/actions';
import { fieldActions } from '@/rdx/reducer/field';
import { Field } from '@/components/Field/Field';
import { connect } from 'react-redux';
import { InterfaceLayout } from './Interfaces/Interfaces';

const GameOfLifeProtoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;

function mapStateToProps(state: GameOfLifeState) {
	return {
		gameField: state.field,
		speed: state.speed,
		run: state.game,
	};
}

const mapDispatchToProps = {
	setCell: fieldActions.setCell,
	clearBoard: fieldActions.clearBoard,
	updateBoard: fieldActions.updateBoard,
	changeSpeed,
	gameRun,
	isGame: fieldActions.isGame,
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

	componentDidUpdate(prevProps: typeof mapDispatchToProps) {
		const isRunningGame = this.props.run.gameRun;
		const speed = this.props.speed.value;
		const gameStarted = !prevProps.gameRun && isRunningGame;
		const gameStopped = prevProps.gameRun && !isRunningGame;
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
						text: this.props.run.gameRun ? 'Остановить' : 'Начать',
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
						value: this.props.speed.value,
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
