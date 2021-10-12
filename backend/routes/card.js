var express = require('express');
var router = express.Router();


const PokemonModel = require('../models/pokemon');

router.get('/', (req, res, next) => {
    PokemonModel.find().then((response) => { 
        console.log("ok");
        res.send(response);
    })
});

module.exports = router;