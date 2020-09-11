console.log('hello');
class Main {
	currentPlaces = [];
	currentPokemonType = '';
	currentPokemonName = '';
	currentPokemonImg = '';
	currentPokemonMove1 = '';
	currentPokemonMove2 = '';
	currentPokemonAttack = '';
	currentPokemonSpecialAttack = '';
	currentPokemonDefense = '';
	currentPokemonSpecialDefense = '';
	currentPokemonSpeed = '';
	currentPokemonHealth = '';
	currentPokemonAbility = '';
	radiusEl = document.querySelector('[name="radius"]');

	p = new Pokedex.Pokedex();
	constructor() {
		this.setupEventListeners();
	}
	setupEventListeners() {
		const buttonEl = document.querySelector('[name="add-pokemon"]');
		buttonEl.addEventListener('click', this.handleSearch);
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('got-geocode', this.handleGotGeocode);
		bodyEl.addEventListener('got-places', this.handleGotPlaces);
		bodyEl.addEventListener('got-weather', this.handleWeather);
		bodyEl.addEventListener('got-error', this.handleSearchError);
	}

	handleGotGeocode = (event) => {
		console.log('handleGotGeocode', this.currentLocation, event.detail);
		this.currentLocation = new google.maps.LatLng(
			event.detail.lat,
			event.detail.lng
		);
	};

	searchPlacesByType = () => {
		console.log('searchPlacesByType', this.currentPokemonType);
		let type = 'normal';
		if (
			this.currentPokemonType === 'grass' ||
			this.currentPokemonType === 'bug'
		) {
			const types = ['park', 'campground', 'florist'];
			const index = Math.floor(Math.random() * types.length);
			console.log(index);
			type = types[index];
		} else if (this.currentPokemonType === 'water') {
			const types = ['fire_station', 'aquarium'];
			const index = Math.floor(Math.random() * types.length);
			console.log(index);
			type = types[index];
		} else if (this.currentPokemonType === 'ground') {
			type = 'campground';
		} else if (this.currentPokemonType === 'electric') {
			const types = ['electrician', 'electronics_store'];
			const index = Math.floor(Math.random() * types.length);
			console.log(index);
			type = types[index];
		} else if (this.currentPokemonType === 'fairy') {
			type = 'beauty_salon';
		} else if (this.currentPokemonType === 'dragon') {
			type = 'amusement_park';
		} else if (
			this.currentPokemonType === 'dark' ||
			this.currentPokemonType === 'ghost'
		) {
			const types = ['funeral_home', 'cemetery'];
			const index = Math.floor(Math.random() * types.length);
			console.log(index);
			type = types[index];
		} else if (
			this.currentPokemonType === 'steel' ||
			this.currentPokemonType == 'flying'
		) {
			type = 'airport';
		} else if (this.currentPokemonType === 'psychic') {
			type = 'university';
		} else if (this.currentPokemonType === 'poison') {
			type = 'bar';
		} else if (this.currentPokemonType === 'fighting') {
			type = 'gym';
		}
		document.querySelector('body').dispatchEvent(
			new CustomEvent('get-places', {
				detail: {
					location: this.currentLocation,
					radius: this.radiusEl.value,
					type: type,
				},
			})
		);
	};
	handleGotPlaces = (event) => {
		this.currentPlaces = event.detail;
		console.log('handleGotPlaces', this.currentPlaces);
		const pokePlaces = this.currentPlaces.map((place) => {
			const pokeMarkerLocation = {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			};

			return {
				marker: pokeMarkerLocation,
				icon: this.currentPokemonImg,
				name: this.currentPokemonName,
				type: this.currentPokemonType,
				health: this.currentPokemonHealth,
				speed: this.currentPokemonSpeed,
				moves: this.moves,
				attack: this.currentPokemonAttack,
				specAttack: this.currentPokemonSpecialAttack,
				defense: this.currentPokemonDefense,
				specDefense: this.currentPokemonSpecialDefense,
				infoWindowContent: [
					this.currentPokemonType,
					this.currentPokemonHealth,
					this.currentPokemonSpeed,
					this.currentPokemonMoves,
					this.currentPokemonAttack,
					this.currentPokemonSpecialAttack,
					this.currentPokemonDefense,
					this.currentPokemonSpecialDefense,
				],
			};
		});
		const pokeEvent = new CustomEvent('place-markers', {
			detail: pokePlaces,
		});
		document.querySelector('body').dispatchEvent(pokeEvent);
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
			this.currentPokemonName = response.species.name;
			this.currentPokemonImg = response.sprites.front_default;
			var abilities = response.abilities;
			const abilityIndex = Math.floor(Math.random() * abilities.length);
			this.currentPokemonAbility = abilities[abilityIndex].ability.name;
			this.currentPokemonHealth = response.stats[0].base_stat;
			this.currentPokemonAttack = response.stats[1].base_stat;
			this.currentPokemonDefense = response.stats[2].base_stat;
			this.currentPokemonSpecialAttack = response.stats[3].base_stat;
			this.currentPokemonSpecialDefense = response.stats[4].base_stat;
			this.currentPokemonSpeed = response.stats[5].base_stat;
			this.moves = response.moves;
			// const movesIndex1 = Math.floor(Math.random() * moves.length);
			// const movesIndex2 = Math.floor(Math.random() * moves.length);
			// this.currentPokemonMove1 = moves[movesIndex1].move.name;
			// this.currentPokemonMove2 = moves[movesIndex2].move.name;
			console.log(
				response,
				this.currentPokemonName,
				this.currentPokemonType,
				this.currentPokemonAbility,
				this.currentPokemonHealth,
				this.currentPokemonAttack,
				this.currentPokemonDefense,
				this.currentPokemonSpecialAttack,
				this.currentPokemonSpecialDefense,
				this.currentPokemonSpeed,
				this.currentPokemonMoves
			);
			document.body.addEventListener(
				'got-geocode',
				() => {
					console.log('google got the city');
					this.searchPlacesByType();
				},
				{ once: true }
			);
			const evt = new CustomEvent('get-geocode', {
				detail: locationTerm,
			});
			document.querySelector('body').dispatchEvent(evt); // google replies with a got-geocode event on body
		});

		const api = new WeatherApi();
		api.weatherSearch(locationTerm);
	};
	handleSearchError = () => {
		if ((this.currentLocation = '')) {
			alert('you need a location');
		}
	};
	handleWeather = (event) => {
		const results = event.detail;
		console.log('showing results from map', results);
	};
}
new Main();
