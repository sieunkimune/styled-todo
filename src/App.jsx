import React, { useRef, useState } from 'react';
import { createGlobalStyle, css, styled } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoBody from './components/TodoBody';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`
*{margin: 0;padding: 0;}
ul,ol,li{list-style:none;}
.sr-only{position: absolute;left:-9999px;}
button{cursor: pointer;}
body{font-size: 12px;}
`;

const TodoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
	border: 1px solid #ccc;
`;

const TodoPlus = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 48px;
	height: 48px;
	color: #fff;
	font-size: 32px;
	background-color: #b1260e;
	border: none;
	border-radius: 50px;
	transform: translate(-50%, 50%);
	transition: all 0.2s;

	${(props) =>
		props.active === 'true' &&
		css`
			background-color: #e73010;
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const initialData = [
	{ id: 1, title: '리액트 복습', done: false },
	{ id: 2, title: '마이카톡 만들기', done: false },
	{ id: 3, title: '요금제 변경', done: true },
];

const App = () => {
	const [todos, setTodos] = useState(initialData);
	const nextId = useRef(4);

	//데이터 추가함수
	const fnAdd = (plan) => {
		// alert(plan);

		setTodos((prevTodos) => {
			return [...prevTodos, { id: nextId.current, title: plan, done: false }];
		});
		nextId.current++;
	};

	//삭제함수
	const fnDel = (id) => {
		// alert('id =' + id);

		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크함수
	const fnChk = (id) => {
		// alert('id =' + id);
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done }));
		});
	};

	const [active, setActive] = useState('true');
	const $plan = useRef(null);

	return (
		<>
			<GlobalStyle />
			<TodoContainer>
				<TodoHead>오늘할일</TodoHead>
				<TodoBody>
					<TodoList todos={todos} fnDel={fnDel} fnChk={fnChk} />
					<TodoInsert fnAdd={fnAdd} active={active} $plan={$plan} />
				</TodoBody>
				<TodoPlus
					active={`${active}`}
					onClick={() => {
						setActive((prev) => !prev);
						$plan.current.focus();
					}}
				>
					+
				</TodoPlus>
			</TodoContainer>
		</>
	);
};

export default App;
