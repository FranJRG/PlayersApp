const Team = require('../models/team');

const getTeams = async (req,res)=>{
    try{
        let teams = await Team.find({});
        res.status(200).json(teams);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const addTeams = async (req,res)=>{

    const team = req.body;
    const newTeam = new Team(team);
    try{
        await newTeam.save();
        res.status(201).json(newTeam);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const updateTeam = async (req,res)=>{
    const teamId = req.params.id;
    const update = req.body;
    try{
        const team = await Team.findByIdAndUpdate(teamId, update, {new:true});
        if(!team){
            res.status(400).json({message: 'Esquipo no encontrado'});
        }else{
            res.status(200).json(team)
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getTeams,addTeams,updateTeam};