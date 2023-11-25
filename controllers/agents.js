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
    try{
        const agent = await Agent.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!agent){
            res.status(400).json({message: 'Agent not find'});
        }else{
            res.status(200).json({message:"Update complete"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const deleteAgent = async (req,res)=>{
    try{
        const agent = await Agent.findByIdAndDelete({_id : req.params.id}, req.body );
        if(!agent){
            res.status(400).json({message: 'Agent not find'});
        }else{
            res.status(200).json({message:"Delete success"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const getAgent = async (req,res)=>{
    try{
        const agent = await Agent.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!agent){
            res.status(400).json({message : "This agent don´t exist"});
        }else{
            res.status(200).json({agent});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getAgents,addAgent,updateAgent,getAgent,deleteAgent};