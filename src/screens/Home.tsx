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

export const HomeView: React.FC<{}> = () => {
	return (
		<>
			<Header>
				Проект, разрабатываемый в процессе обучения на курсе `React.JS
				Developer` в `Отус онлайн-образование`.
			</Header>
			<Wrapper>
				<Container>
					<div>
						В процессе обучения были получены знания по основам
						разработки приложений с использованием библиотеки
						ReactJS
					</div>
					<div>Так же были получены знания по следующим темам:</div>
					<ul>
						<li>Основы TypeScript</li>
						<li>
							Применение в разработке библиотеки компонентов
							StoryBook
						</li>
						<li>Тестирование с использованием Jest</li>
						<li>Тестирование с использованием Loki</li>
						<li>Хранение State приложения в Redux</li>
						<li>Redux-saga для сайд-эффектов</li>
						<li>и многое другое...</li>
					</ul>
				</Container>
			</Wrapper>
		</>
	);
};

export const Home = AuthorizedCheck(HomeView);
