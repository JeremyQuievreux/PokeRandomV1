const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    pseudo : String,
    mail : String,
    password : String,
    poke_coins : {type : Number, default : 1000},
    next_click : {type : Date, default : new Date()},
    cardslist : Array
 }) 
 
 const UserModel = mongoose.model("user", UserSchema)
 
 module.exports = UserModel;


/* 
 [
     {
         quantity : String,
         card : {}
     }
 ] */