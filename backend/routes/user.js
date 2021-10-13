var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/userCtrl');

router.post('/create', userCtrl.createAccount);

router.post('/login', userCtrl.login);

module.exports = router;