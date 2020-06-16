'use strict'
var gPokemons = []

function init() {
    // var pokeCount = $('#poke-count').val()
    getPokemonsFromApi(_createPokemons, 40)
    setTimeout(() => {
        console.log(gPokemons)
        sortPokemons()
        renderPokemons()
        gKeyWords = Object.keys(gPokemons[0].sprites)
        setInterval(onStartAnimation, 4000)
    }, 1500);

}
function _createPokemons(pokemons) {
    pokemons.results.forEach(pokemon => {
        getPokemonDetails(addPokemon, pokemon.url)
    })
}
function addPokemon(pokemon) {
    gPokemons.push(pokemon)
}

function sortPokemons() {
    gPokemons = gPokemons.sort((pokeA, pokeB) => {
        var nameA = pokeA.name.toUpperCase(); // ignore upper and lowercase
        var nameB = pokeB.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

}
function getPokemons() {
    return gPokemons
}