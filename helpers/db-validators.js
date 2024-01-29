const { request } = require("express");
const Player = require("../models/player");
const User = require("../models/user");

const nameExist = async (name) => {
    const player = await Player.findOne({ name });
    if(player){
        throw new Error(`The player ${name} already exist`);
    }
}

const emailExist = async (email) => {
    const user = await User.findOne({ email });
    if(user){
        throw new Error(`The user ${email} already exist`);
    }
}

const loginExist = async (login) => {
    const user = await User.findOne({ login });
    if(user){
        throw new Error(`The user ${login} already exist`);
    }
}

const nameExistUpdate = async (name,{req})=>{
    const namePlayer = await Player.findOne({name});
    if(!namePlayer && !namePlayer._id.equals(req.params.id)){
        throw new Error("The player can´t be update")
    }
}

const loginUserExistUpdate = async (login,{req})=>{
    const loginUser = await User.findOne({login});
    if(!loginUser && !loginUser._id.equals(req.params.id)){
        throw new Error("The user can´t be update")
    }
}

const emailExistUpdate = async (email,{req})=>{
    const emailUser = await Player.findOne({email});
    if(!emailUser && !emailUser._id.equals(req.params.id)){
        throw new Error("The user can´t be update")
    }
}




module.exports = {nameExist, nameExistUpdate, emailExist, loginExist, emailExistUpdate, loginUserExistUpdate};