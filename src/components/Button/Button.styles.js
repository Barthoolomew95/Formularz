import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 50%;
	height: 50px;
	border-radius: 10px;
	align-self: center;
	margin-top: 20px;
	border: 1px solid ${props => props.theme.colors.dark};
	background-color: ${props => props.theme.colors.background};
	color: ${props => props.theme.colors.dark};
	font-size: 20px;
	transition: color 0.3s, background-color 0.3s;
	&:hover {
		border: 1px solid ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.background};
		background-color: ${props => props.theme.colors.dark};
	}
`;
