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

UserSchema.methods.toJSON = function() {
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = mongoose.model("User", UserSchema);