var express = require('express');
var router = express.Router();

const cardCtrl = require('../controllers/cardCtrl');
const userCtrl = require('../controllers/userCtrl');

router.get('/',cardCtrl.getAll);
router.post('/random', cardCtrl.getOneRandom, userCtrl.refreshToken);

module.exports = router;