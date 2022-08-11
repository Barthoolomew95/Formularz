import styled, { css } from 'styled-components';
export const StyledModal = styled.div`
	margin: 0 auto;
	position: absolute;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	padding: 20px 40px;
	gap: 20px;
	top: -700px;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 280px;
	height: 200px;
	background-color: ${props => props.theme.colors.background};
	border-radius: 20px;
	border: 1px solid ${props => props.theme.colors.dark};
	box-shadow: 3px 5px 5px ${props => props.theme.colors.dark};
	transition: all 0.4s;
	${props =>
		props.visible &&
		css`
			top: 50%;
			display: flex;
		`};
`;
