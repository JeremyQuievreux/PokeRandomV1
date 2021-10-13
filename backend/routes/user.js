var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/userCtrl');

/* function checkToken(req, res) {
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
        return res.sendStatus(401);
        }
    res.status(200)        ;
    })
} */

router.post('/create', userCtrl.createAccount);

router.post('/login', userCtrl.login);

module.exports = router;