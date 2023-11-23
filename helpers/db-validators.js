const Player = require("../models/player");

const nameExist = async (name) => {
    const player = await Player.findOne({ name });
    if(player){
        throw new Error(`El jugador ${name} ya existe`);
    }
}

module.exports = {nameExist};