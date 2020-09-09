"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokemonAPi = function PokemonAPi() {
  _classCallCheck(this, PokemonAPi);

  var bodyEl = document.querySelector('body');
  bodyEl.addEventListener('get-pokemon', this.handleGetPokemon); // bodyEl.addEventListener('get-places', this.handleGetPlaces);
};
//# sourceMappingURL=pokemon-api.js.map
