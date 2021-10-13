var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/userCtrl');

/* function checkToken(req, res, next) {
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
        return res.sendStatus(401);
        }
        req.user = user;
        console.log(user);
        next();
    })
} */

router.post('/create', userCtrl.createAccount);

router.post('/login', userCtrl.login);

module.exports = router;