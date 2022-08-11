import { ThemeProvider } from 'styled-components';
import { isPeselValid, calculateBirthDate } from './peselMethods';
import './App.css';
import FormLabel from './components/FormLabel/FormLabel';
import FormInput from './components/FormInput/FormInput';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

import { useState, useEffect } from 'react';
import { ItemContainer, Form, theme } from './App.styles';

function App() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [pesel, setPesel] = useState('');
	const [peselError, setPeselError] = useState(null);
	const [birthDate, setBirthDate] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalText, setModalText] = useState('');

	useEffect(() => {
		setPeselError(null);
		setBirthDate(null);

		if (!isPeselValid(pesel)) {
			setPeselError('Nieprawidłowy Pesel');
		} else {
			setPeselError(null);
			setBirthDate(calculateBirthDate(pesel));
		}
	}, [pesel]);

	const onNameValueChange = event => {
		setName(event.target.value);
	};
	const onLastNameValueChange = event => {
		setLastName(event.target.value);
	};
	const onPeselValueChange = event => {
		setPesel(event.target.value);
	};
	const showModal = () => {
		getModalText();
		setIsModalVisible(true);
	};
	const hideModal = () => {
		setIsModalVisible(false);
	};
	const areFormInputsNotEmpty = () => {
		return name !== '' && lastName !== '' && pesel !== '' ? true : false;
	};
	const getModalText = () => {
		setModalText(areFormInputsNotEmpty() && isPeselValid(pesel) ? 'Sukces.' : `${areFormInputsNotEmpty() ? '' : 'Uzupełnij dane.'}  ${peselError != null ? peselError : ''}`);
	};
	return (
		<ThemeProvider theme={theme}>
			<Form
				className='App'
				onSubmit={e => {
					e.preventDefault();
					isPeselValid({ pesel });
				}}>
				<ItemContainer>
					<FormLabel labelText='Imię:' />
					<FormInput labelName='name' maxLength='20' onChange={onNameValueChange} />
				</ItemContainer>
				<ItemContainer>
					<FormLabel labelText='Nazwisko:' />
					<FormInput labelName='name' maxLength='30' onChange={onLastNameValueChange} />
				</ItemContainer>
				<ItemContainer>
					<FormLabel labelText='Pesel:' />
					<FormInput labelName='pesel' maxLength='11' onChange={onPeselValueChange} />
					{peselError != null ? <FormLabel labelText={peselError} isError onRight /> : null}
				</ItemContainer>
				<ItemContainer>
					<FormLabel labelText='Data urodzenia:' />
					<FormLabel labelText={birthDate} onRight />
				</ItemContainer>
				<Button text='Wyślij' onClick={showModal} />
				<Modal modalText={modalText} buttonText='ok' onClick={hideModal} isVisible={isModalVisible} />
			</Form>
		</ThemeProvider>
	);
}

export default App;
