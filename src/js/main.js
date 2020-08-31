console.log('hello');
class Main {
	constructor() {
		this.setupEventListeners();
	}
	setupEventListeners() {
		const buttonEl = document.querySelector('[name="search"]');
		buttonEl.addEventListener('click', this.handleSearch);
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('got-results', this.handleResults);
		bodyEl.addEventListener('got-error', this.handleSearchError);
	}

	handleSearch = (event) => {
		event.preventDefault();

		const locationEl = document.querySelector('[name="location"]');
		const locationTerm = locationEl.value;

		console.log('searching..', locationTerm);
	};
}
