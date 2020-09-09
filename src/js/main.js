console.log('hello');
class Main {
	currentPlaces = [];
	currentPokemonType = '';
	p = new Pokedex.Pokedex();
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
		console.log('handleGotGeocode', this.currentLocation);
		this.currentLocation = new google.maps.LatLng(
			event.detail.lat,
			event.detail.lng
		);
	};

	searchPlacesByType = () => {
		console.log('searchPlacesByType', this.currentPokemonType);

		if (this.currentPokemonType === 'grass') {
			['park', 'campground', 'florist'].forEach((type) => {
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: this.currentLocation,
							radius: 5000,
							type: type,
						},
					})
				);
			});
		} else if (this.currentPokemonType === 'water') {
			['fire_station', 'aquarium'].forEach((type) =>
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: this.currentLocation,
							radius: 5000,
							type: type,
						},
					})
				)
			);
		} else if (this.currentPokemonType === 'ground') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'campground',
					},
				})
			);
		} else if (this.currentPokemonType === 'electric') {
			['electrician', 'electronics_store'].forEach((type) => {
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: location,
							radius: 5000,
							type: type,
						},
					})
				);
			});
		} else if (this.currentPokemonType === 'fairy') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'beauty_salon',
					},
				})
			);
		} else if (this.currentPokemonType === 'bug') {
			['park', 'campground', 'florist'].forEach((type) =>
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: this.currentLocation,
							radius: 5000,
							type: type,
						},
					})
				)
			);
		} else if (this.currentPokemonType === 'dragon') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'amusement_park',
					},
				})
			);
		} else if (this.currentPokemonType === 'ghost') {
			['funeral_home', 'cemetery'].forEach((type) => {
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: location,
							radius: 5000,
							type: type,
						},
					})
				);
			});
		} else if (this.currentPokemonType === 'dark') {
			['funeral_home', 'cemetery'].forEach((type) => {
				document.querySelector('body').dispatchEvent(
					new CustomEvent('get-places', {
						detail: {
							location: location,
							radius: 5000,
							type: type,
						},
					})
				);
			});
		} else if (this.currentPokemonType === 'steel') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'airport',
					},
				})
			);
		} else if (this.currentPokemonType === 'flying') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'airport',
					},
				})
			);
		} else if (this.currentPokemonType === 'psychic') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'university',
					},
				})
			);
		} else if (this.currentPokemonType === 'poison') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'bar',
					},
				})
			);
		} else if (this.currentPokemonType === 'fighting') {
			document.querySelector('body').dispatchEvent(
				new CustomEvent('get-places', {
					detail: {
						location: location,
						radius: 5000,
						type: 'gym',
					},
				})
			);
		}
	};

	handleGotPlaces = (event) => {
		this.currentPlaces = event.detail;
		console.log('handleGotPlaces', this.currentPlaces);
	};

	handleSearch = (event) => {
		event.preventDefault();

		const locationEl = document.querySelector('[name="location"]');
		const locationTerm = locationEl.value;

		const pokemonEl = document.querySelector('[name="pokemon"]');
		const pokemonTerm = pokemonEl.value;

		console.log('searching..', locationTerm, pokemonTerm);

		this.p.getPokemonByName(pokemonTerm.toLowerCase()).then((response) => {
			this.currentPokemonType = response.types[0].type.name;
			console.log(this.currentPokemonType);

			const evt = new CustomEvent('get-geocode', {
				detail: locationTerm,
			});
			document.querySelector('body').dispatchEvent(evt); // google replies with a got-geocode event on body
			document.body.addEventListener(
				'got-geocode',
				() => {
					console.log('google got the city');
					this.searchPlacesByType();
				},
				{ once: true }
			);
		});

		const api = new WeatherApi();
		api.weatherSearch(locationTerm);
	};
}
new Main();
