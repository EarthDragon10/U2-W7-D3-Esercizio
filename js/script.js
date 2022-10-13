let filmArchive = [
	{
		id: 1,
		title: "Carpe Diem",
		"movie-director": "Peter Weir",
		"production-house": "Touchstone Pictures",
		actor: "Robin Williams",
		year: 1989,
	},
	{
		id: 2,
		title: "Batman Begins",
		"movie-director": "Christopher Nolan",
		"production-house": "TWarner Bros",
		actor: "Christian Bale",
		year: 2005,
	},
	{
		id: 3,
		title: "Pulp Fiction",
		"movie-director": "Quentin Tarantino",
		"production-house": "Miramax Films",
		actor: "John Travolta",
		year: 1994,
	},
	{
		id: 4,
		title: "Donnie Darko",
		"movie-director": "Richard Kelly",
		"production-house": "Pandora Cinema",
		actor: "Jake Gyllenhaal",
		year: 2001,
	},
];

let filmArchiveJSON = JSON.stringify(filmArchive);
window.localStorage.setItem("film-archive", filmArchiveJSON);

// Creare un contatore che tiene conto del tempo che passa. Aggiornando la pagina il valore
// prosegue, chiudendo la pagina il contatore ricomincia

const startTimer = () => {
	let seconds = 0;
	let minutes = 0;
	let hours = 0;

	setInterval(() => {
		seconds++;

		if (seconds === 60) {
			seconds = 0;
		}

		// secondsDisplay.innerHTML = `${seconds} secondi`;
		window.sessionStorage.setItem("seconds", seconds);
		displayTimer();
	}, 1000);

	setInterval(() => {
		minutes++;

		if (minutes === 60) {
			minutes = 0;
		}

		// minutesDisplay.innerHTML = `${minutes} minuti`;
		window.sessionStorage.setItem("minutes", minutes);
		displayTimer();
	}, 60000);

	setInterval(() => {
		hours++;

		if (hours === 24) {
			hours = 0;
		}

		// hoursDisplay.innerHTML = `${hours} ore`;
		window.sessionStorage.setItem("hours", hours);
		displayTimer();
	}, 3600000);
};

const displayTimer = () => {
	let hoursDisplay = document.querySelector("#hours");
	let minutesDisplay = document.querySelector("#minutes");
	let secondsDisplay = document.querySelector("#seconds");

	// Suggerimento di Lidia: prova a scrivere una logica per cui se c'e' qualcosa dentro il localstorage,
	// il tempo viene dal localstorage, altrimenti parte da 0

	let getSecondsSessionStorage = Number(
		window.sessionStorage.getItem("seconds")
	);
	let getMinutesSessionStorage = Number(
		window.sessionStorage.getItem("minutes")
	);
	let getHoursSessionStorage = Number(window.sessionStorage.getItem("hours"));

	secondsDisplay.innerHTML = `${getSecondsSessionStorage} secondi`;

	minutesDisplay.innerHTML = `${getMinutesSessionStorage} minutes`;

	hoursDisplay.innerHTML = `${getHoursSessionStorage} ore`;
};

// setInterval(() => displayTimer(), 1000);
// displayTimer();
