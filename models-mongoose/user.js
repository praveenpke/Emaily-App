//mongoose user model

const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;  //ES6 destructuring

const userSchema = new Schema({
    googleId: {
        type:String,
        unique:true
    }

});

mongoose.model('users',userSchema);


