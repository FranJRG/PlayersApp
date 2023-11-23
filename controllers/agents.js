const Agent = require('../models/agent');

const getAgents = async (req,res)=>{
    try{
        let agents = await Agent.find({});
        res.status(200).json(agents);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const addAgent = async (req,res)=>{

    const agent = req.body;
    const newAgent = new Agent(agent);
    try{
        await newAgent.save();
        res.status(201).json(newAgent);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getAgents,addAgent};