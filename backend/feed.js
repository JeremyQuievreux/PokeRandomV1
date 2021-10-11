console.log("hello le feeder");

const Pokemon = require('./models/pokemon');


const axios = require('axios').default;

let dex = 4;

axios.get('https://pokeapi.co/api/v2/pokemon/'+ dex)
  .then(function (response) {
    let pokemon = response.data;
    console.log(pokemon.id);
    console.log(pokemon.name);
    console.log(pokemon.types[0].type.name);
    let types = [];
    console.log(pokemon.height);
    console.log(pokemon.weight);
    console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`);

    
	
    /* let newPokemon = new Pokemon(
      { dex_number : pokemon.id,
        name : pokemon.name,
        types : pokemon.types,
        height : pokemon.height,
        weigth : pokemon.weight,
        picURL : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`
      });
    
    newPokemon.save();
    console.log("ok"); */
  })
  .catch(function (error) {
    console.log(error);
  })

  