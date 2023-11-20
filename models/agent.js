const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    name: String,
    idPlayer: Number,
    email: String
})

module.exports = mongoose.model("Agent", AgentSchema);