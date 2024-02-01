const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {
        type:String,
        required:[true, "The email is required for all the users"],
        unique:true
    },
    login: {
        type:String,
        required:[true, "The login is required for all the users"],
        unique:true
    },
    name:String,
    role:String,
    password:String,
    active:Boolean
})

module.exports = mongoose.model("User", UserSchema);