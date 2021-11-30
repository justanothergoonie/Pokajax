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

    _defineProperty(this, "currentPokemonName", '');

    _defineProperty(this, "currentPokemonImg", '');

    _defineProperty(this, "currentPokemonMove1", '');

    _defineProperty(this, "currentPokemonMove2", '');

    _defineProperty(this, "currentPokemonAttack", '');

    _defineProperty(this, "currentPokemonSpecialAttack", '');

    _defineProperty(this, "currentPokemonDefense", '');

    _defineProperty(this, "currentPokemonSpecialDefense", '');

    _defineProperty(this, "currentPokemonSpeed", '');

    _defineProperty(this, "currentPokemonHealth", '');

    _defineProperty(this, "currentPokemonAbility", '');

    _defineProperty(this, "radiusEl", document.querySelector('[name="radius"]'));

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

      document.querySelector('body').dispatchEvent(new CustomEvent('get-places', {
        detail: {
          location: _this.currentLocation,
          radius: _this.radiusEl.value,
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
          icon: _this.currentPokemonImg,
          name: _this.currentPokemonName,
          type: _this.currentPokemonType,
          health: _this.currentPokemonHealth,
          speed: _this.currentPokemonSpeed,
          moves: _this.moves,
          attack: _this.currentPokemonAttack,
          specAttack: _this.currentPokemonSpecialAttack,
          defense: _this.currentPokemonDefense,
          specDefense: _this.currentPokemonSpecialDefense,
          infoWindowContent: [_this.currentPokemonType, _this.currentPokemonHealth, _this.currentPokemonSpeed, _this.currentPokemonMoves, _this.currentPokemonAttack, _this.currentPokemonSpecialAttack, _this.currentPokemonDefense, _this.currentPokemonSpecialDefense]
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
        _this.currentPokemonName = response.species.name;
        _this.currentPokemonImg = response.sprites.front_default;
        var abilities = response.abilities;
        var abilityIndex = Math.floor(Math.random() * abilities.length);
        _this.currentPokemonAbility = abilities[abilityIndex].ability.name;
        _this.currentPokemonHealth = response.stats[0].base_stat;
        _this.currentPokemonAttack = response.stats[1].base_stat;
        _this.currentPokemonDefense = response.stats[2].base_stat;
        _this.currentPokemonSpecialAttack = response.stats[3].base_stat;
        _this.currentPokemonSpecialDefense = response.stats[4].base_stat;
        _this.currentPokemonSpeed = response.stats[5].base_stat;
        _this.moves = response.moves; // const movesIndex1 = Math.floor(Math.random() * moves.length);
        // const movesIndex2 = Math.floor(Math.random() * moves.length);
        // this.currentPokemonMove1 = moves[movesIndex1].move.name;
        // this.currentPokemonMove2 = moves[movesIndex2].move.name;

        console.log(response, _this.currentPokemonName, _this.currentPokemonType, _this.currentPokemonAbility, _this.currentPokemonHealth, _this.currentPokemonAttack, _this.currentPokemonDefense, _this.currentPokemonSpecialAttack, _this.currentPokemonSpecialDefense, _this.currentPokemonSpeed, _this.currentPokemonMoves);
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
      }); // const api = new WeatherApi();
      // api.weatherSearch(locationTerm);

    });

    _defineProperty(this, "handleSearchError", function () {});

    _defineProperty(this, "handleWeather", function (event) {
      var results = event.detail;
      console.log('showing results from map', results);
    });

    this.setupEventListeners();
  }

  _createClass(Main, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var buttonEl = document.querySelector('[name="add-pokemon"]');
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
