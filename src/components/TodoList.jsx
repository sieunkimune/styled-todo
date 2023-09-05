import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	width: calc(100% + 17px);
	height: 500px;
	background-color: #f3f37f;
`;

const TodoList = ({ todos, fnDel, fnChk }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<TodoItem todo={todo} fnDel={fnDel} fnChk={fnChk} key={todo.id} />
			))}
		</ListContainer>
	);
};

export default TodoList;
