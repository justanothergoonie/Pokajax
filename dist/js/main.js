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

    _defineProperty(this, "handleGotGeocode", function (event) {
      _this.currentLocation = event.detail;
      console.log(_this.currentLocation);
      var location = new google.maps.LatLng(_this.currentLocation.lat, _this.currentLocation.lng);
      var placeRockEvent = ['campground', 'ground'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeWaterEvent = ['fire_station', 'water'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeWaterEvent2 = ['aquarium', 'water'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeFairyEvent = ['beauty_salon', 'ground'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeFightingEvent = ['gym', 'fighting'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placePoisonEvent = ['bar', 'poison'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placePsychicEvent = ['university', 'psychic'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGrassEvent = ['park', 'grass'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGrassEvent2 = ['camp_ground', 'grass'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGrassEvent3 = ['florist', 'grass'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGroundEvent = ['camp_ground', 'ground'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeBugEvent = ['park', 'bug'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeBugEvent2 = ['florist', 'bug'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeFlyingEvent = ['airport', 'flying'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeSteelEvent = ['airport', 'steel'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGhostEvent = ['cemetery', 'ghost'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeDarkEvent = ['cemetery', 'dark'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeGhostEvent2 = ['funeral_home', 'ghost'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeDarkEvent2 = ['funeral_home', 'dark'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeDragonEvent = ['amusement_park', 'dragon'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeElectricEvent = ['electrician', 'electric'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
      var placeElectricEvent2 = ['electronics_store', 'electric'].forEach(function (type) {
        return document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
          detail: {
            location: location,
            radius: 5000,
            type: type
          }
        }));
      });
    });

    _defineProperty(this, "handleGotPlaces", function (event) {
      _this.currentPlaces = event.detail;
      console.log(_this.currentPlaces);
    });

    _defineProperty(this, "handleSearch", function (event) {
      event.preventDefault();
      var locationEl = document.querySelector('[name="location"]');
      var locationTerm = locationEl.value;
      var pokemonEl = document.querySelector('[name="pokemon"]');
      var pokemonTerm = pokemonEl.value;
      console.log('searching..', locationTerm, pokemonTerm);
      var pokemonEvt = new CustomEvent('get-pokemon', {
        detail: pokemonTerm
      });
      document.querySelector('body').dispatchEvent(pokemonEvt);
      var evt = new CustomEvent('get-geocode', {
        detail: locationTerm
      });
      document.querySelector('body').dispatchEvent(evt);
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
