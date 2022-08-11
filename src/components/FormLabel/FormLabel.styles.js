import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
	text-align: left;
	font-size: 20px;
	color: ${props => props.theme.colors.dark};
	${props =>
		props.error &&
		css`
			color: ${props => props.theme.colors.red};
			font-size: 15px;
			flex-basis: 100%;
		`}
	${props =>
		props.right &&
		css`
			text-align: right;
			padding-right: 10px;
		`}
	${props =>
		props.center &&
		css`
		padding-top: 30px;
			text-align: center;
			font-size: 25px;
		`}
`;
