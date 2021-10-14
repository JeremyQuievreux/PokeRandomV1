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
        let userID = req.body.userId;

        PokemonModel.findOne({dex_number : index})
            .then((pokemonRandom) => {
                UserModel.findOneAndUpdate({_id : userID}, 
                    { $push: { cardslist: pokemonRandom } })
                .then((qqchose) => {
                })
            })
            .catch((err) => {
                console.log(err);
            })
        
        next();
    }
}

module.exports = Cards;