import React from 'react';
import { StyledModal } from './Modal.styled';
import FormLabel from '../FormLabel/FormLabel';
import Button from '../Button/Button';

const Modal = ({ modalText, buttonText, onClick, isVisible }) => {
	return (
		<StyledModal visible={isVisible}>
			<FormLabel labelText={modalText} onCenter isError={modalText !== 'Sukces.' ? true : false} />
			<Button text={buttonText} onClick={onClick} />
		</StyledModal>
	);
};

export default Modal;
