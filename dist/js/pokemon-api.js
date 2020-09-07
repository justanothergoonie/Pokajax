"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PokemonAPi = function PokemonAPi() {
  var _this = this;

  _classCallCheck(this, PokemonAPi);

  _defineProperty(this, "pokedex", function (pokemon) {
    _this.p.getPokemonByName({
      pokemon: pokemon
    });
  });

  _defineProperty(this, "handleGetPokemon", function (event) {
    _this.poekdex(event.detail);

    console.log(event.detail);
  });

  p = new Pokedex.Pokedex();
  var bodyEl = document.querySelector('body');
  bodyEl.addEventListener('get-pokemon', this.handleGetPokemon); // bodyEl.addEventListener('get-places', this.handleGetPlaces);
}; // P.getTypeByName('ground').then(function (response) {
// 	console.log(response);
// });
// P.getPokemonByName("butterfree")
//     .then(function(response) {
//       console.log(response);
//     });
//# sourceMappingURL=pokemon-api.js.map
