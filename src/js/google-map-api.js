class GoogleApi {
	markers = [];
	mainInfoWindow = null;
	constructor() {
		this.setupMap();
		const buttonEl = document.querySelector('[name="clear"]');
		buttonEl.addEventListener('click', this.clearMap);
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('get-geocode', this.handleGetGeocode);
		bodyEl.addEventListener('get-places', this.handleGetPlaces);
		bodyEl.addEventListener('place-markers', this.handlePlaceMarkers);
	}
	setupMap() {
		var circusLatLng = { lat: 33.749, lng: -84.388 };
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: circusLatLng,
		});
		this.mainInfoWindow = new google.maps.InfoWindow({
			maxWidth: 1000,
		});
	}
	geocode = (address) => {
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: address }, (results, status) => {
			if (status == 'OK') {
				// console.log(results);
				this.map.setCenter(results[0].geometry.location);
				const event = new CustomEvent('got-geocode', {
					detail: {
						lat: results[0].geometry.location.lat(),
						lng: results[0].geometry.location.lng(),
					},
				});
				document.querySelector('body').dispatchEvent(event);
			}
		});
	};
	handleGetGeocode = (event) => {
		this.geocode(event.detail);
	};

	searchPlaces = (request) => {
		var service = new google.maps.places.PlacesService(this.map);
		service.nearbySearch(request, (results, status) => {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				const evt = new CustomEvent('got-places', { detail: results });
				document.querySelector('body').dispatchEvent(evt);
			} else {
				console.warn('google maps places status NOT OK', status);
				alert(
					"We're Sorry Theres Currently No Pokemon By That Name Near You, Try A Larger Radius Or A Different Pokemon "
				);
			}
		});
	};

	handleGetPlaces = (event) => {
		this.searchPlaces(event.detail);
	};

	handlePlaceMarkers = (event) => {
		const results = event.detail;
		console.log('hello', event.detail);
		results.forEach((poke) => {
			// const pokeMark = results[poke];
			var pokeMarker = new google.maps.Marker({
				position: poke.marker,
				map: this.map,
				title: poke.name,
				icon: poke.icon,
				animation: google.maps.Animation.DROP,
				contentString: poke.infoWindowContent,
			});
			const moves = poke.moves;
			const movesIndex1 = Math.floor(Math.random() * moves.length);
			const movesIndex2 = Math.floor(Math.random() * moves.length);
			const move1 = moves[movesIndex1].move.name;
			const move2 = moves[movesIndex2].move.name;
			var contentString =
				'<div class= info-window>' +
				'<div class= card-header> ' +
				'<h1 class=pokemon-name>' +
				'Name: ' +
				poke.name +
				'</h1>' +
				'<span class=pokemon-health>' +
				poke.health +
				' HP' +
				'</span>' +
				'</div>' +
				'<br/>' +
				'<div class=move-container>' +
				'<span class=move-one>' +
				'Attack 1: ' +
				move1 +
				'</span>' +
				'<span class=move-two>' +
				'Attack 2: ' +
				move2 +
				'</span>' +
				'</div>' +
				'<br/>' +
				'<div class= stats-container>' +
				'<div class= attack-container>' +
				'<span class= normal-attack>' +
				'Atk: ' +
				poke.attack +
				'</span>' +
				'<span class= spec-attack>' +
				'Spec-Atk: ' +
				poke.specAttack +
				'</span>' +
				'</div>' +
				'<br/>' +
				'<div class=defense-container>' +
				'<span class=normal-defense>' +
				'Def: ' +
				poke.defense +
				'</span>' +
				'<span class=special-defense>' +
				'Spec-Def: ' +
				poke.specDefense +
				'</span>' +
				'</div>' +
				'</div>' +
				'</div>';

			pokeMarker.addListener('click', () => {
				this.mainInfoWindow.setContent(contentString);
				this.mainInfoWindow.open(this.map, pokeMarker);
			});
			this.markers.push(pokeMarker);
		});
	};
	clearMap = () => {
		this.markers.forEach((marker) => {
			marker.setMap(null);
		});
		this.markers = [];
		this.bounds = new google.maps.LatLngBounds();
	};
}
function initMap() {
	new GoogleApi(document.getElementById('#map'));
}
