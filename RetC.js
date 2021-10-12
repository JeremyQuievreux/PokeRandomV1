/* 
routes : 
/user
    /create (input du formulaire) -> userctrl.create
    /login (input du formulaire) -> userctrl.login
    /userinfo (user id) -> userctrl.getinfo
    /addrandomcard (id) -> cardsctrl.getrandomcard, userctrl.addcard, userctrl.clickCooldown
    /updatemoney (id, sommes) -> userctrl.updatemoney, userctrl.clickcooldown
    /buycard (user id, card id) -> cardsctrl.getonecard, userctrl.addcard,  userctrl.updatemoney
    /sellcard (user is, card id) -> cardsctrl.getonecard, userctrl.removecard , userctrl.updatemoney


/cards
    /getAll ->cardsctrl.getAll



controllers : 
/user
    .create 
        - recupere les infos du formualaire
        - verifie si elle exite deja
        - si oui revoie message success false
        - si non les rajoute a la BDD
        - et returne success true)
    .login
        - recupere les infos du formulaire
        - verifie si elle corresponde
        - si oui retoune success true
        - si non retourne success false
    .getinfo
        -recupere l'id recue dans la requete
        - cherche dans la BDD l'user avec cette id
        - la renvoi au front
    .addcard
        - recupere l'id du user
        - recupere la card du controller precedent
        - rechercher si une la carte existe deja dans la collection du user
        - sinon ajouter la carte avec quantity 1
        - ajoute la carte dans la collection du user
        - retour success
        - si oui ajouter la carte et modifier quantity +1
        - return success
    .updatemoney
        - recupere l'id du user
        - recupere la sommes a ajouter ou a deduire
        - modifie la money du user par rapport au prix
        - return success
    .removecard
        - recupere l'id du user
        - recupere la carte du controller precendent
        - rechercher la carte dans la collection du user
        - la supprime
        - return success
    .clickCooldown
        - recupere l'id du user
        - change la date de la prochain que le click sera dispo
        - success true

/cards
    .getAll 
        - recupere les cards de la BDD
        - les renvoie au front
    .getrandomcard
        - creer un chiffre random
        - recupere avec l'index random
        - la passe au ctrl suivant
    .getonecard
        - recupere la card par rapport a l'id de la carte
        - la passe au controller suivant 
*/
