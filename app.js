const express = require('express') //importamos express
const app = express() 
const playerRoutes = require('./routes/players')

app.use(express.json());
app.use('/players',playerRoutes);


// Iniciamos el servidor
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})