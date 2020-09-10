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
      var type = 'normal'; // 	if (
      // 		this.currentPokemonType === 'grass' ||
      // 		this.currentPokemonType === 'bug'
      // 	) {
      // 		const types = ['park', 'campground', 'florist'];
      // 		const index = Math.floor(Math.random() * types.length);
      // 		console.log(index);
      // 		type = types[index];
      // 	} else if (this.currentPokemonType === 'water') {
      // 		const types = ['fire_station', 'aquarium'];
      // 		const index = Math.floor(Math.random() * types.length);
      // 		console.log(index);
      // 		type = types[index];
      // 	} else if (this.currentPokemonType === 'ground') {
      // 		type = 'campground';
      // 	} else if (this.currentPokemonType === 'electric') {
      // 		const types = ['electrician', 'electronics_store'];
      // 		const index = Math.floor(Math.random() * types.length);
      // 		console.log(index);
      // 		type = types[index];
      // 	} else if (this.currentPokemonType === 'fairy') {
      // 		type = 'beauty_salon';
      // 	} else if (this.currentPokemonType === 'dragon') {
      // 		type = 'amusement_park';
      // 	} else if (
      // 		this.currentPokemonType === 'dark' ||
      // 		this.currentPokemonType === 'ghost'
      // 	) {
      // 		const types = ['funeral_home', 'cemetery'];
      // 		const index = Math.floor(Math.random() * types.length);
      // 		console.log(index);
      // 		type = types[index];
      // 	} else if (
      // 		this.currentPokemonType === 'steel' ||
      // 		this.currentPokemonType == 'flying'
      // 	) {
      // 		type = 'airport';
      // 	} else if (this.currentPokemonType === 'psychic') {
      // 		type = 'university';
      // 	} else if (this.currentPokemonType === 'poison') {
      // 		type = 'bar';
      // 	} else if (this.currentPokemonType === 'fighting') {
      // 		type = 'gym';
      // 	}
      // };

      if (_this.currentPokemonType === 'grass') {
        ['park', 'campground', 'florist'].forEach(function (type) {
          document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: _this.currentLocation,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'water') {
        ['fire_station', 'aquarium'].forEach(function (type) {
          return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: _this.currentLocation,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'ground') {
        type = 'campground';
      } else if (_this.currentPokemonType === 'electric') {
        ['electrician', 'electronics_store'].forEach(function (type) {
          document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: _this.currentLocation,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'fairy') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'beauty_salon'
          }
        }));
      } else if (_this.currentPokemonType === 'bug') {
        ['park', 'campground', 'florist'].forEach(function (type) {
          return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: _this.currentLocation,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'dragon') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'amusement_park'
          }
        }));
      } else if (_this.currentPokemonType === 'dark' || _this.currentPokemonType === 'ghost') {
        var types = ['funeral_home', 'cemetery'];
        var index = Math.floor(Math.random() * types.length);
        console.log(index);
        type = types[index];
      } else if (_this.currentPokemonType === 'steel') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'airport'
          }
        }));
      } else if (_this.currentPokemonType === 'flying') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'airport'
          }
        }));
      } else if (_this.currentPokemonType === 'psychic') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'university'
          }
        }));
      } else if (_this.currentPokemonType === 'poison') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'bar'
          }
        }));
      } else if (_this.currentPokemonType === 'fighting') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: _this.currentLocation,
            radius: 5000,
            type: 'gym'
          }
        }));
      }

      document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
        detail: {
          location: _this.currentLocation,
          radius: 5000,
          type: type
        }
      }));
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
