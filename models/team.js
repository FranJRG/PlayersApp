const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: String,
    idPlayer: Number,
    numPlayers: Number
})

module.exports = mongoose.model("Player", PlayerSchema);