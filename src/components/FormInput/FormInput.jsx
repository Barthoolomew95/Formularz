import { useState } from 'react';
import { StyledInput } from './FormInput.styles';
const FormInput = ({ labelName, maxLength, onChange }) => {
	const [inputValue, setInputValue] = useState('');
	return (
		<StyledInput
			className='form-label__input'
			type='text'
			name={labelName}
			value={inputValue}
			maxLength={maxLength}
			onChange={e => {
				onChange(e);
				setInputValue(e.target.value);
			}}
		/>
	);
};

export default FormInput;
