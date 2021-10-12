const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(()=>{
        console.log("connection db ok");
})


const UserSchema = mongoose.Schema({
    pseudo : String,
    mail : String,
    password : String,
    poke_coins : Number,
    collection : [{}]
 }) 
 
 const UserModel = mongoose.model("user", UserSchema)
 
 module.exports = UserModel;