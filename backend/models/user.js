const mongoose = require('mongoose');

const Pokemon = require('./pokemon');

const UserSchema = mongoose.Schema({
    pseudo : String,
    mail : String,
    password : String,
    poke_coins : {type : Number, default : 1000},
    next_click : {type : Date, default : new Date()},
    cardslist : {
        type : [Pokemon.schema],
        default : []
    }
 }) 
 
 const UserModel = mongoose.model("user", UserSchema)
 
 module.exports = UserModel;


/* 
 [
     {
         quantity : Number,
         card : {}
     }
 ] 
 userModale.udpate({id})$push:{cardslist:{card}}
 
 
 */