import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border: 1px solid ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
	height: 150px;
	font-size: 30px;
	line-height: 150px;
`;

const DateTime = styled.p`
	font-size: 16px;
	text-align: right;
`;

const Time = styled.time`
	display: block;
`;

const Day = styled.span`
	display: block;
	margin-top: 8px;
`;

const TodoHead = ({ children }) => {
	return (
		<Header bgc={`#6e2e09`}>
			<Title>{children}</Title>
			<DateTime>
				<Time>2023년 08월 29일</Time>
				<Day>월요일</Day>
			</DateTime>
		</Header>
	);
};

export default TodoHead;
