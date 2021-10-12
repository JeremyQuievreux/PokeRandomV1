const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://jquievreux:Erin25012017@cluster0.a56uw.mongodb.net/pokerandom";

mongoose.connect(DB_URI).then(() => console.log('DB OK'))
