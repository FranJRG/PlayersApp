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

module.exports = {getTeams,addTeams};