const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    dex_number : Number,
    gen : Number,
    name : String,
    types : [],
    height : Number,
    weigth : Number,
    picURL : String,
    description : {type: String, default :""},
    price : Number
 }) 
 
 const PokemonModel = mongoose.model("pokemon", PokemonSchema)
 
 


 module.exports = PokemonModel;