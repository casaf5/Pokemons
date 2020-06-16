'use strict'

function getPokemonsFromApi(onSuccses,count) {
    $.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=1`, onSuccses)
}

function getPokemonDetails(onSuccses,url) {
    $.get(url, onSuccses) 
}