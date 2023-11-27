const Team = require('../models/team');
//PARA OBTENER TODOS LOS EQUIPOS Y AÑADIR UN EQUIPO
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
        console.log(res)
        await newTeam.save();
        res.status(201).json(newTeam);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

//ESTOS MÉTODOS SERÁN PARA ACTUALIZAR, ELIMINAR Y OBTENER UN EQUIPO CONCRETO
const updateTeam = async (req,res)=>{
    try{
        const team = await Team.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!team){
            res.status(400).json({message: 'Team not find'});
        }else{
            res.status(200).json({message:"Update complete"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const deleteTeam = async (req,res)=>{
    try{
        const team = await Team.findByIdAndDelete({_id : req.params.id});
        if(!team){
            res.status(400).json({message: 'Team not find'});
        }else{
            res.status(200).json({message:"Delete success"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const getTeam = async (req,res)=>{
    try{
        const team = await Team.findById({_id : req.params.id});
        if(!team){
            res.status(400).json({message : "This team don´t exist"});
        }else{
            res.status(200).json({team});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}



module.exports = {getTeams,addTeams,updateTeam,getTeam,deleteTeam};