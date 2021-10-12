const PokemonModel = require('../models/pokemon');



const Cards = {
    getAll(req, res, next) {
        PokemonModel.find()
            .then((response) => { 
            res.send(response);
        })
    },
    getOneRandom(req, res, next) {
        let index = Math.floor(Math.random() * 151);
        PokemonModel.find({dex_number : index})
            .then((response) => {
                res.send(response);
            })

    }
}

module.exports = Cards;