const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(()=>{
        console.log("connection db ok");
})


const PokemonSchema = mongoose.Schema({
    dex_number : Number,
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