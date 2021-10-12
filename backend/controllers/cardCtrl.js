const PokemonModel = require('../models/pokemon');

const Cards = {
    getAll(req, res, next) {
        PokemonModel.find()
            .then((response) => { 
            res.send(response);
        })
}
}

module.exports = Cards;