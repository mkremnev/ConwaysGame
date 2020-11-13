import React from 'react';
import { AuthorizedCheck } from '@/common/AuthorizedCheck';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Header = styled.h3`
	text-align: center;
`;

export const RulesView: React.FC<{}> = () => {
	return (
		<>
			<Header>Правила игры:</Header>
			<Wrapper>
				<Container>
					<p>
						Игра «Жизнь» (Game of Life) впервые была разработана
						английским математиком Джоном Конвеем ещё в 1970 году.
						Суть игры заключается в симуляции жизни клеток, которые
						живут и рождаются по определённым, крайне простым
						правилам.
					</p>
					<p>
						Игра происходит пошагово. Каждый шаг (момент времени или
						кадр) решается какие клетки вымрут, а какие родятся.
					</p>
					<p>
						Как уже можно было догадаться - клетки не вечны, это
						«жизнь». Следовательно от сюда и выходит главный
						параметр клетки:
						<b> клетка может быть либо живой, либо мёртвой.</b>
					</p>
					<p>
						Вот и вся суть жизни клетки в этой игре, но эта жизнь
						подвержена 4 простым правилам, которые и будут
						определять жить ей или нет:
					</p>
					<img src="convay.jpg" alt="Правила игры" />
					<p>Вот и все правила игры!</p>
				</Container>
			</Wrapper>
		</>
	);
};

export const Rules = AuthorizedCheck(RulesView);
