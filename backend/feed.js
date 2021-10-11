console.log("hello le feeder");


async function getpokemon() {
    /* Envoi de la requête */
    let reponse = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(() => console.log(reponse))
    
    let donnees = await reponse.json();
    console.log(donnees);

    return donnees;
}


async function feedData(){
    let pokemons = []
    for (let i = 0 ; i < 151 ; i++){
      let pokemon = await get(pokeapi/i)
      pokemons.push(pokemon)
    } 
    return pokemons
  }