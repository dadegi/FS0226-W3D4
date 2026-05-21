const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth();

const monthNames = [
	'Gennaio',
	'Febbraio',
	'Marzo',
	'Aprile',
	'Maggio',
	'Giugno',
	'Luglio',
	'Agosto',
	'Settembre',
	'Ottobre',
	'Novembre',
	'Dicembre',
];

const dayNames = [
	'Domenica',
	'Lunedì',
	'Martedì',
	'Mercoledì',
	'Giovedì',
	'Venerdì',
	'Sabato',
];

// Scriviamo il nome del mese
const printCurrentMonth = () => {
	const title = document.querySelector('h1');
	const currentMonth = monthNames[getMonth];
	title.textContent = currentMonth;
};

printCurrentMonth();

const dayInMonth = () => {
	const lastDay = new Date(getYear, getMonth + 1, 0); // Glistiamo chiedendo il giorno 0 del mese successivo, ad esempio, lo zero giugno 2026, che sarà il 31 maggio 2026
	const numberOfDays = lastDay.getDate();
	return numberOfDays;
};

// Creiamo la griglia
const createDays = (daysNumber) => {
	const calendarDiv = document.querySelector('#calendar');
	for (let i = 1; i <= daysNumber; i++) {
		const dayCellDiv = document.createElement('div');
		dayCellDiv.classList.add('day');
		// Le celle dovranno essere cliccabili - DAFARE

		// Creiamo il giorno
		const cellValue = document.createElement('h3');
		// Evidenziamo il giorno corrente
		if (i === now.getDate()) {
			dayCellDiv.classList.add('currentDay');
		}
		// Scriviamo le domeniche in rosso
		let thisDay = new Date(getYear, getMonth, i);
		if (thisDay.getDay === 0) {
			cellValue.classList.add('sunday');
		}

		// Scriviamo il nome del giorno
		let dayNumber = thisDay.getDay();
		let dayName = dayNames[dayNumber];
		cellValue.textContent = `${dayName} ${i}`;
		dayCellDiv.appendChild(cellValue);
		calendarDiv.appendChild(dayCellDiv);
	}
};

createDays(dayInMonth());
