var express = require('express');
var router = express.Router();

/* const formCtrl = require('../controllers/form'); */

router.post('/create', (req, res, next) => {
    console.log("requete sur /user");
    res.send("reponse du serveur sur /user/create")
});

module.exports = router;