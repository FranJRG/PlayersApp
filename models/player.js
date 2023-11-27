const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type:String,
        required:[true,'Please add a player name']
    },
    age: Number,
    team: String,
    status: String
})

module.exports = mongoose.model("Player", PlayerSchema);