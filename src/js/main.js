console.log('hello');
class Main {
	currentPlaces = [];
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
		const placeRockEvent = ['campground', 'ground'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeWaterEvent = ['fire_station', 'water'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeWaterEvent2 = ['aquarium', 'water'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeFairyEvent = ['beauty_salon', 'ground'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeFightingEvent = ['gym', 'fighting'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placePoisonEvent = ['bar', 'poison'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placePsychicEvent = ['university', 'psychic'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGrassEvent = ['park', 'grass'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGrassEvent2 = ['camp_ground', 'grass'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGrassEvent3 = ['florist', 'grass'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGroundEvent = ['camp_ground', 'ground'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeBugEvent = ['park', 'bug'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeBugEvent2 = ['florist', 'bug'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeFlyingEvent = ['airport', 'flying'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeSteelEvent = ['airport', 'steel'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGhostEvent = ['cemetery', 'ghost'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeDarkEvent = ['cemetery', 'dark'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeGhostEvent2 = ['funeral_home', 'ghost'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeDarkEvent2 = ['funeral_home', 'dark'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeDragonEvent = ['amusement_park', 'dragon'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeElectricEvent = ['electrician', 'electric'].forEach((type) =>
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: type,
					},
				})
			)
		);
		const placeElectricEvent2 = ['electronics_store', 'electric'].forEach(
			(type) =>
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: location,
							radius: 5000,
							type: type,
						},
					})
				)
		);
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
