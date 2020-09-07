class PokemonAPi {
	constructor() {
		p = new Pokedex.Pokedex();
		const bodyEl = document.querySelector('body');
		bodyEl.addEventListener('get-pokemon', this.handleGetPokemon);
		// bodyEl.addEventListener('get-places', this.handleGetPlaces);
	}
	pokedex = (pokemon) => {
		this.p.getPokemonByName({ pokemon: pokemon });
	};

	handleGetPokemon = (event) => {
		this.poekdex(event.detail);
		console.log(event.detail);
	};
}
