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

const updateAgent = async (req,res)=>{
    const agentId = req.params.id;
    const update = req.body;
    try{
        const agent = await Agent.findByIdAndUpdate(agentId, update, {new:true});
        if(!agent){
            res.status(400).json({message: error});
        }else{
            res.status(200).json(agent)
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getAgents,addAgent,updateAgent};