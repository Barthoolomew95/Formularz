import styled from 'styled-components';

export const StyledInput = styled.input`
	width: 170px;
	font-size: 16px;
	border-radius: 5px;
	background-color: transparent;
	border: 1px solid ${props => props.theme.colors.dark};
	padding: 5px 10px;
`;
