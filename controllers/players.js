const Player = require('../models/player');

const getPlayers = async (req,res)=>{
    try{
        let players = await Player.find({});
        res.status(200).json(players);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const addPlayer = async (req,res)=>{

    const player = req.body;
    const newPlayer = new Player(player);
    try{
        await newPlayer.save();
        res.status(201).json(newPlayer);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const updatePlayer = async (req,res)=>{
    const playerId = req.params.id;
    const update = req.body;
    try{
        const player = await Player.findByIdAndUpdate(playerId, update, {new:true});
        if(!player){
            res.status(400).json({message: error});
        }else{
            res.status(200).json(player)
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getPlayers,addPlayer,updatePlayer}