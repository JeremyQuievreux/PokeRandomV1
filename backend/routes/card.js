var express = require('express');
var router = express.Router();

const cardCtrl = require('../controllers/cardCtrl');

router.get('/',cardCtrl.getAll);

module.exports = router;