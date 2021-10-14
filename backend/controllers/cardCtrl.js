const PokemonModel = require('../models/pokemon');
const UserModel = require('../models/user');



const Cards = {
    getAll(req, res, next) {
        PokemonModel.find()
            .then((response) => { 
            res.send(response);
        })
    },
    getOneRandom(req, res, next) {
        let index = Math.floor(Math.random() * 151);

        PokemonModel.findOne({dex_number : index})
            .then((pokemonRandom) => {
                req.pokemon = pokemonRandom
                next();
            })
            .catch((err) => {
                console.log(err);
                res.status(400);
            })
    }
}

module.exports = Cards;