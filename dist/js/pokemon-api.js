"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokemonAPi = function PokemonAPi() {
  _classCallCheck(this, PokemonAPi);

  var p = new Pokedex.Pokedex();
  p.getTypeByName('ground').then(function (response) {
    console.log(response);
  });
}; // P.getTypeByName('ground').then(function (response) {
// 	console.log(response);
// });
// P.getPokemonByName("butterfree")
//     .then(function(response) {
//       console.log(response);
//     });
//# sourceMappingURL=pokemon-api.js.map
