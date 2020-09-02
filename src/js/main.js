console.log('hello');
class Main {
	constructor() {
		this.setupEventListeners();
	}
	setupEventListeners() {
		const buttonEl = document.querySelector('[name="search"]');
		buttonEl.addEventListener('click', this.handleSearch);
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('got-geocode', this.handleGotGeocode);
		bodyEl.addEventListener('got-places', this.handleGotPlaces);
		bodyEl.addEventListener('got-results', this.handleResults);
		bodyEl.addEventListener('got-error', this.handleSearchError);
	}

	handleGotGeocode = (event) => {
		this.currentLocation = event.detail;
		console.log(this.currentLocation);
		var location = new google.maps.LatLng(
			this.currentLocation.lat,
			this.currentLocation.lng
		);
		const placeEvent = new CustomEvent('get-places', {
			detail: { location: location, radius: 5000 },
		});
		document.querySelector('body').dispatchEvent(placeEvent);
	};

	handleGotPlaces = (event) => {
		this.currentPlaces = event.detail;
		console.log(this.currentPlaces);
	};

	handleSearch = (event) => {
		event.preventDefault();

		const locationEl = document.querySelector('[name="location"]');
		const locationTerm = locationEl.value;

		console.log('searching..', locationTerm);
		const evt = new CustomEvent('get-geocode', { detail: locationTerm });
		document.querySelector('body').dispatchEvent(evt);
	};
}
new Main();
