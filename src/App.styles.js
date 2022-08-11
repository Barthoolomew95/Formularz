import styled from 'styled-components';
export const theme = {
	colors: {
		background: '#F8F8F8',
		dark: '#504746',
		light: '#F5F5F5',
		red: '#F45B69',
		green: '#6CAE75',
	},
};
export const ItemContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
`;
export const Form = styled.div`
	position: relative;
	margin: 200px auto;
	padding: 50px 25px;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 450px;
	background-color: ${theme.colors.light};
	border-radius: 20px;
	border: 1px solid ${props => props.theme.colors.dark};
	box-shadow: 3px 5px 5px ${theme.colors.dark};
	@media (max-width: 378px) {
		width: 310px;
	}
`;
