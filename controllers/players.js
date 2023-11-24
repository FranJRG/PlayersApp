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
    try{
        const player = await Player.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!player){
            res.status(400).json({message: 'Player not find'});
        }else{
            res.status(200).json({message:"Update complete"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const getPlayer = async (req,res)=>{
    try{
        const player = await Team.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!player){
            res.status(400).json({message : "This player don´t exist"});
        }else{
            res.status(200).json({player});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const deletePlayer = async (req,res)=>{
    try{
        const player = await Team.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!player){
            res.status(400).json({message : "This player don´t exist"});
        }else{
            res.status(200).json({message : "Delete success"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getPlayers,addPlayer,updatePlayer,getPlayer,deletePlayer}