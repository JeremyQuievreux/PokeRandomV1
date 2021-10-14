const UserModel = require('../models/user');

const bcrypt = require("bcrypt");
const SALTS = 10;

const jwt = require('jsonwebtoken');




const user = {
    createAccount(req, res, next) {
        //Recup des infos du form
        let {pseudo, mail, password, confirmPassword} = req.body;
        //check que les infos sont remplies
        if (!pseudo || !mail || !password || !confirmPassword) {
            //si non renvoie status d'erreur
            return res.status(400).send("Tous les champs ne sont pas remplis");
        }
        //check que les password sont les meme
        if (password !== confirmPassword) {
            //si non return status error
            return res.status(400).send("Probleme de confirmation de mot de passe");
        }
        //Recherche dans la BDD si le mail existe deja
        UserModel.findOne({mail : mail})
            .then((isUserExist) => {
                //si le resultat de la requete est NULL
                if (isUserExist === null) {
                    //hash du password
                    let hashPassword = bcrypt.hashSync(password,SALTS);
                    // création du compte
                    return UserModel.create({
                        pseudo : pseudo,
                        mail : mail,
                        password : hashPassword
                    })
                    // alors envois status 200
                    .then((newUser) => {
                        console.log("compte crée");
                        return res.status(200).json({message : "Inscription Réussie"})
                    })
                    //sinon envois status 500
                    .catch((err) => {
                        console.log("compte pas crée");
                        return res.status(500);
                    })
                }
                return res.status(400).send("Mail deja utilisé");
            })
            .catch((err) => {
                return res.status(500)
            })
    },
    login(req, res, next){
        const {mail, password} = req.body;
        if (!mail || !password) {
            console.log("mail ou password pas remplis");
            return res.status(400)
        }
        UserModel.findOne({mail : mail})
            .then((user) => {
                
                if (user === null) {
                    console.log("No User");
                    return res.status(400).send("Mauvaise informations de connexion");
                }
                let isSamePassword = bcrypt.compareSync(password, user.password);

                if (!isSamePassword) {
                    console.log("Wrong password");
                    return res.status(404).send("Mauvaise information de connection");
                }

                const token = jwt.sign({
                    userId: user._id,
                    pseudo: user.pseudo,
                    mail: user.mail,
                    poke_coins: user.poke_coins,
                    next_click: user.next_click,
                    cardslist: user.cardslist
                    }, process.env.SECRET_JWT, { expiresIn: "24h" });



                res.status(200).json({message :"Connection réussi", token : token});
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    },
    getInfo(req, res, next){
        let authToken = req.headers.authorization.split(" ")[1];

        jwt.verify(authToken, process.env.SECRET_JWT, (err, decodedToken) => {
            if (err) {
                console.log(err)
                return res.sendStatus(400);
            }
            res.send(decodedToken)
        })
      

        
    }
}

module.exports = user;