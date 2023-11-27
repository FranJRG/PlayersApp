const { request } = require("express");
const Player = require("../models/player");

const nameExist = async (name) => {
    const player = await Player.findOne({ name });
    if(player){
        throw new Error(`The player ${name} already exist`);
    }
}

const nameExistUpdate = async (name,{req})=>{
    const namePlayer = await Player.findOne({name});
    if(!namePlayer && !namePlayer._id.equals(req.params.id)){
        throw new Error("The player can´t be update")
    }
}


module.exports = {nameExist, nameExistUpdate};