import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 600px;
	background-color: #e2988b;
	border: 1px solid #6e2e09;
	box-sizing: border-box;
`;

const TodoBody = ({ children }) => {
	return <Section>{children}</Section>;
};

export default TodoBody;
