const getPlayers = async (req,res)=>{
    try{
        let players = await Player.find({});
        res.status(201).json(players);
    }catch(err){
        console.log("Error:", err)
        res.sendStatus(500)
    }
}

const addPlayers = async (req,res)=>{

    const player = req.body;
    const newPlayer = new player(player);
    try{
        await newPlayer.save();
        res.status(201).json(newPlayer);
    }catch(err){
        console.log(err)
        res.status(409).send("This Player already exists");
    }
}

