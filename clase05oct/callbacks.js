//const saludar=(nombre)=>{
//  alert('hola'+ nombre);
//}

//const procesarentradausuario=(callback)=>{
//  var nombre= prompt('por fabor ingresa tu nombre');
//callback(nombre);
//}

//procesarentradausuario(saludar)
const cuandollegueelpokemon = (pokemon) => {
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-image")
    image.src = pokemon.sprites.front_default
}

const pokemonname = prompt('elige tu pokemon:')

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonname)
    .then(Response => Response.json())
    .then(cuandollegueelpokemon);