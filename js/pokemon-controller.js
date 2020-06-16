'use strict'


var gNextPic = 5
var gKeyWords


function renderPokemons() {
    var pokemons=getPokemons()
    var strHTML = ''
    strHTML = pokemons.map(currPoke => {
        return `
        <div class="poke-card" >
            <h1>${currPoke.name}</h1>
            <h3>Weight : ${currPoke.weight}</h3>
            <img id="${currPoke.id}" class="poke-img" src="${currPoke.sprites.front_default}"/>
    </div>`
    }).join('')
    $('.poke-container').html(strHTML)
}

function onStartAnimation() {
    var pokemons=getPokemons()
    pokemons.forEach(pokemon => {
        var nextSpriteUrl = pokemon.sprites[gKeyWords[gNextPic]]
        if (nextSpriteUrl !== null) {
            console.log("befor:", $(`#${pokemon.id}`).attr('src'))
            $(`#${pokemon.id}`).attr('src', nextSpriteUrl)
        }
    })
    gNextPic++
    if (gNextPic >= gKeyWords.length) gNextPic = 0
}


