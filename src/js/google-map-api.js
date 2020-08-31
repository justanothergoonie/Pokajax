class GoogleApi {
	constructor() {
		this.setupMap();
	}
	setupMap() {
		var circusLatLng = { lat: 33.749, lng: -84.388 };
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: circusLatLng,
		});
	}
}
function initMap() {
	new GoogleApi(document.getElementById('#map'));
}
