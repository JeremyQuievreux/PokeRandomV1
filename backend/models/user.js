const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    pseudo : String,
    mail : String,
    password : String,
    poke_coins : {type : Number, default : 1000},
    /* collection : [
        {
            quantity : number,
            card : {cardModel}
        }], */
    next_click : {type : Date, default : new Date()}
 }) 
 
 const UserModel = mongoose.model("user", UserSchema)
 
 module.exports = UserModel;