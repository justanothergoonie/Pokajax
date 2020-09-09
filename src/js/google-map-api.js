class GoogleApi {
	constructor() {
		this.setupMap();
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('get-geocode', this.handleGetGeocode);
		bodyEl.addEventListener('get-places', this.handleGetPlaces);
	}
	setupMap() {
		var circusLatLng = { lat: 33.749, lng: -84.388 };
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: circusLatLng,
		});
	}
	geocode = (address) => {
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: address }, (results, status) => {
			if (status == 'OK') {
				console.log(results);
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
				// for (var i = 0; i < results.length; i++) {
				// 	createMarker(results[i]);
				// }
				const evt = new CustomEvent('got-places', { detail: results });
				document.querySelector('body').dispatchEvent(evt);
			} else {
				console.warn('google maps places status NOT OK', status);
			}
		});
	};

	handleGetPlaces = (event) => {
		this.searchPlaces(event.detail);
	};
}
function initMap() {
	new GoogleApi(document.getElementById('#map'));
}
