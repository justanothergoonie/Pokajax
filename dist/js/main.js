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
      console.log('handleGotGeocode', _this.currentLocation);
      _this.currentLocation = new google.maps.LatLng(event.detail.lat, event.detail.lng);
    });

    _defineProperty(this, "searchPlacesByType", function () {
      console.log('searchPlacesByType', _this.currentPokemonType);

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
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'campground'
          }
        }));
      } else if (_this.currentPokemonType === 'electric') {
        ['electrician', 'electronics_store'].forEach(function (type) {
          document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: location,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'fairy') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
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
            location: location,
            radius: 5000,
            type: 'amusement_park'
          }
        }));
      } else if (_this.currentPokemonType === 'ghost') {
        ['funeral_home', 'cemetery'].forEach(function (type) {
          document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: location,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'dark') {
        ['funeral_home', 'cemetery'].forEach(function (type) {
          document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
            detail: {
              location: location,
              radius: 5000,
              type: type
            }
          }));
        });
      } else if (_this.currentPokemonType === 'steel') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'airport'
          }
        }));
      } else if (_this.currentPokemonType === 'flying') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'airport'
          }
        }));
      } else if (_this.currentPokemonType === 'psychic') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'university'
          }
        }));
      } else if (_this.currentPokemonType === 'poison') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'bar'
          }
        }));
      } else if (_this.currentPokemonType === 'fighting') {
        document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: 'gym'
          }
        }));
      }
    });

    _defineProperty(this, "handleGotPlaces", function (event) {
      _this.currentPlaces = event.detail;
      console.log('handleGotPlaces', _this.currentPlaces);
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
        var evt = new CustomEvent('get-geocode', {
          detail: locationTerm
        });
        document.querySelector('body').dispatchEvent(evt); // google replies with a got-geocode event on body

        document.body.addEventListener('got-geocode', function () {
          console.log('google got the city');

          _this.searchPlacesByType();
        }, {
          once: true
        });
      });

      var api = new WeatherApi();
      api.weatherSearch(locationTerm);
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
      bodyEl.addEventListener('got-results', this.handleResults);
      bodyEl.addEventListener('got-error', this.handleSearchError);
    }
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=main.js.map
