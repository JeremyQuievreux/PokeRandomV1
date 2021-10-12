var express = require('express');
var router = express.Router();

/* const formCtrl = require('../controllers/form'); */

router.get('/', (req, res, next) => {
    console.log("requete sur /user");
    res.send("reponse du serveur sur /user")
});

module.exports = router;