const Agent = require('../models/agent');

const getAgents = async (req,res)=>{
    try{
        let agents = await Agent.find({});
        res.status(200).json(agents);
    }catch(err){
        res.status(500).json({ message: error });
    }
}

const addAgents = async (req,res)=>{

    const agent = req.body;
    const newAgent = new player(agent);
    try{
        await newPlayer.save();
        res.status(201).json(newAgent);
    }catch(err){
        res.status(500).json({ message: error });
    }
}

module.exports = {getAgents,addAgents};