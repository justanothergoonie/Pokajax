"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleApi = /*#__PURE__*/function () {
  function GoogleApi() {
    var _this = this;

    _classCallCheck(this, GoogleApi);

    _defineProperty(this, "markers", []);

    _defineProperty(this, "mainInfoWindow", null);

    _defineProperty(this, "geocode", function (address) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status == 'OK') {
          console.log(results);

          _this.map.setCenter(results[0].geometry.location);

          var event = new CustomEvent('got-geocode', {
            detail: {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
          });
          document.querySelector('body').dispatchEvent(event);
        }
      });
    });

    _defineProperty(this, "handleGetGeocode", function (event) {
      _this.geocode(event.detail);
    });

    _defineProperty(this, "searchPlaces", function (request) {
      var service = new google.maps.places.PlacesService(_this.map);
      service.nearbySearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var evt = new CustomEvent('got-places', {
            detail: results
          });
          document.querySelector('body').dispatchEvent(evt);
        } else {
          console.warn('google maps places status NOT OK', status);
          alert("We're Sorry Theres Currently No Pokemon By That Name Near You, Try A Larger Radius Or A Different Pokemon ");
        }
      });
    });

    _defineProperty(this, "handleGetPlaces", function (event) {
      _this.searchPlaces(event.detail);
    });

    _defineProperty(this, "handlePlaceMarkers", function (event) {
      var results = event.detail;
      console.log('hello', event.detail);
      results.forEach(function (poke) {
        // const pokeMark = results[poke];
        var pokeMarker = new google.maps.Marker({
          position: poke.marker,
          map: _this.map,
          title: poke.name,
          icon: poke.icon,
          animation: google.maps.Animation.DROP,
          contentString: poke.infoWindowContent
        });
        var moves = poke.moves;
        var movesIndex1 = Math.floor(Math.random() * moves.length);
        var movesIndex2 = Math.floor(Math.random() * moves.length);
        var move1 = moves[movesIndex1].move.name;
        var move2 = moves[movesIndex2].move.name;
        var contentString = '<div class=card>' + '<div class=card-header> ' + '<h1 class=pokemon-name>' + 'Name ' + poke.name + '</h1>' + '<span class=pokemon-health>' + poke.health + ' HP' + '</span>' + '</div>' + '<br/>' + '<div class=move-container>' + '<span class=move-one>' + 'Attack 1: ' + move1 + '</span>' + '<span class=move-two>' + 'Attack 2: ' + move2 + '</span>' + '</div>' + '<br/>' + '<div class= stats-container>' + '<div class= attack-container>' + '<span class= normal-attack>' + 'Atk: ' + poke.attack + '</span>' + '<span class= spec-attack>' + 'Spec-Atk: ' + poke.specAttack + '</span>' + '</div>' + '<br/>' + '<div class=defense-container>' + '<span class=normal-defense>' + 'Def: ' + poke.defense + '</span>' + '<span class=special-defense>' + 'Spec-Def: ' + poke.specDefense + '</span>' + '</div>' + '</div>' + '</div>';
        pokeMarker.addListener('click', function () {
          _this.mainInfoWindow.setContent(contentString);

          _this.mainInfoWindow.open(_this.map, pokeMarker);
        });

        _this.markers.push(pokeMarker);
      });
    });

    _defineProperty(this, "clearMap", function () {
      _this.markers.forEach(function (marker) {
        marker.setMap(null);
      });

      _this.markers = [];
      _this.bounds = new google.maps.LatLngBounds();
    });

    this.setupMap();
    var buttonEl = document.querySelector('[name="clear"]');
    buttonEl.addEventListener('click', this.clearMap);
    var bodyEl = document.querySelector('body');
    bodyEl.addEventListener('get-geocode', this.handleGetGeocode);
    bodyEl.addEventListener('get-places', this.handleGetPlaces);
    bodyEl.addEventListener('place-markers', this.handlePlaceMarkers);
  }

  _createClass(GoogleApi, [{
    key: "setupMap",
    value: function setupMap() {
      var circusLatLng = {
        lat: 33.749,
        lng: -84.388
      };
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: circusLatLng
      });
      this.mainInfoWindow = new google.maps.InfoWindow({
        maxWidth: 1000
      });
    }
  }]);

  return GoogleApi;
}();

function initMap() {
  new GoogleApi(document.getElementById('#map'));
}
//# sourceMappingURL=google-map-api.js.map
