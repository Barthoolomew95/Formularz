import { StyledLabel } from './FormLabel.styles';

const FormLabel = ({ labelText, isError, onRight, onCenter }) => {
	return (
		<StyledLabel error={isError} right={onRight} center={onCenter}>
			{labelText}
		</StyledLabel>
	);
};

export default FormLabel;
