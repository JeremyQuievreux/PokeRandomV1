var express = require('express');
var router = express.Router();

const cardCtrl = require('../controllers/cardCtrl');

router.get('/',cardCtrl.getAll);
router.get('/random', cardCtrl.getOneRandom);

module.exports = router;