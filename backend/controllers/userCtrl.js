const UserModel = require('../models/user');

const bcrypt = require("bcrypt");
const SALTS = 10;



const user = {
    createAccount(req, res, next) {
        //Recup des infos du form
        let {pseudo, mail, password, confirmPassword} = req.body;
        //check que les infos sont remplies
        if (!pseudo || !mail || !password || !confirmPassword) {
            console.log("Manque d'infos");
            //si non renvoie status d'erreur
            return res.sendStatus(400);
        }
        //check que les password sont les meme
        if (password !== confirmPassword) {
            console.log("les 2 passwords sont pas les meme");
            //si non return status error
            return res.status(400).send("Passwords don't match");
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
                        return res.status(200).send(newUser)
                    })
                    //sinon envois status 500
                    .catch((err) => {
                        console.log("compte pas crée");
                        return res.status(500);
                    })
                }
                console.log("mail deja utilisé");
                return res.status(400).send("Email exist already");
            })
            .catch((err) => {
                console.log("erreur");
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
                res.status(200).send("utilisateur connecté")
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    }
}

module.exports = user;