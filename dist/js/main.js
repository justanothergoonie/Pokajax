"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('hello');

var Main = /*#__PURE__*/function () {
  function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    _defineProperty(this, "currentPlaces", []);

    _defineProperty(this, "currentPokemonType", '');

    _defineProperty(this, "p", new Pokedex.Pokedex());

    _defineProperty(this, "handleGotGeocode", function (event) {
      console.log('handleGotGeocode', _this.currentLocation, event.detail);
      _this.currentLocation = new google.maps.LatLng(event.detail.lat, event.detail.lng);
    });

    _defineProperty(this, "searchPlacesByType", function () {
      console.log('searchPlacesByType', _this.currentPokemonType);
      var type = 'normal';

      if (_this.currentPokemonType === 'grass' || _this.currentPokemonType === 'bug') {
        var types = ['park', 'campground', 'florist'];
        var index = Math.floor(Math.random() * types.length);
        console.log(index);
        type = types[index];
      } else if (_this.currentPokemonType === 'water') {
        var _types = ['fire_station', 'aquarium'];

        var _index = Math.floor(Math.random() * _types.length);

        console.log(_index);
        type = _types[_index];
      } else if (_this.currentPokemonType === 'ground') {
        type = 'campground';
      } else if (_this.currentPokemonType === 'electric') {
        var _types2 = ['electrician', 'electronics_store'];

        var _index2 = Math.floor(Math.random() * _types2.length);

        console.log(_index2);
        type = _types2[_index2];
      } else if (_this.currentPokemonType === 'fairy') {
        type = 'beauty_salon';
      } else if (_this.currentPokemonType === 'dragon') {
        type = 'amusement_park';
      } else if (_this.currentPokemonType === 'dark' || _this.currentPokemonType === 'ghost') {
        var _types3 = ['funeral_home', 'cemetery'];

        var _index3 = Math.floor(Math.random() * _types3.length);

        console.log(_index3);
        type = _types3[_index3];
      } else if (_this.currentPokemonType === 'steel' || _this.currentPokemonType == 'flying') {
        type = 'airport';
      } else if (_this.currentPokemonType === 'psychic') {
        type = 'university';
      } else if (_this.currentPokemonType === 'poison') {
        type = 'bar';
      } else if (_this.currentPokemonType === 'fighting') {
        type = 'gym';
      }
    });

    _defineProperty(this, "handleGotPlaces", function (event) {
      _this.currentPlaces = event.detail;
      console.log('handleGotPlaces', _this.currentPlaces);

      var pokePlaces = _this.currentPlaces.map(function (place) {
        var pokeMarkerLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        return {
          marker: pokeMarkerLocation,
          icon: null,
          infoWindowContent: null,
          name: null,
          type: null
        };
      });

      var pokeEvent = new CustomEvent('place-markers', {
        detail: pokePlaces
      });
      document.querySelector('body').dispatchEvent(pokeEvent);
    });

    _defineProperty(this, "handleSearch", function (event) {
      event.preventDefault();
      var locationEl = document.querySelector('[name="location"]');
      var locationTerm = locationEl.value;
      var pokemonEl = document.querySelector('[name="pokemon"]');
      var pokemonTerm = pokemonEl.value;
      console.log('searching..', locationTerm, pokemonTerm);

      _this.p.getPokemonByName(pokemonTerm.toLowerCase()).then(function (response) {
        _this.currentPokemonType = response.types[0].type.name;
        console.log(_this.currentPokemonType);
        document.body.addEventListener('got-geocode', function () {
          console.log('google got the city');

          _this.searchPlacesByType();
        }, {
          once: true
        });
        var evt = new CustomEvent('get-geocode', {
          detail: locationTerm
        });
        document.querySelector('body').dispatchEvent(evt); // google replies with a got-geocode event on body
      });

      var api = new WeatherApi();
      api.weatherSearch(locationTerm);
    });

    _defineProperty(this, "handleWeather", function (event) {
      var results = event.detail;
      console.log('showing results from map', results);
    });

    this.setupEventListeners();
  }

  _createClass(Main, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var buttonEl = document.querySelector('[name="search"]');
      buttonEl.addEventListener('click', this.handleSearch);
      var bodyEl = document.querySelector('body');
      bodyEl.addEventListener('got-geocode', this.handleGotGeocode);
      bodyEl.addEventListener('got-places', this.handleGotPlaces);
      bodyEl.addEventListener('got-weather', this.handleWeather);
      bodyEl.addEventListener('got-error', this.handleSearchError);
    }
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=main.js.map
