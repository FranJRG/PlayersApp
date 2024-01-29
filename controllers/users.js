const User = require('../models/user');

const getUsers = async (req,res)=>{
    try{
        let users = await User.find({});
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const addUser = async (req,res)=>{

    const user = req.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const updateUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate({_id : req.params.id}, req.body );
        if(!user){
            res.status(400).json({message: 'User not find'});
        }else{
            res.status(200).json({message:"Update complete"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const getUser = async (req,res)=>{
    try{
        const user = await User.findById({_id : req.params.id});
        if(!user){
            res.status(400).json({message : "This user don´t exist"});
        }else{
            res.status(200).json(user);
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

const deleteUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete({_id : req.params.id});
        if(!user){
            res.status(400).json({message : "This user don´t exist"});
        }else{
            res.status(200).json({message : "Delete success"});
        }
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {getUsers,addUser,updateUser,getUser,deleteUser}