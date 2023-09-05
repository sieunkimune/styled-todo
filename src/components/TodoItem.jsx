import React from 'react';
import { css, styled } from 'styled-components';

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #707070;

	&:hover {
		background-color: #f2f3b7;
		cursor: pointer;
	}
`;

const Title = styled.h2`
	flex: 1 1 0;
	order: 200;
	text-indent: 20px;

	${(props) =>
		props.done === 'true' &&
		css`
			text-decoration: line-through;
		`}
`;

const Input = styled.input`
	order: 100;
`;

const Button = styled.button`
	order: 300;
	padding: 5px 8px;
`;

const TodoItem = ({ todo, fnDel, fnChk }) => {
	const { id, title, done } = todo;

	return (
		<Item>
			<Title
				// done={done ? 'true' : 'false'}
				done={`${done}`}
				onClick={() => {
					fnChk(id);
				}}
			>
				{title}
			</Title>
			<Input
				type="checkbox"
				checked={done}
				onChange={() => {
					fnChk(id);
				}}
			/>
			<Button
				onClick={() => {
					fnDel(id);
				}}
			>
				삭제
			</Button>
		</Item>
	);
};

export default TodoItem;
