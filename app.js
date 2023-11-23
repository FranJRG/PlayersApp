const express = require('express');
const cors = require('cors')
const app = express();
const playerRoutes = require('./routes/player');
const teamRoutes = require('./routes/team');
const agentRoutes = require('./routes/agent');
//const dotenv = require('dotenv')
//dotenv.config()
require('dotenv').config();

// Database conection

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database connected');
}
main().catch((err) => console.log(err));


app.use(cors());
app.use(express.json())


// Ruta para obtener la lista de usuarios
app.use('/teams', teamRoutes)
app.use('/players', playerRoutes)
app.use('/agents', agentRoutes)


// Iniciar el servidor en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${process.env.PORT}`);
});