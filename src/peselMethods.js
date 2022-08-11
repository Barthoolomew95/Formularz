//? informacje zawarte w komentarzach pochodzą ze strony:
//? https://obywatel.gov.pl/pl/dokumenty-i-dane-osobowe/czym-jest-numer-pesel


//Aby odróżnić od siebie numery PESEL z różnych stuleci, przyjęto specjalną metodę oznaczania miesiąca urodzenia.
//metoda przekształca oznaczony miesiąc w peselu na miesiąc 'normalny'
//przykład: miesiąc oznaczony liczbą 92 to grudzień w latach 1800-1899
//przykład2: miesiąc oznaczony liczbą 21 to styczeń w latach 2000-2099
const convertMonth = month => {
	let convertedMonth;
	switch (month[0]) {
		case '8':
		case '2':
		case '4':
			convertedMonth = '0' + month[1];
			break;
		case '9':
		case '3':
		case '5':
			convertedMonth = '1' + month[1];
			break;
		default:
			convertedMonth = month;
			break;
	}
	console.log(convertedMonth);
	return parseInt(convertedMonth) <= 12 ? convertedMonth : 'Pesel Jest błędny';
};
//zwraca dwie pierwsze cyfry z roku
// przykład: jeśli pierwsza cyfra miesiąca to 8 lub 9 to osoba urodziła się w okresie 1800-1899,
// w tym przypadku metoda zwróci '18'
const calculateYear = month => {
	let calculatedYear;
	switch (month[0]) {
		case '8':
		case '9':
			calculatedYear = 18;
			break;
		case '2':
		case '3':
			calculatedYear = 20;
			break;
		case '4':
		case '5':
			calculatedYear = 21;
			break;
		case '6':
		case '7':
			calculatedYear = 22;
			break;
		default:
			calculatedYear = 19;
			break;
	}
	return calculatedYear;
};

//metoda zwraca date urodzenia w formacie dd-mm-rrrr
export const calculateBirthDate = pesel => {
	const monthFromPesel = pesel.slice(2, 4);
	return pesel.slice(4, 6) + '-' + convertMonth(monthFromPesel) + '-' + calculateYear(monthFromPesel) + pesel.slice(0, 2);
};
export const isPeselValid = pesel => {
	if (pesel.length !== 11) {
		return false;
	}
	const wages = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let parr = pesel.split('');
	let result = 0;
	for (let i = 0; i < wages.length; i++) {
		if (wages[i] * parr[i] > 10) {
			let multiplyResult = (wages[i] * [parr[i]]).toString();
			result += parseInt(multiplyResult.split('')[1]);
		} else {
			result += parseInt(parr[i] * wages[i]);
		}
	}
	if (parseInt(pesel.split('')[pesel.length - 1]) === 10 - parseInt(result.toString().split('')[1])) {
		return true;
	} else {
		return false;
	}
};


